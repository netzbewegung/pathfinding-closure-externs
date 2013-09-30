/**
 * @fileoverview Externs for the pathfinding
 * @externs
 */

/**
 * @constructor
 * @param {*} cmp
 */
PF.Heap = function(cmp) {}

/**
 * @param {number} x
 * @return {*}
 */
PF.Heap.prototype.push = function(x) {};

/**
 * @return {*}
 */
PF.Heap.prototype.pop = function() {};

/**
 * @return {*}
 */
PF.Heap.prototype.peek = function() {};

/**
 * @param {number} x
 * @return {boolean}
 */
PF.Heap.prototype.contains = function(x) {};

/**
 * @param {number} x
 * @return {*}
 */
PF.Heap.prototype.replace = function(x) {};

/**
 * @param {number} x
 * @return {*}
 */
PF.Heap.prototype.pushpop = function(x) {};

/**
 * @return {*}
 */
PF.Heap.prototype.heapify = function() {};

/**
 * @return {*}
 */
PF.Heap.prototype.updateItem = function(x) {};

/**
 * @return {*}
 */
PF.Heap.prototype.clear = function() {};

/**
 * @return {*}
 */
PF.Heap.prototype.empty = function() {};

/**
 * @return {*}
 */
PF.Heap.prototype.size = function() {};

/**
 * @return {PF.Heap}
 */
PF.Heap.prototype.clone = function() {};

/**
 * @return {*}
 */
PF.Heap.prototype.toArray = function() {};
