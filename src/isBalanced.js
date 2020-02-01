function isBalanced( s ) {
	const stack = [];

	for ( const element of s ) {
		if ( isAPair( stack[ stack.length - 1 ], element ) ) {
			stack.pop();
		} else {
			stack.push( element );
		}
	}

	if ( stack.length == 0 ) {
		return 'YES';
	}
	return 'NO';
}

function isAPair( element1, element2 ) {
	if ( element1 == '(' && element2 == ')' ) {
		return true;
	}

	if ( element1 == '[' && element2 == ']' ) {
		return true;
	}

	if ( element1 == '{' && element2 == '}' ) {
		return true;
	}

	return false;
}

console.log( isBalanced( '([([])])' ) );
