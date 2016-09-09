var ua = function() {
	return window.__ua || navigator.userAgent.toLowerCase();
};

var wxReg = /micromessenger/i;

// 是否是微信
exports.isWx = () => {
	return wxReg.test(ua());
}