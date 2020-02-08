const Heap = require( '../src/Heap' );
const { expect } = require( 'chai' );

describe( 'Heap', () => {
	it( 'should create empty array, for given empty array', () => {
		const newHeap = new Heap( [] );
		expect( newHeap.heap ).to.deep.equal( [] );
	} );
	it( 'should create an array with one element, for given array with one element', () => {
		const newHeap = new Heap( [ 1 ] );
		expect( newHeap.heap ).to.deep.equal( [ 1 ] );
	} );
	it( 'should return the min value of given array', () => {
		const newHeap = new Heap( [ 3, 1, 5, 45, 0, 672 ] );
		const newHeap2 = new Heap( [ 5, 1, 2, 4, 3, 3, 0 ] );
		const newHeap3 = new Heap( [ 0, 2, 4 ] );
		const newHeap4 = new Heap( [ 9 ] );
		const newHeap5 = new Heap( [] );
		expect( newHeap.min ).to.equal( 0 );
		expect( newHeap2.min ).to.equal( 0 );
		expect( newHeap3.min ).to.equal( 0 );
		expect( newHeap4.min ).to.equal( 9 );
		expect( newHeap5.min ).to.equal( undefined );
	} );
	it( 'should remove the first element of the heap', () => {
		const newHeap = new Heap( [ 4, 2, 1, 5, 7 ] );

		newHeap.deleteFirstElementFromTheHeap();

		expect( newHeap.min ).to.equal( 2 );
		expect( newHeap.heap.length ).to.equal( 4 );

		newHeap.deleteFirstElementFromTheHeap();

		expect( newHeap.min ).to.equal( 4 );
		expect( newHeap.heap.length ).to.equal( 3 );
	} );
	it( 'should return the removed element of the heap', () => {
		const newHeap = new Heap( [ 7, 2, 0, 3, 5 ] );
		const newHeap2 = new Heap( [ 1 ] );
		const element = newHeap.deleteFirstElementFromTheHeap();
		const element2 = newHeap2.deleteFirstElementFromTheHeap();
		expect( element ).to.equal( 0 );
		expect( element2 ).to.equal( 1 );
	} );
	it( 'should be possible to add element to the heap', () => {
		const newHeap = new Heap( [ 4, 5, 2, 1 ] );
		newHeap.addElementToTheHeap( 9 );
		expect( newHeap.min ).to.equal( 1 );
		expect( newHeap.heap.length ).to.equal( 5 );
		newHeap.addElementToTheHeap( 0 );
		expect( newHeap.min ).to.equal( 0 );
		expect( newHeap.heap.length ).to.equal( 6 );
	} );
} );
