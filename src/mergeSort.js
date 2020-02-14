/* Merge sort algorithm */

function mergeSort( array, left, right ) {
	if ( array.length <= 1 ) {
		return array;
	}

	if ( left == right ) {
		return;
	}

	const middle = left + Math.floor( ( right - left ) / 2 );

	mergeSort( array, left, middle );
	mergeSort( array, middle + 1, right );

	const leftArray = array.slice( left, middle + 1 );
	const rightArray = array.slice( middle + 1, right + 1 );
	const mergedArray = merge( leftArray, rightArray );

	switchArraySection( array, left, mergedArray );

	return array;
}

function merge( arr1, arr2 ) {
	const result = [];
	let index1 = 0;
	let index2 = 0;

	while ( index1 + index2 < arr1.length + arr2.length ) {
		if ( arr1[ index1 ] == undefined ) {
			result.push( arr2[ index2 ] );
			index2++;
		} else if ( arr2[ index2 ] == undefined ) {
			result.push( arr1[ index1 ] );
			index1++;
		} else if ( arr1[ index1 ] <= arr2[ index2 ] ) {
			result.push( arr1[ index1 ] );
			index1++;
		} else {
			result.push( arr2[ index2 ] );
			index2++;
		}
	}

	return result;
}

function switchArraySection( arr, startIndex, section ) {
	for ( let i = 0; i < section.length; i++ ) {
		arr[ startIndex + i ] = section[ i ];
	}

	return arr;
}

module.exports = { mergeSort, merge, switchArraySection };
