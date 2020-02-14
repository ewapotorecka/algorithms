/* Balanced brackets (from hackerrank.com )
A bracket is considered to be any one of the following characters: (, ), {, }, [, or ].

Two brackets are considered to be a matched pair if the an opening bracket
(i.e., (, [, or {) occurs to the left of a closing bracket (i.e., ), ], or })
of the exact same type. There are three types of matched pairs of brackets: [], {}, and ().

A matching pair of brackets is not balanced if the set of brackets it encloses are not matched.
For example, {[(])} is not balanced because the contents in between { and } are not balanced.
The pair of square brackets encloses a single, unbalanced opening bracket,
(, and the pair of parentheses encloses a single, unbalanced closing square bracket, ].

By this logic, we say a sequence of brackets is balanced if the following conditions are met:

It contains no unmatched brackets.
The subset of brackets enclosed within the confines of a matched pair of brackets is also a matched pair of brackets.
Given n strings of brackets, determine whether each sequence of brackets is balanced.
If a string is balanced, return YES. Otherwise, return NO. */

function isBalanced( s ) {
	const bracketsStack = [];

	for ( const element of s ) {
		if ( isAPair( bracketsStack[ bracketsStack.length - 1 ], element ) ) {
			bracketsStack.pop();
		} else {
			bracketsStack.push( element );
		}
	}

	if ( bracketsStack.length == 0 ) {
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

module.exports = { isBalanced, isAPair };
