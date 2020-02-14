const createTree = require( '../src/tree' );
const depthFirstSearch = require( '../src/depthFirstSearch' );
const { expect } = require( 'chai' );

describe( 'Breadth First Search', () => {
	it( 'Should return true, if searched element is in a one element array', () => {
		const tree = createTree( [ [ -1, 4 ] ] );
		expect( depthFirstSearch( tree, 4 ) ).to.be.true;
	} );

	it( 'Should return false, if the searched element is not in a one element array', () => {
		const tree = createTree( [ [ -1, 3 ] ] );
		expect( depthFirstSearch( tree, 4 ) ).to.be.false;
	} );

	it( 'Should return false, if the tree is empty.', () => {
		const tree = {};
		expect( depthFirstSearch( tree, 1 ) ).to.be.false;
	} );

	it( 'Should return true if the searched element is in the array', () => {
		const tree = createTree( [ [ -1, 3 ], [ 0, 4 ], [ 0, 4 ], [ 2, 10 ], [ 2, 1 ], [ 4, 9 ] ] );
		expect( depthFirstSearch( tree, 3 ) ).to.be.true;
		expect( depthFirstSearch( tree, 9 ) ).to.be.true;
		expect( depthFirstSearch( tree, 4 ) ).to.be.true;
	} );

	it( 'Should return false if the searched element is not in the array', () => {
		const tree = createTree( [ [ -1, 3 ], [ 0, 4 ], [ 0, 4 ], [ 2, 10 ], [ 2, 1 ], [ 4, 9 ] ] );
		expect( depthFirstSearch( tree, 99 ) ).to.be.false;
	} );
} );
