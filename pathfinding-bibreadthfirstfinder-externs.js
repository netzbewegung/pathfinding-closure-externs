/**
 * @fileoverview Externs for the pathfinding
 * @externs
 */

/**
 * @constructor
 * @param {Object=} opt
 */
PF.BiBreadthFirstFinder = function(opt) {};


/**
 * @param {number} startX
 * @param {number} startY
 * @param {number} endX
 * @param {number} endY
 * @param {PF.Grid} grid
 * @return {Array.<[number, number]>}
 */
PF.BiBreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {};

