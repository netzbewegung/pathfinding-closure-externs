/**
 * @fileoverview Externs for the pathfinding
 * @externs
 */

/**
 * @constructor
 */
PF.Heuristic = function() {};

  /**
   * @param {number} dx
   * @param {number} dy 
   * @return {number}
   */
PF.Heuristic.manhattan = function(dx, dy) {};

  /**
   * @param {number} dx
   * @param {number} dy
   * @return {number}
   */
PF.Heuristic.euclidean = function(dx, dy) {};

  /**
   * @param {number} dx
   * @param {number} dy
   * @return {number}
   */
PF.Heuristic.chebyshev = function(dx, dy) {};