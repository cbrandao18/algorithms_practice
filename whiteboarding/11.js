// linked list that can loop back around
// A -> B -> C -> A
// A -> B -> C -> B

//returns true if the linked list is cyclic
function cyclic(first_link){
  let seen = new Set();

  let node = first_link;
  while (node.next !== null){
    if (seen.has(node.val)) {
      return true;
    }
    seen.add(node.val);
    node = node.next
  }

  return false;
}

// can be different lengths
// find the point at which they converge

// A -> B -> C -> D
//           Z -> D
function converging_node(list1, list2){

}