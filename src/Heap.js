module.exports = class Heap {
	constructor( array ) {
		this.heap = [];
		if ( array.length !== 0 ) {
			this.heap.push( array[ 0 ] );
			for ( let i = 1; i < array.length; i++ ) {
				this.addElementToTheHeap( array[ i ] );
			}
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
		const element = this.heap.pop();
		const deletedElement = this.heap[ 0 ];
		let elementIndex = 0;
		let leftChildIndex = elementIndex * 2 + 1;
		let rightChildIndex = elementIndex * 2 + 2;
		let childIndex;

		if ( this.heap.length == 0 ) {
			this.heap = [];

			return element;
		}

		this.heap[ elementIndex ] = element;

		while ( elementIndex < this.heap.length - 1 ) {
			if ( this.heap[ leftChildIndex ] <= this.heap[ rightChildIndex ] ) {
				childIndex = leftChildIndex;
			} else {
				childIndex = rightChildIndex;
			}

			if ( this.heap[ elementIndex ] > this.heap[ childIndex ] ) {
				this.heap[ elementIndex ] = this.heap[ childIndex ];
				this.heap[ childIndex ] = element;
				elementIndex = childIndex;
				leftChildIndex = elementIndex * 2 + 1;
				rightChildIndex = elementIndex * 2 + 2;
			} else {
				break;
			}

			if ( leftChildIndex >= this.heap.length ) {
				break;
			}
		}

		return deletedElement;
	}
};
