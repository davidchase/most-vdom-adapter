(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('most')) :
  typeof define === 'function' && define.amd ? define(['exports', 'most'], factory) :
  (factory((global['mostVdomAdapter'] = global.most-vdom-adapter || {}),global.most));
}(this, (function (exports,most) { 'use strict';

/** @license MIT License (c) copyright 2016 original author or authors */
var adapter = function (evnt) { return new most.Stream(new AdapterSource(evnt)); }

var AdapterSource = function AdapterSource (evnt) {
  this.evnt = evnt
};
AdapterSource.prototype.run = function run (sink, scheduler) {
  var evnt = this.evnt
  var clone = evnt.target.cloneNode(true)
  var handler = function (event) { return sink.event(scheduler.now(), event); }

  sink.event(scheduler.now(), evnt)
  evnt.target.parentNode.replaceChild(clone, evnt.target)
  clone.addEventListener(evnt.type, handler)
  var dispose = function () { return clone.removeEventListener(evnt.type, handler); }
  return { dispose: dispose }
};

exports.adapter = adapter;

Object.defineProperty(exports, '__esModule', { value: true });

})));
