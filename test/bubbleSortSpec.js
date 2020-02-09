const bubbleSort = require( '../src/bubbleSort' );
const { expect } = require( 'chai' );

describe( 'bubbleSort', () => {
	it( 'should return ascending sorted array for given array', () => {
		expect( bubbleSort( [ 1, 2, 3 ] ) ).to.deep.equal( [ 1, 2, 3 ] );
		expect( bubbleSort( [] ) ).to.deep.equal( [] );
		expect( bubbleSort( [ 1 ] ) ).to.deep.equal( [ 1 ] );
		expect( bubbleSort( [ 9, 1, 3, 5 ] ) ).to.deep.equal( [ 1, 3, 5, 9 ] );
		expect( bubbleSort( [ 1, 1, 1, 1 ] ) ).to.deep.equal( [ 1, 1, 1, 1 ] );
	} );
} );
