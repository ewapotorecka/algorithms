const { superDigit, sumDigits } = require( '../src/digitSum' );
const { expect } = require( 'chai' );

describe( 'Super digit', () => {
	it( 'Should return super digit, for given data #1', () => {
		expect( superDigit( '123', 3 ) ).to.equal( 9 );
	} );

	it( 'Should return super digit, for given data #2', () => {
		expect( superDigit( '53', 120 ) ).to.equal( 6 );
	} );

	it( 'Should return super digit, for given data #3', () => {
		expect( superDigit( '123', 0 ) ).to.equal( 0 );
	} );

	it( 'Should return super digit, for given data #4', () => {
		expect( superDigit( '1', 1 ) ).to.equal( 1 );
	} );
} );
