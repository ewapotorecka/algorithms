/* Breadth first search algorithm */

module.exports = function breadthFirstSearch( root, searchedElement ) {
	const nodesQueue = [];

	if ( !root.value ) {
		return false;
	}

	nodesQueue.push( root );

	while ( nodesQueue[ 0 ] ) {
		const currentNode = nodesQueue.shift();

		if ( currentNode.value == searchedElement ) {
			return true;
		}

		for ( const child of currentNode.children ) {
			nodesQueue.push( child );
		}
	}

	return false;
};

