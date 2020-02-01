const leftRot2 = require( '../src/leftRotation' );

function getTimeOfLeftRot( arr ) {
	let time = Date.now();
	leftRot2( arr, 5 );
	time = Date.now() - time;
	return time;
}

function createArray( length ) {
	const array = [];
	for ( let n = 0; n < length; n++ ) {
		array.push( n );
	}
	return array;
}

console.log( getTimeOfLeftRot( createArray( 10000000 ) ) );
