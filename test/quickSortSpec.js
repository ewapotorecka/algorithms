const quickSort = require( '../src/quickSort' );
const { expect } = require( 'chai' );

describe( 'quickSort', () => {
	it( 'should return ascending sorted array for given array #1', () => {
		expect( quickSort( [ 1, 2, 3 ] ) ).to.deep.equal( [ 1, 2, 3 ] );
	} );
	it( 'should return ascending sorted array for given array #2', () => {
		expect( quickSort( [] ) ).to.deep.equal( [] );
	} );
	it( 'should return ascending sorted array for given array #3', () => {
		expect( quickSort( [ 1 ] ) ).to.deep.equal( [ 1 ] );
	} );
	it( 'should return ascending sorted array for given array #4', () => {
		expect( quickSort( [ 9, 1, 3, 5 ] ) ).to.deep.equal( [ 1, 3, 5, 9 ] );
	} );
	it( 'should return ascending sorted array for given array #5', () => {
		expect( quickSort( [ 1, 1, 1, 1 ] ) ).to.deep.equal( [ 1, 1, 1, 1 ] );
	} );
	it( 'should return ascending sorted array for given array #6', () => {
		expect( quickSort( [ 1, 9, 5, 12, 18, 1 ] ) ).to.deep.equal( [ 1, 1, 5, 9, 12, 18 ] );
	} );
} );
