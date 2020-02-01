function cookies( k, A ) {
	const jessCookies = new Heap( A );
	let count = 0;

	while ( jessCookies.heap[ 0 ] < k ) {
		if ( jessCookies.heap.length == 1 && jessCookies.heap[ 0 ] < k ) {
			count = -1;
			break;
		}
		if ( jessCookies.heap.length == 0 ) {
			count = -1;
			break;
		}

		let newCookie;

		if ( jessCookies.heap[ 1 ] > jessCookies.heap[ 2 ] ) {
			newCookie = jessCookies.heap[ 0 ] + jessCookies.heap[ 2 ] * 2;
		} else {
			newCookie = jessCookies.heap[ 0 ] + jessCookies.heap[ 1 ] * 2;
		}

		jessCookies.deleteFirstElementFromTheHeap();
		jessCookies.deleteFirstElementFromTheHeap();

		if ( jessCookies.heap.length == 0 && newCookie < k ) {
			count = -1;
			break;
		}

		jessCookies.addElementToTheHeap( newCookie );

		count++;
	}

	return count;
}

class Heap {
	constructor( array ) {
		this.heap = [];
		this.heap.push( array[ 0 ] );
		for ( let i = 1; i < array.length; i++ ) {
			this.addElementToTheHeap( array[ i ] );
		}
	}

	get min() {
		return this.heap[ 0 ];
	}

	addElementToTheHeap( element ) {
		this.heap.push( element );

		let elementIndex = this.heap.length - 1;
		let parentIndex = Math.floor( ( elementIndex - 1 ) / 2 );

		while ( this.heap[ parentIndex ] > this.heap[ elementIndex ] && elementIndex >= 0 ) {
			this.heap[ elementIndex ] = this.heap[ parentIndex ];
			this.heap[ parentIndex ] = element;
			elementIndex = parentIndex;
			parentIndex = Math.floor( ( elementIndex - 1 ) / 2 );
		}
	}

	deleteFirstElementFromTheHeap() {
		if ( this.heap.length == 1 ) {
			this.heap = [];
			return;
		}

		let elementIndex = 0;
		let leftChildIndex = elementIndex * 2 + 1;
		let rightChildIndex = elementIndex * 2 + 2;
		const element = this.heap.pop();

		this.heap[ elementIndex ] = element;

		while ( elementIndex < this.heap.length - 1 ) {
			if ( this.heap[ elementIndex ] > this.heap[ leftChildIndex ] ) {
				this.heap[ elementIndex ] = this.heap[ leftChildIndex ];
				this.heap[ leftChildIndex ] = element;
				elementIndex = leftChildIndex;
				leftChildIndex = elementIndex * 2 + 1;
				rightChildIndex = elementIndex * 2 + 2;
			} else if ( this.heap[ elementIndex ] > this.heap[ rightChildIndex ] ) {
				this.heap[ elementIndex ] = this.heap[ rightChildIndex ];
				this.heap[ rightChildIndex ] = element;
				elementIndex = rightChildIndex;
				leftChildIndex = elementIndex * 2 + 1;
				rightChildIndex = elementIndex * 2 + 2;
			} else {
				break;
			}
			if ( leftChildIndex >= this.heap.length ) {
				break;
			}
		}
	}
}

// console.log(cookies( 90, [ 13, 47, 74, 12, 89, 74, 18, 38 ] ));

const heap = new Heap( [ 13, 47, 74, 12, 89, 74, 18, 38 ] );
console.log( heap );

heap.deleteFirstElementFromTheHeap();

console.log( heap );
heap.deleteFirstElementFromTheHeap();
console.log( heap );
