/* Array left rotation (from hackerrank.com )
A left rotation operation on an array shifts each of the array's elements 1 unit to the left.
For example, if 2 left rotations are performed on array [ 1, 2, 3, 4, 5 ],
then the array would become [ 3, 4, 5, 1, 2 ].

Given an array a of n integers and a number, d, perform d left rotations on the array.
Return the updated array to be printed as a single line of space-separated integers.
1 <= d <= n */

module.exports = function rotLeft( a, d ) {
	const rotatedArray = [];
	for ( let n = d; n < a.length; n++ ) {
		rotatedArray.push( a[ n ] );
	}
	for ( let n = 0; n < d; n++ ) {
		rotatedArray.push( a[ n ] );
	}
	return rotatedArray;
};

