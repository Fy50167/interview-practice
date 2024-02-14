/* Given two (singly) linked lists, determine if the two lists intersect. Return the intersecting node. Note that the intersection is defined based on reference, not value. That is, if the kth
node of the first linked list is the exact same node (by reference) as the jth node of the second
linked list, then they are intersecting.  */


var getIntersectionNode = function(headA, headB) {
    let length1 = getListLength(headA);
    let length2 = getListLength(headB);
    if (length1 > length2) {
        headA = moveForward(headA, length1 - length2)
    } else if (length2 > length1) {
        headB = moveForward(headB, length2 - length1)
    }
    while (headA && headB) {
        if (headA === headB) {
            return headA
        }
        headA = headA.next;
        headB = headB.next;
    }

    return null
    
};