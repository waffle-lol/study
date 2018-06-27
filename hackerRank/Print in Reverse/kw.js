//https://www.hackerrank.com/challenges/print-the-elements-of-a-linked-list-in-reverse

/*
    Print elements of a linked list in reverse order as standard output
    head pointer could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reversePrint(head) {
    if ( head === null ) return;
    let current = head;
    const data = [ current.data ];
    while ( current.next ) {
        current = current.next;
        data.push( current.data );
    }
    for ( let i = 0, length = data.length; i < length; i++ ) {
        console.log( data[ length - i - 1 ] );
    }
}
