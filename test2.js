/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function(root, val) {
    function isNumberEqual(node, val){
        if(node.val === val) {
            return node
        }
        else{
            let res= isNumberEqual(node.left, val)
            if(!res){
                res = isNumberEqual(node.right, val)
            }
            return res
        }
    }
    let nodeTree = isNumberEqual(root, val)
    if(nodeTree) return nodeTree
    else return NULL
};