const bubbleSort = require( '../src/bubbleSort' );
const { expect } = require( 'chai' );

describe( 'bubbleSort', () => {
	it( 'should return ascending sorted array for given array #1', () => {
		expect( bubbleSort( [ 1, 2, 3 ] ) ).to.deep.equal( [ 1, 2, 3 ] );
	} );
	it( 'should return ascending sorted array for given array #2', () => {
		expect( bubbleSort( [] ) ).to.deep.equal( [] );
	} );
	it( 'should return ascending sorted array for given array #3', () => {
		expect( bubbleSort( [ 1 ] ) ).to.deep.equal( [ 1 ] );
	} );
	it( 'should return ascending sorted array for given array #4', () => {
		expect( bubbleSort( [ 9, 1, 3, 5 ] ) ).to.deep.equal( [ 1, 3, 5, 9 ] );
	} );
	it( 'should return ascending sorted array for given array #5', () => {
		expect( bubbleSort( [ 1, 1, 1, 1 ] ) ).to.deep.equal( [ 1, 1, 1, 1 ] );
	} );
	it( 'should return ascending sorted array for given array #6', () => {
		expect( bubbleSort( [ 1, 9, 5, 12, 18, 1 ] ) ).to.deep.equal( [ 1, 1, 5, 9, 12, 18 ] );
	} );
} );
