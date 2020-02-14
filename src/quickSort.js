module.exports = function quickSort( array ) {
	if ( array.length <= 1 ) {
		return array;
	}
	const left = [];
	const right = [];
	const pivot = array[ array.length - 1 ];

	for ( let i = 0; i < array.length - 1; i++ ) {
		const element = array[ i ];

		if ( element <= pivot ) {
			left.push( element );
		} else {
			right.push( element );
		}
	}

	const result = [ ...quickSort( left ), pivot, ...quickSort( right ) ];

	return result;
};

