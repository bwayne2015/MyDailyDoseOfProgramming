/**
 * 
 * Problem:
 *     Middle of the Linked List
 * Descrition:
 * Input: [1,2,3,4,5]
   Output: Node 3 from this list (Serialization: [3,4,5])
   The returned node has value 3.  (The judge's serialization of this node is [3,4,5]).
   Note that we returned a ListNode object ans, such that:
   ans.val = 3, ans.next.val = 4, ans.next.next.val = 5, and ans.next.next.next = NULL.

   LINK:
    https://leetcode.com/problems/middle-of-the-linked-list/

 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
  let arr =[]
  let curr = head
  let linkedListPointer=0
  let counter=0
  while(curr){
    linkedListPointer +=1
    curr = curr.next
  }
  
  let middle = Math.floor((linkedListPointer)/2)
  
  while(head){
    if(middle === counter){
        break
    }else{
        head = head.next
    }
      counter +=1
  }
  return head
};
