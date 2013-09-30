/**
 * @fileoverview Externs for the pathfinding
 * @externs
 */

/**
 * @constructor
 * @param {Object=} opt
 */
PF.BreadthFirstFinder = function(opt) {};

/**
 * @param {number} startX
 * @param {number} startY
 * @param {number} endX
 * @param {number} endY
 * @param {PF.Grid} grid
 * @return {Array.<[number, number]>}
 */
PF.BreadthFirstFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {};

