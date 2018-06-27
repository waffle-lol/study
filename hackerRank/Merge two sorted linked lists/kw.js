//https://www.hackerrank.com/challenges/merge-two-sorted-linked-lists

/*
    Merge two sorted lists A and B as one Linked List and return the head of merged list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function mergeLinkedLists( headA, headB) {
    if ( headA === null ) return headB;
    if ( headB === null ) return headA;

    let currentA, currentB, newHead;

    if ( headA.data < headB.data ) {
        newHead = headA;
        currentA = headA.next;
        currentB = headB;
    } else {
        newHead = headB;
        currentA = headA;
        currentB = headB.next;
    }

    let current = newHead;

    while ( currentA && currentB ) {
        if ( currentA.data < currentB.data ) {
            current.next = currentA;
            current = currentA;
            currentA = currentA.next;
        } else {
            current.next = currentB;
            current = currentB;
            currentB = currentB.next;
        }
    }

    current.next = currentA? currentA : currentB;
    
    return newHead;
}
