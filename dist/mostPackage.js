(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global['@most/mostPackage'] = factory());
}(this, (function () { 'use strict';

/** @license MIT License (c) copyright 2016 original author or authors */

// import {...} from 'most';

var index = function (x) { return x; }

return index;

})));
