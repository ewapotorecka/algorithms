const Heap = require( '../src/Heap' );

function cookies( k, A ) {
	const jessCookies = new Heap( A );
	let count = 0;

	while ( jessCookies.min < k ) {
		if ( jessCookies.heap.length == 1 && jessCookies.heap[ 0 ] < k ) {
			count = -1;
			break;
		}
		if ( jessCookies.heap.length == 0 ) {
			count = -1;
			break;
		}

		let newCookie;
		newCookie = jessCookies.deleteFirstElementFromTheHeap();
		newCookie = newCookie + 2 * jessCookies.deleteFirstElementFromTheHeap();

		if ( jessCookies.heap.length == 0 && newCookie < k ) {
			count = -1;
			break;
		}

		jessCookies.addElementToTheHeap( newCookie );
		count++;
		console.log( jessCookies.heap, k, count );
	}

	return count;
}
