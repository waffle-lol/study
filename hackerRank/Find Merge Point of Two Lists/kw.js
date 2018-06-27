//https://www.hackerrank.com/challenges/find-the-merge-point-of-two-joined-linked-lists

/*
    Find merge point of two linked lists
    Note that the head may be 'null' for the empty list.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function findMergeNode( headA, headB ) {

    let currentA = headA;
    let currentB = headB;
    const tester = {};

    while( currentA.next || currentB.next ) {
        if ( tester[ currentA.data ] ) return currentA.data;
        if ( tester[ currentB.data ] ) return currentB.data;
        if ( currentA.data === currentB.data ) return currentA.data;
        if ( !currentA.next ) return currentA.data;
        if ( !currentB.next ) return currentB.data;
        tester[ currentA.data ] = true;
        tester[ currentB.data ] = true;
        currentA = currentA.next;
        currentB = currentB.next;
    }
}
