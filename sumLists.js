/* You have two numbers represented by a linked list, where each node contains a single
digit. The digits are stored in reverse order, such that the 1 's digit is at the head of the list. Write a
function that adds the two numbers and returns the sum as a linked list.  */

var addTwoNumbers = function(l1, l2) {
    const num1 = [];
    const num2 = [];
    while (l1) {
        num1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        num2.push(l2.val);
        l2 = l2.next;
    }

    const output = ((BigInt(num1.reverse().join('')) + BigInt(num2.reverse().join(''))).toString().split('').reverse().join(''));
    const head = new ListNode(output[0]);
    let current = head;
    for (let i = 1; i < output.length; i++) {
        current.next = new ListNode(output[i]);
        current = current.next;
    }

    return head
};