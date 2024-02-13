/* Write code to partition a linked list around a value x, such that all nodes less than x come
before all nodes greater than or equal to x. If x is contained within the list, the values of x only need
to be after the elements less than x (see below). The partition element x can appear anywhere in the
"right partition"; it does not need to appear between the left and right partitions.  */

var partition = function(head, x) {
    let list1 = new ListNode(null);
    let current1 = list1;
    let list2 = new ListNode(null);
    let current2  = list2;
    while (head) {
        if (head.val < x) {
            current1.next = head;
            current1 = current1.next;
        } else {
            current2.next = head;
            current2 = current2.next;
        }
        head = head.next;
    }
    current2.next = null;
    current1.next = list2.next;
    return list1.next
};