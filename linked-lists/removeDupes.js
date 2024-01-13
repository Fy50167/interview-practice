/**
 * Write code to remove duplicates from an unsorted linked list. 
 */

const removeDupes = function(list) {
    const hashTable = new Set();
    let node = list.head;
    while (node.next !== null) {
        if (hashTable.has(node.next.value)) {
            node.next = node.next.next;
        }
        node = node.next;
    }
    return list
}