/**
 * @fileoverview Externs for the pathfinding
 * @externs
 */

/**
 * @constructor
 * @param {number} width
 * @param {number} height
 * @param {Array.<Array.<(number|boolean)>>} matrix
 */
PF.Grid = function(width, height, matrix) {};

/**
 * @param {number} width
 * @param {number} height
 * @param {Array.<Array.<number|boolean>>} matrix
 */
PF.Grid.prototype._buildNodes = function(width, height, matrix) {};

/**
 * @param {number} x
 * @param {number} y
 * @return {PF.Node}
 */
PF.Grid.prototype.getNodeAt = function(x, y) {};


/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PF.Grid.prototype.isWalkableAt = function(x, y) {};


/**
 * @param {number} x
 * @param {number} y
 * @return {boolean}
 */
PF.Grid.prototype.isInside = function(x, y) {};


/**
 * @param {number} x
 * @param {number} y 
 * @param {boolean} walkable
 */
PF.Grid.prototype.setWalkableAt = function(x, y, walkable) {};


/**
 * @param {PF.Node} node
 * @param {boolean} allowDiagonal
 * @param {boolean} dontCrossCorners
 * @return {Array.<PF.Node>}
 */
PF.Grid.prototype.getNeighbors = function(node, allowDiagonal, dontCrossCorners) {};


/**
 * @return {PF.Grid}
 */
PF.Grid.prototype.clone = function() {};