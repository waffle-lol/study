//https://www.hackerrank.com/challenges/get-the-value-of-the-node-at-a-specific-position-from-the-tail

/*
    Get Nth element data from the end in a Linked List
    Number of elements in the list will always be greater than N.
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function getNodeValue( head, position) {
    let current = head;
    const container = [ head.data ];
    let counter = 0;
    while ( current.next ) {
        current = current.next;
        if ( container.length < position + 1 )
            container.push( current.data );
        else {
            container.shift();
            container.push( current.data );
        }
    }
    return container[ 0 ];
}
