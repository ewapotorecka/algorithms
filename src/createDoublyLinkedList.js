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

exports.createDoublyLinkedList = createDoublyLinkedList;
