//https://www.hackerrank.com/challenges/reverse-a-doubly-linked-list

/*
    Reverse a doubly linked list, input list may also be empty
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function reverse( head ) {
    let current = head;
    let prev = null;
    while ( current ) {
        const _next = current.next;
        const _prev = current.prev;
        current.next = _prev;
        current.prev = _next;
        prev = current;
        current = current.prev;
    }
    return prev;
}

