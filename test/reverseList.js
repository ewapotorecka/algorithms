const reverseList = require( '../src/reverseList' );
const { createDoublyLinkedList } = require( '../src/createDoublyLinkedList' );
const { expect } = require( 'chai' );

describe( 'Reverse doubly linked list', () => {
	it( 'Should reverse the given doubly linked list', () => {
		const doublyLinkedList = createDoublyLinkedList( [ 0, 4, 5, 2, 1, 3, 4, 5, 6 ] );
		const reversedListHead = reverseList( doublyLinkedList );
		const reversedListElements = [];
		let currentElement = reversedListHead;

		while ( currentElement.next ) {
			reversedListElements.push( currentElement.data );
			currentElement = currentElement.next;
		}
		reversedListElements.push( currentElement.data );

		expect( reversedListElements ).to.deep.equal( [ 6, 5, 4, 3, 1, 2, 5, 4, 0 ] );
	} );

	it( 'should return the head node of reversed list.', () => {
		const doublyLinkedList = createDoublyLinkedList( [ 0, 4, 5, 2, 1, 3, 4, 5, 6 ] );
		const reversedListHead = reverseList( doublyLinkedList );
		expect( reversedListHead.data ).to.equal( 6 );
		expect( reversedListHead.prev ).to.equal( null );
	} );

	it( 'Should return the node, if list contains one element.', () => {
		const doublyLinkedList = createDoublyLinkedList( [ 0 ] );
		const reversedListHead = reverseList( doublyLinkedList );
		expect( reversedListHead.data ).to.equal( 0 );
		expect( reversedListHead.prev ).to.equal( null );
		expect( reversedListHead.next ).to.equal( null );
	} );
} );
