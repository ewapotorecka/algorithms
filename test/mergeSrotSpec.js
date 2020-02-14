const { mergeSort, merge, switchArraySection } = require( '../src/mergeSort' );
const { expect } = require( 'chai' );

describe( 'Merge sort', () => {
	it( 'should return ascending sorted array for given array #1', () => {
		expect( mergeSort( [ 1, 2, 3 ], 0, 2 ) ).to.deep.equal( [ 1, 2, 3 ] );
	} );
	it( 'should return ascending sorted array for given array #2', () => {
		expect( mergeSort( [], 0, 0 ) ).to.deep.equal( [] );
	} );
	it( 'should return ascending sorted array for given array #3', () => {
		expect( mergeSort( [ 1 ], 0, 1 ) ).to.deep.equal( [ 1 ] );
	} );
	it( 'should return ascending sorted array for given array #4', () => {
		expect( mergeSort( [ 9, 1, 3, 5 ], 0, 3 ) ).to.deep.equal( [ 1, 3, 5, 9 ] );
	} );
	it( 'should return ascending sorted array for given array #5', () => {
		expect( mergeSort( [ 1, 1, 1, 1 ], 0, 3 ) ).to.deep.equal( [ 1, 1, 1, 1 ] );
	} );
	it( 'should return ascending sorted array for given array #6', () => {
		expect( mergeSort( [ 1, 9, 5, 12, 18, 1 ], 0, 5 ) ).to.deep.equal( [ 1, 1, 5, 9, 12, 18 ] );
	} );
} );
