/**
 * Problem statement:
 *    Given a binary tree, imagine yourself standing on the right side of it, 
 *    return the values of the nodes you can see ordered from top to bottom.
 * 
 *  eg:
 *    Input: [1,2,3,null,5,null,4]
      Output: [1, 3, 4]
 * 
            
        1            <---
      /   \
      2     3         <---
      \     \
        5     4       <---
 * 
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

var rightSideView = function(root) {
    if(!root) return [];
    let numbers=[],max_level=0;
    function helper(root,level) {
        if(!root) return;
        if(max_level< level) {
          numbers.push(root.val);
          max_level=level;
        }
        helper(root.right,level+1);
        helper(root.left,level+1);
    }
    helper(root,1);
    return numbers;
    
};