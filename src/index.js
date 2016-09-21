/** @license MIT License (c) copyright 2016 original author or authors */
import {Stream} from 'most'

export const adapter = evnt => new Stream(new AdapterSource(evnt))

class AdapterSource {
   constructor (evnt) {
     this.evnt = evnt
   }
   run (sink, scheduler) {
     const evnt = this.evnt
     const clone = evnt.target.cloneNode(true)
     const handler = event => sink.event(scheduler.now(), event)

     sink.event(scheduler.now(), evnt)
     evnt.target.parentNode.replaceChild(clone, evnt.target)
     clone.addEventListener(evnt.type, handler)
     const dispose = () => clone.removeEventListener(evnt.type, handler)
     return { dispose }
   }
}
