/**
 *  Implement an algorithm to find the kth to last element of a singly linked list. 
 */

const kthElement = function(head, n) {
    let length = 0;
    let current = head;
    while (current) {
        current = current.next;
        length++;
    }
    const kthIndex = length - n;
    current = head;
    if (kthIndex === 0) {
        return current.next
    }
    for (let i = 0; i < kthIndex - 1; i++) {
        current = current.next;
    }

    current.next = current.next.next;
    
    return head
}