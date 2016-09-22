/** @license MIT License (c) copyright 2016 original author or authors */

const adapter = require('../dist/most-vdom-adapter')

const jsdom = require('jsdom')

jsdom.env(
    '<div class="container"><button class="btn">Click Me</button></div>',
    function(err, window) {
        const document = window.document
        const btn = document.querySelector('.btn')

        btn.addEventListener('click', function(event){
	    console.log('called', event.target)
	})

	btn.click()
	
	const clone = btn.cloneNode(true)
         
	btn.parentNode.replaceChild(clone, btn)
 
	btn.click()
    }
)
