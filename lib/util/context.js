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
 * // Define a new context using an object of injectable objects (typically coin network classes).
 * var context = new Context({
 *   Address: Address,
 * 	 Networks: Networks
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
 *
 * // Use the injected object.
 * var address = new this.ctx.Address();
 */
class Context {
	constructor(injectables) {
		var self = this;

		self.inject = function (obj) {
			obj.ctx = {};

			// Inject the given context into the specified object.
			if (injectables) {
		    lodash.forEach(lodash.pull(Object.keys(injectables)), function(k) {
					obj.ctx[k] = injectables[k];
		    });
		  }

	    // Provide access to this context.
      obj.getContext = function() {
      	return self;
      };
	  };

	}
};

module.exports = Context;
