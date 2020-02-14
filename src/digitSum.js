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
