//https://www.hackerrank.com/challenges/delete-a-node-from-a-linked-list

/*
    Delete Node at a given position in a linked list
    head pointer input could be NULL as well for empty list
    Node is defined as
    var Node = function(data) {
        this.data = data;
        this.next = null;
    }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function deleteNode(head, position) {
    if ( head === null ) return null;
    if ( position === 0 ) {
        const current = head.next;
        head.next = null;
        return current;
    }
    let previous = head;
    let current = head.next;
    let pos = 1;
    while ( pos < position ) {
        pos++;
        previous = current;
        current = current.next;
    }
    previous.next = current.next;
    return head;
    
}
