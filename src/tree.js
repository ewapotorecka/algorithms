/* Function that creates a tree, form given data.
data = [
	[ parentIndex, value ]
]
*/

module.exports = function createTree( data ) {
	if ( data.length == 1 ) {
		return {
			value: data[ 0 ][ 1 ],
			children: []
		};
	}

	const nodes = data.map( nodeData => ( { value: nodeData[ 1 ], children: [] } ) );

	for ( let i = 1; i < data.length; i++ ) {
		const parentIndex = data[ i ][ 0 ];
		const parent = nodes[ parentIndex ];
		const child = nodes[ i ];

		parent.children.push( child );
	}

	return nodes[ 0 ];
};
