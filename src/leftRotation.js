function rotLeft( a, d ) {
	const rotatedArray = [ ...a ];
	const elements = [];

	for ( let i = 0; i < d; i++ ) {
		elements.push( rotatedArray.shift() );
	}
	for ( element of elements ) {
		rotatedArray.push( element );
	}

	return rotatedArray;
}

module.exports = function rotLeft2( a, d ) {
	const rotatedArray = [];
	for ( let n = d; n < a.length; n++ ) {
		rotatedArray.push( a[ n ] );
	}
	for ( let n = 0; n < d; n++ ) {
		rotatedArray.push( a[ n ] );
	}
	return rotatedArray;
};

