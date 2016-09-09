require('./style.css')
import check from './check'

for (let key in check) {
	exports[key] = check[key]
}