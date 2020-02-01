function reverse( head ) {
	let node = head;

	while ( node.next !== null ) {
		node = node.next;
	}

	const headNode = {};
	headNode.next = node.prev;
	headNode.prev = null;
	headNode.data = node.data;

	let currentNode;
	let nextNode;
	let prevNode;

	currentNode = headNode.next;
	prevNode = headNode;
	nextNode = currentNode.prev;

	while ( nextNode !== null ) {
	   nextNode = nextNode.prev;
	   prevNode = prevNode.next;
	   currentNode = prevNode.next;
	}

	return headNode;
}

function createDoublyLinkedList( array ) {
	const head = {
		data: array[ 0 ],
		prev: null,
	};

	let currentNode;
	let nextNode;

	currentNode = head;

	for ( let n = 1; n < array.length; n++ ) {
		nextNode = {
			data: array[ n ],
			prev: currentNode,
		};
		currentNode.next = nextNode;
		currentNode = nextNode;
	}
	currentNode.next = null;

	return head;
}

const head = createDoublyLinkedList( [ 0, 2, 4, 6 ] );

console.log( reverse( head ) );
