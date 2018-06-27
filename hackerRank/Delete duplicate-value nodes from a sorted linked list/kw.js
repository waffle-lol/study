//https://www.hackerrank.com/challenges/delete-duplicate-value-nodes-from-a-sorted-linked-list

/*
    Remove all duplicate elements from a sorted Linked List
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function removeDuplicates(head) {
    if ( head == null ) return head;
    let current = head;
    const getNext = current => {
        const next = current.next;
        if ( !next ) return current;
        if ( current.data === next.data ) return getNext( next )
        return next;
    }
    while ( current ) {
        const next = getNext( current );
        if ( current.data !== next.data ) current.next = next;
        else current.next = null;
        current = current.next;
    }
    return head;
    
}
