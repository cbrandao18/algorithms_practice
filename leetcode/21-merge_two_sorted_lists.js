/**
 * Definition for singly-linked list.
 * Merge two sorted linked lists and return it as a new list. 
 * The new list should be made by splicing together the nodes of the first two lists.
 * 
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  let head;
  let tail;

  if (!l1){
    return l2
  } else if (!l2){
    return l1
  }

  //setting the head
  if (l1.val < l2.val){
    head = l1
    l1 = l1.next
  } else if (l2.val < l1.val){
    head = l2
    l2 = l2.next
  }

  tail = head

  while (l1 || l2){
    if (!li){
      tail.next = l2
      l2 = l2.next
    } else if (!l2){
      tail.next = l1
      l1 = l1.next
    } else if (l1.val < l2.val){
      tail.next = l1
      l1 = l1.next
    } else {
      tail.next = l2
      l2 = l2.next
    }

    tail = tail.next
  }
  return head
}