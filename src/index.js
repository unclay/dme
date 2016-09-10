require('./style.css')
import check from './check'

// 获取当前时间
exports.date = () => {
  return new Date()
}

for (let key in check) {
	exports[key] = check[key]
}