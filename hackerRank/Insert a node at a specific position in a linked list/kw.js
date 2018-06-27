//https://www.hackerrank.com/challenges/insert-a-node-at-a-specific-position-in-a-linked-list

/*
  Insert Node at a given position in a linked list 
  head can be NULL 
  First element in the linked list is at position 0
  Node is defined as
  var Node = function(data) {
    this.data = data;
    this.next = null;
  }
*/

// This is a "method-only" submission.
// You only need to complete this method.

function insert(head, data, position) {
    const node = new Node( data );
    if ( position === 0 ) {
        node.next = head;
        return node
    }
    let pos = 1;
    let current = head;
    while ( pos < position ) { 
        current = current.next;
        pos++;
    }
    node.next = current.next;
    current.next = node;
    return head;
}
