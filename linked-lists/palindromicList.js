/* Implement a function to check if a linked list is a palindrome.  */

var isPalindrome = function(head) {
    let slow = head;
    let fast = head;
    while (fast && fast.next) {
        slow = slow.next;
        fast = fast.next.next;
    }

    let prev = null;
    let current = slow;
    while (current) {
        let next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    while (prev) {
        if (prev.val !== head.val) {
            return false
        }
        prev = prev.next;
        head = head.next;
    }
    return true
};