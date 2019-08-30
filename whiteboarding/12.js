//returns true or false depending on if the tree is bst
function is_bst(node) {
  if (node === null) return true //found a leaf

  if (node.right && node.right.val < node.val) return false
  if (node.left && node.left.val > node.val) return false

  return is_bst(node.left) && is_bst(node.right)
}

// find lowest common ancestor of two nodes 
function findCommonAncestor(root, node1, node2){

}

        A 
      /   \
    B     C
         /  \
        D    E