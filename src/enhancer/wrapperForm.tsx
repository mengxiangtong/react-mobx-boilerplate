import { Form } from "antd";
import { FormComponentProps, FormCreateOption } from "antd/lib/form";

/**
 * 封装 antd 的 Form.create() 避免书写过多中间类代码
 */
export function wrapperForm<TOwnProps extends FormComponentProps<any>>(
  options?: FormCreateOption<TOwnProps>
): any {
  return function decorate(Component: any) {
    return Form.create(options)(Component);
  };
}
