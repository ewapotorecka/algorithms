/* Reverse doubly linked list ( from hackerrank.com )
You’re given the pointer to the head node of a doubly linked list.
Reverse the order of the nodes in the list.
The head node might be NULL to indicate that the list is empty.
Change the next and prev pointers of all the nodes so that the direction of the list is reversed.
Return a reference to the head node of the reversed list. */

module.exports = function reverse( head ) {
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
};
