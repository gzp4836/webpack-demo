import _ from 'lodash'
import './style.styl'
import Icon from './icon.png'
import Data from './data.xml'
import printMe from './print'

function component() {
	const element = document.createElement('div')
	const btn = document.createElement('button')
	btn.innerHTML = 'Click me and check the console!'
	btn.onclick = printMe
	element.innerHtml = _.jion(['Hello', 'webpack'], '')
	element.appendChild(btn)
	element.classList.add('hello')
	// 图像保存在div中
	var myIcon = new Image()
	myIcon.src = Icon
	element.appendChild(myIcon)
	console.log(Data)
	return element
}
document.body.appendChild(component())
