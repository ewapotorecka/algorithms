/* Super digit (from hackerrank.com )
We define super digit of an integer x using the following rules:
- Given an integer, we need to find the super digit of the integer.
- If x has only 1 digit, then its super digit is x.
- Otherwise, the super digit of x is equal to the super digit of the sum of the digits of x.

You are given numbers n and k. Number p is created by concatenating the string n k times. */

function superDigit( n, k ) {
	let stringNumber = n;

	while ( stringNumber.length > 1 ) {
		stringNumber = sumDigits( stringNumber );
	}

	let superDigit = Number.parseInt( stringNumber ) * k;

	stringNumber = superDigit.toString();

	while ( stringNumber.length > 1 ) {
		stringNumber = sumDigits( stringNumber );
	}

	superDigit = Number.parseInt( stringNumber );

	return superDigit;
}

function sumDigits( stringNumber ) {
	let digitsSum = 0;

	for ( let i = 0; i < stringNumber.length; i++ ) {
		digitsSum = digitsSum + Number.parseInt( stringNumber[ i ] );
	}

	return digitsSum.toString();
}

module.exports = { superDigit, sumDigits };
