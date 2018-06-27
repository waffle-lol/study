//https://www.hackerrank.com/challenges/reverse-a-linked-list

/*
    Reverse a linked list and return the head
    The input list will have at least one element
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reverseLinkedList(head) {
    if ( head === null ) return null;
    let previous = null;
    let current = head;
    while ( current ) {
        const next = current.next;
        current.next = previous;
        previous = current;
        current = next;
    }
    return previous;
}
