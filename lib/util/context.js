'use strict';

var lodash = require('lodash');

/**
 * This class enables injection of library context into a base implementation.
 * 
 * Example:
 *
 * In 'myclass.js'
 * 
 * // Require this class.
 * var Context = require('path/context');
 *
 * // Require the injectables.
 * var Address = require(..);
 * var Networks = require(..);
 *
 * // Define a new context. T
 * var context = new Context({
 *   Address: Address,
 * 	 Networks: Networks,
 * });
 *
 * // Construct the base class by passing in the context object.
 * class MyClass extends MyBaseClass {
 *     constructor() {
 *     super(context);
 *   }
 * };
 *
 * In 'mybaseclass.js'
 *
 * // Inject the context into the base class.
 * class MyBaseClass {
 *   constructor(context, opts, config, cb) {
 *     context.inject(this);
 *   }
 * };
 */
class Context {
	constructor(ctx) {

		// Injects the given context into the specified object.
		this.inject = function (obj) {
	    lodash.forEach(lodash.pull(Object.keys(ctx)), function(k) {
	      obj[k] = ctx[k];
	    });
	  };

	}
};

module.exports = Context;
