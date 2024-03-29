/**
* @license Apache-2.0
*
* Copyright (c) 2022 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

// MODULES //

var isNonNegativeInteger = require( '@stdlib/assert-is-nonnegative-integer' ).isPrimitive;
var ctors = require( '@stdlib/array-ctors' );
var afill = require( '@stdlib/array-base-filled' );
var gfill = require( '@stdlib/blas-ext-base-gfill' );
var defaults = require( '@stdlib/array-defaults' );
var format = require( '@stdlib/string-format' );


// VARIABLES //

var DEFAULT_DTYPE = defaults.get( 'dtypes.default' );


// MAIN //

/**
* Creates a filled array having a specified length.
*
* @param {NonNegativeInteger} length - array length
* @param {*} value - fill value
* @param {string} [dtype="float64"] - data type
* @throws {TypeError} first argument must be a nonnegative integer
* @throws {TypeError} third argument must be a recognized data type
* @returns {(TypedArray|Array|ComplexArray)} array or typed array
*
* @example
* var arr = full( 2, 1.0 );
* // returns <Float64Array>[ 1.0, 1.0 ]
*
* @example
* var arr = full( 2, 1.0, 'float32' );
* // returns <Float32Array>[ 1.0, 1.0 ]
*/
function full( length, value ) {
	var dtype;
	var ctor;
	var out;
	if ( !isNonNegativeInteger( length ) ) {
		throw new TypeError( format( 'invalid argument. First argument must be a nonnegative integer. Value: `%s`.', length ) );
	}
	if ( arguments.length > 2 ) {
		dtype = arguments[ 2 ];
	} else {
		dtype = DEFAULT_DTYPE;
	}
	if ( dtype === 'generic' ) {
		return afill( value, length );
	}
	ctor = ctors( dtype );
	if ( ctor === null ) {
		throw new TypeError( format( 'invalid argument. Third argument must be a recognized data type. Value: `%s`.', dtype ) );
	}
	out = new ctor( length );

	// TODO: revisit the following, as using `gfill` is not the most performant, especially for large arrays. We have two options: (1) use a native add-on which delegates to an appropriate C function which performs the loop or (2) use @stdlib/blas/ext/base/(d|s|c|z)fill functions which use native add-ons. The latter option is not great, as we only get perf boosts for large arrays for a select number of dtypes. The former option is more work, as we may need to write a bespoke add-on for handling the argument signature and the various types that `value` can assume (e.g., number, complex, etc). If we had a generic strided `copy` package with an add-on, we could wrap the value as a single element strided array with a stride of `0` and copy from `x` to `y`, and thus would not need to write a bespoke add-on. Note, however, that calling into a native add-on is not free. For shorter arrays, we'll likely observe a perf hit in Node.js. For now, we focus on just getting something working...
	gfill( length, value, out, 1 );

	return out;
}


// EXPORTS //

module.exports = full;
