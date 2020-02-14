const leftRotation = require( '../src/leftRotation' );
const { expect } = require( 'chai' );

describe( 'Left rotation', () => {
	it( 'Should return the updated array after d left rotations. #1', () => {
		expect( leftRotation( [ 1, 2, 3, 4, 5 ], 3 ) ).to.deep.equal( [ 4, 5, 1, 2, 3 ] );
	} );

	it( 'Should return the updated array after d left rotations.#2', () => {
		expect( leftRotation( [ 1, 1, 1, 1 ], 3 ) ).to.deep.equal( [ 1, 1, 1, 1 ] );
	} );

	it( 'Should return the updated array after d left rotations. #3', () => {
		expect( leftRotation( [ 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 1, 2, 1, 1, 1, 1, 1, 1, 1 ], 15 ) )
			.to.deep.equal( [ 1, 1, 1, 1, 1, 1, 1, 1, 2, 3, 4, 5, 6, 1, 2, 3, 4, 5, 6, 7, 1, 2 ] );
	} );
} );
