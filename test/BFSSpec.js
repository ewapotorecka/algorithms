const createTree = require( '../src/tree' );
const breadthFirstSearch = require( '../src/breadthFirstSearch' );
const { expect } = require( 'chai' );

describe( 'Breadth First Search', () => {
	it( 'Should return true, if searched element is in a one element array', () => {
		const tree = createTree( [ [ -1, 4 ] ] );
		expect( breadthFirstSearch( tree, 4 ) ).to.be.true;
	} );

	it( 'Should return false, if the searched element is not in a one element array', () => {
		const tree = createTree( [ [ -1, 3 ] ] );
		expect( breadthFirstSearch( tree, 4 ) ).to.be.false;
	} );

	it( 'Should return false, if the tree is empty.', () => {
		const tree = {};
		expect( breadthFirstSearch( tree, 1 ) ).to.be.false;
	} );

	it( 'Should return true if the searched element is in the array', () => {
		const tree = createTree( [ [ -1, 3 ], [ 0, 4 ], [ 0, 4 ], [ 2, 10 ], [ 2, 1 ], [ 4, 9 ] ] );
		expect( breadthFirstSearch( tree, 3 ) ).to.be.true;
		expect( breadthFirstSearch( tree, 9 ) ).to.be.true;
		expect( breadthFirstSearch( tree, 4 ) ).to.be.true;
	} );

	it( 'Should return false if the searched element is not in the array', () => {
		const tree = createTree( [ [ -1, 3 ], [ 0, 4 ], [ 0, 4 ], [ 2, 10 ], [ 2, 1 ], [ 4, 9 ] ] );
		expect( breadthFirstSearch( tree, 99 ) ).to.be.false;
	} );
} );
