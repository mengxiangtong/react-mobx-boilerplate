import * as React from 'react'
import NoPermission from 'component/NoPermission/NoPermission'

// 权限说明
export type Permission = () => Promise<void>

const promiseAny = promises => {
  let rejectCount = 0
  let firstRejectRes
  return new Promise((outerResolve, outerReject) => {
    promises.forEach(promise => {
      promise.then(
        res => {
          outerResolve(res)
        },
        res => {
          if (rejectCount === 0) {
            firstRejectRes = res
          }
          rejectCount++
          if (rejectCount === promises.length) {
            outerReject(firstRejectRes)
          }
        }
      )
    })
  })
}

// 校验添加的权限，拥有任意一个权限即可
const validate = (permissions: Permission[]) => {
  return promiseAny(
    permissions.map(permission => {
      return permission()
    })
  )
}

export const PermissionRequired = {
  passerRequired: () => {
    return PermissionCheck.isDefault() ? Promise.resolve() : Promise.reject()
  }
}

export const PermissionCheck = {
  isDefault: () => {
    return true
  }
}

const ComponentStatus = {
  PENDING: 'pending',
  FULL_FILLED: 'full_filled',
  REJECTED: 'rejected'
}

export default function registerPermission(...permissions: Permission[]) {
  return function decorate(Component: any) {
    return class PermissionWrapper extends React.Component<any, any> {
      constructor(props) {
        super(props)
        this.state = {
          status: ComponentStatus.PENDING
        }
      }

      componentDidMount(): void {
        validate(permissions).then(
          resolveRes => {
            this.setState({ status: ComponentStatus.FULL_FILLED })
          },
          rejectRes => {
            this.setState({ status: ComponentStatus.REJECTED })
          }
        )
      }

      render() {
        const { status } = this.state
        return (
          <React.Fragment>
            {status === ComponentStatus.PENDING && (
              <div id="loading">loading</div>
            )}
            {status === ComponentStatus.FULL_FILLED && (
              <Component {...this.props} />
            )}
            {status === ComponentStatus.REJECTED && <NoPermission/>}
          </React.Fragment>
        )
      }
    }
  }
}
