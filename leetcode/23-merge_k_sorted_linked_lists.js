/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  if (lists.length === 0) {
    return null;
  }

  while (lists.length > 1) {
    let l1 = lists.shift();
    let l2 = lists.shift();

    let merged_list = mergeTwoLists(l1, l2);
    lists.push(merged_list)
  }

  return lists[0]

};

var mergeTwoLists = function (l1, l2) {
  let head = new ListNode()
  let tail = head

  while (l1 || l2) {
    if (l1 && l2) {
      if (l1.val < l2.val) {
        tail.next = l1
        l1 = l1.next
        tail = tail.next
      } else {
        tail.next = l2
        l2 = l2.next
        tail = tail.next
      }
    } else if (l1) {
      tail.next = l1
      l1 = l1.next
      tail = tail.next
    } else if (l2) {
      tail.next = l2
      l2 = l2.next
      tail = tail.next
    }
  }

  return head.next
}