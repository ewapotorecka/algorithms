module.exports = function quickSort( array ) {
	if ( array.length <= 1 ) {
		return array;
	}
	const left = [];
	const right = [];
	const pivot = array[ array.length - 1 ];

	for ( const element of array ) {
		if ( element <= pivot ) {
			left.push( element );
		} else {
			right.push( element );
		}
	}

	const result = [ ...left, ...right ];

	return result;
};

