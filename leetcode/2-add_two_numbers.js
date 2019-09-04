/**
 * You are given two non-empty linked lists
 * representing two non-negative integers. 
 * The digits are stored in reverse order and each of their nodes 
 * contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Definition for singly-linked list.
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

var addTwoNumbers = function (l1, l2) {
    var rootNode, currentNode

    var carry = 0

    while (l1 || l2) {
        var nextNode = new ListNode(0)

        if (rootNode) {
            currentNode.next = nextNode
        }
        else {
            rootNode = nextNode
        }

        currentNode = nextNode


        if (l1) {
            currentNode.val += l1.val
            l1 = l1.next
        }
        if (l2) {
            currentNode.val += l2.val
            l2 = l2.next
        }

        currentNode.val += carry

        if (currentNode.val >= 10) {
            currentNode.val -= 10
            carry = 1
            if (!l1) {
                l1 = new ListNode(0)
            }
        }
        else {
            carry = 0
        }
    }

    return rootNode
};