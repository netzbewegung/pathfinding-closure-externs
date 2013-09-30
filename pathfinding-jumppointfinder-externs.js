/**
 * @fileoverview Externs for the pathfinding
 * @externs
 */

/**
 * @constructor
 * @param {Object=} opt
 */
PF.JumpPointFinder = function(opt) {};

/**
 * @param {number} startX
 * @param {number} startY
 * @param {number} endX
 * @param {number} endY
 * @param {PF.Grid} grid
 * @return {Array.<[number, number]>}
 */
PF.JumpPointFinder.prototype.findPath = function(startX, startY, endX, endY, grid) {};

/**
 * @param {PF.Node} node
 * @protected
 */
PF.JumpPointFinder.prototype._identifySuccessors = function(node) {};

/**
 * @protected
 * @param {number} x
 * @param {number} y
 * @param {number} px
 * @param {number} py
 * @return {Array.<[number, number]>}
 */
PF.JumpPointFinder.prototype._jump = function(x, y, px, py) {};

/**
 * @protected
 * @param {PF.Node} node
 * @return {Array.<[number, number]>}
 */
PF.JumpPointFinder.prototype._findNeighbors = function(node) {};

