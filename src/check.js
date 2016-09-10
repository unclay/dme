const ua = navigator.userAgent.toLowerCase()
const wxReg = /micromessenger/i
const webReg = /appleWebKit.*mobile.*/i

// 是否是移动端
exports.isWeb = () => {
  return webReg.test(ua);
}

// 是否是微信
exports.isWx = () => {
  return wxReg.test(ua);
}