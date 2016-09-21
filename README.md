[![API stability](https://img.shields.io/badge/stability-experimental-orange.svg?style=flat-square)](https://nodejs.org/api/documentation.html#documentation_stability_index)
[![JavaScript Style Guide](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat-square)](http://standardjs.com/)
# most-vdom-adapter

> Experimental Most Adapter for vdoms

## Get It
```sh
npm -i -S most-vdom-adapter
```

## Usage

With snabbdom:

```js
import {compose as compose2} from '@most/prelude'
import {drain} from 'most'
import adapter from 'most-vdom-adapter'

import snabbdom from 'snabbdom'
import events from 'snabbdom/modules/eventlisteners' 
import attrs from 'snabbdom/modules/attributes'
import clss from 'snabbdom/modules/class'
import h from 'snabbdom/h'

const compose = (...fns) = fns.reduce(compose2)
const tap = fn => s => s.tap(fn)
const map = fn => s => s.map(fn)
const take = n => s => s.take(n)
const log = console.log.bind(console)

const patch = snabbdom.init([events, attrs, clss])

const vnode = h('button.btn', {
  on: {
    'click': compose(drain, tap(log), take(4), map(event => event.target), adapter) 
  }
}, 'Really Cool Button')

patch(document.querySelector('.container'), vnode)
```

With inferno w/ createBlueprint:

```js
import {compose as compose2} from '@most/prelude'
import {drain} from 'most'
import adapter from 'most-vdom-adapter'

import {createBlueprint} from 'inferno'
import {render} from 'inferno-dom'

const compose = (...fns) = fns.reduce(compose2)
const tap = fn => s => s.tap(fn)
const map = fn => s => s.map(fn)
const take = n => s => s.take(n)

const log = console.log.bind(console)

const reallyCoolBtn = createBlueprint({
    tag: 'button',
    attrs: {
        class: 'btn'
    },
    events: {
        arg: 0
    },
    children: {
        arg: 1
    }
})

render(reallyCoolBtn({
    onclick: compose(drain, tap(log), take(4), map(event => event.target), adapter) 
}, 'Let it Burn!'), document.querySelector('.container'))
```

## Made with

[@most/package-starter](https://github.com/mostjs/package-starter)






