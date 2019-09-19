/**
 * Given a binary tree, return the zigzag level order traversal of its nodes' 
 * values. (ie, from left to right, then right to left for the next level and 
 * alternate between).
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * return its zigzag level order traversal as:
 * [ [3], [20,9], [15,7] ]
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (!root) return []
  let order = []

  let node = root
  let posDir = false;

  let queue = [root]

  while (queue.length) {
    let len = queue.length
    let level = [];
    let nextQueue = [];

    for (node of queue) {
      if (posDir) {
        level.unshift(node.val)
      }
      else {
        level.push(node.val)
      }
      if (node.left) nextQueue.push(node.left)
      if (node.right) nextQueue.push(node.right)
    }
    order.push(level)

    queue = nextQueue
    posDir = !posDir

  }

  return order
};