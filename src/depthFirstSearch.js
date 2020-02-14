/* Depth first search algorithm. */

module.exports = function depthFirstSearch( root, searchedElement ) {
	let isElementFound = false;

	if ( !root.value ) {
		return isElementFound;
	}

	if ( root.value == searchedElement ) {
		isElementFound = true;
	} else {
		for ( const child of root.children ) {
			isElementFound = depthFirstSearch( child, searchedElement );

			if ( isElementFound ) {
				break;
			}
		}
	}

	return isElementFound;
};

