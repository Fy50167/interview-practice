/* Implement an algorithm to delete a node in the middle (i.e., any node but
    the first and last node, not necessarily the exact middle) of a singly linked list, given only access to
    that node. */

    var deleteMiddle = function(head) {
        let current = head;
        let length = 0;
        while (current) {
            length++;
            current = current.next;
        }
        if (length === 1) {
            head = null;
            return head
        }
        current = head;
        const midNode = Math.floor(length / 2);
        for (let i = 0; i < midNode - 1; i++) {
            current = current.next;
        }
        current.next = current.next.next;
        return head
    };