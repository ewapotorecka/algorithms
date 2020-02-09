const quickSort = require( '../src/quikcSort' );
const { expect } = require( 'chai' );

describe( 'quickSort', () => {
	it( 'should return ascending sorted array for given array', () => {
		expect( quickSort( [ 1, 2, 3 ] ) ).to.deep.equal( [ 1, 2, 3 ] );
		expect( quickSort( [] ) ).to.deep.equal( [] );
		expect( quickSort( [ 1 ] ) ).to.deep.equal( [ 1 ] );
		expect( quickSort( [ 9, 1, 3, 5 ] ) ).to.deep.equal( [ 1, 3, 5, 9 ] );
		expect( quickSort( [ 1, 1, 1, 1 ] ) ).to.deep.equal( [ 1, 1, 1, 1 ] );
	} );
} );
