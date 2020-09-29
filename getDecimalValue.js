/**
 * Problem Name:
 *      Convert Binary Number in a Linked List to Integer
 * Input: head = [1,0,1]
   Output: 5
   Explanation: (101) in base 2 = (5) in base 10

 * link:
      https://leetcode.com/problems/convert-binary-number-in-a-linked-list-to-integer/
 * 
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */
var getDecimalValue = function(head) {
  let finalStr="";
  
    while(head){
      finalStr+=String(head.val)
      head = head.next
    }
    return parseInt(finalStr, 2)
}
getDecimalValue([1,0,1])