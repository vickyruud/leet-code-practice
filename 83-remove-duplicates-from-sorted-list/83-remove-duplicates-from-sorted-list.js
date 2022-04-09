/**
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
const deleteDuplicates = function (head) {
  if (!head) return head;
  let cur = head;

  while (cur != null && cur.next != null) {
    if (cur.next.val === cur.val) {
      cur.next = cur.next.next;
    } else {
      cur = cur.next;
    }
      
  }
  
  return head;

    
};
