var deepestLeavesSum = function(root) {
    
    function findDepth(node) {
        if(!node) return 0;
        return Math.max(findDepth(node.left), findDepth(node.right))+1;
    }
    
    const depth = findDepth(root);
    
    function callDFS(node, height) {
        if(!node) return 0;
        if(height === 1) return node.val;
        return callDFS(node.left, height-1) + callDFS(node.right, height-1);
    }
    return callDFS(root, depth);
};