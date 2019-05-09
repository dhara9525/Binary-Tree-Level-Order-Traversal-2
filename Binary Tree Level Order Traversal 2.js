// Simple javascript JS solution, faster than 100.00%  of JavaScript online submissions for Binary Tree Level Order Traversal II.

/**
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
var levelOrderBottom = function(root) 
{
    var queue=[], resArr=[];
    
    if(!root)
        return [];
    
    queue.push(root);
    while(queue.length>0)
    {
        var arr=[], length=queue.length;
        for(var i=0; i<length; i++)
        {
            var tempNode=new TreeNode();
            tempNode= queue.shift();
            if(tempNode.left!=null)
                queue.push(tempNode.left);
            if(tempNode.right!=null)
                queue.push(tempNode.right);
            arr.push(tempNode.val);
        }
        resArr.unshift(arr);
    }
    return resArr;    
};