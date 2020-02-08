module.exports = function bubbleSort( array ) {
	let switchCount = 0;
	do {
		switchCount = 0;
		for ( let i = 0; i < array.length; i++ ) {
			if ( array[ i ] > array[ i + 1 ] ) {
				const element = array[ i ];
				array[ i ] = array[ i + 1 ];
				array[ i + 1 ] = element;
				switchCount++;
			}
		}
	} while ( switchCount > 0 );
	return array;
};
