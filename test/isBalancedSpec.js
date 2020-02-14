const { isBalanced, isAPair } = require( '../src/isBalanced' );
const { expect } = require( 'chai' );

describe( 'Balanced brackets', () => {
	it( 'Should return YES for given string of balanced brackets #1', () => {
		expect( isBalanced( '{{()}}' ) ).to.equal( 'YES' );
	} );

	it( 'Should return YES for given string of balanced brackets #2', () => {
		expect( isBalanced( '([])' ) ).to.equal( 'YES' );
	} );

	it( 'Should return NO for given string of unbalanced brackets #1', () => {
		expect( isBalanced( '{{(])}}' ) ).to.equal( 'NO' );
	} );

	it( 'Should return NO for given string of unbalanced brackets #1', () => {
		expect( isBalanced( '}' ) ).to.equal( 'NO' );
	} );
} );
