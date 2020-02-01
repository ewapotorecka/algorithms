const { createDoublyLinkedList } = require( './createDoublyLinkedList' );

function reverse( head ) {
	if ( head.next == null ) {
		return head;
	}
	let prevNode = head;
	let currentNode = head.next;

	head.next = null;
	head.prev = currentNode;

	while ( currentNode.next !== null ) {
		prevNode = currentNode;
		currentNode = currentNode.next;
		prevNode.next = prevNode.prev;
		prevNode.prev = currentNode;
	}

	currentNode.next = prevNode;
	currentNode.prev = null;

	return currentNode;
}

const head = createDoublyLinkedList( [ 0 ] );
const reversed = reverse( head );
console.log( reversed.next );

