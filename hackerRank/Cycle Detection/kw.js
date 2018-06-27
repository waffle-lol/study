//https://www.hackerrank.com/challenges/detect-whether-a-linked-list-contains-a-cycle

/*
    Detect a cycle in a Linked List.
    Note that the head may be 'null' if the list is empty.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function hasCycle( head ) {
    if ( !head ) return 0;
    let current = head;
    const tester = {};
    while ( current.next ) {
        if ( tester[ current.data ] ) return 1;
        tester[ current.data ] = true;
        current = current.next;
    }
    return 0;
}
