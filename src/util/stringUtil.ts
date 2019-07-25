const stringUtil = {
  randomString: (length?: 8) => {
    const str =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let target = "";
    for (let i = 0; i < length; i++) {
      target += str.charAt(Math.round(Math.random() * str.length));
    }
    return target;
  }
};

export default stringUtil;
