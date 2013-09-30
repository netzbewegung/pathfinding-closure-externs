/**
 * @fileoverview Externs for the pathfinding
 * @externs
 */

/**
 * @constructor
 */
PF.Util = function() {};

/**
 * @param {PF.Node} node
 * @return {Array.<Array.<number>>}
 */
PF.Util.backtrace = function(node) {};

/**
 * @param {PF.Node} nodeA
 * @param {PF.Node} nodeB
 * @return {Array.<Array.<number>>}
 */
PF.Util.biBacktrace = function(nodeA, nodeB) {};

/**
 * @param {Array.<Array.<number>>} path
 * @return {number}
 */
PF.Util.pathLength = function(path) {};


/**
 * @param {number} x0
 * @param {number} y0
 * @param {number} x1
 * @param {number} y1
 * @return {Array.<Array.<number>>}
 */
PF.Util.getLine = function(x0, y0, x1, y1) {};


/**
 * @param {PF.Grid} grid
 * @param {Array.<Array.<number>>} path
 * @return {Array.<Array.<number>>}
 */
PF.Util.smoothenPath = function(grid, path) {};