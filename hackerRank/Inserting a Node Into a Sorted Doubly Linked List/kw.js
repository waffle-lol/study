//https://www.hackerrank.com/challenges/insert-a-node-into-a-sorted-doubly-linked-list

/*
    Insert Node in a doubly sorted linked list
    After each insertion, the list should be sorted
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
        this.prev = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function sortedInsert( head, data ) {

    const node = new Node( data );
    if ( !head ) return node;
    let current = head;
    while ( current.next && current.data < data ) {
        current = current.next;
    }

    if ( current.data < data ) {
        current.next = node;
        node.prev = current;
    } else {
        const prev = current.prev;
        node.prev = prev;
        node.next = current;

        if ( prev ) prev.next = node;
        current.prev = node;
    }

    let newHead = head;
    while ( newHead.prev ) newHead = head.prev;
    return newHead;

}
