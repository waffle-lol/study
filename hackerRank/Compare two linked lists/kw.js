//https://www.hackerrank.com/challenges/compare-two-linked-lists

/*
    Compare two Linked Lists A and B
    Return 1 if they are identical and 0 if they are not.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function compareLinkedLists( headA, headB) {
    if ( headA === null && headB === null ) return 1;
    let currentA = headA;
    let currentB = headB;
    while ( currentA || currentB ) {
        if ( !currentA || !currentB ) return 0;
        if ( currentA.data !== currentB.data ) return 0;
        currentA = currentA.next;
        currentB = currentB.next;
    }
    return 1;
}
