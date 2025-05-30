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

var tape = require( 'tape' );
var Float64Array = require( '@stdlib/array-float64' );
var Float32Array = require( '@stdlib/array-float32' );
var Int32Array = require( '@stdlib/array-int32' );
var Uint32Array = require( '@stdlib/array-uint32' );
var Int16Array = require( '@stdlib/array-int16' );
var Uint16Array = require( '@stdlib/array-uint16' );
var Int8Array = require( '@stdlib/array-int8' );
var Uint8Array = require( '@stdlib/array-uint8' );
var Uint8ClampedArray = require( '@stdlib/array-uint8c' );
var Complex64Array = require( '@stdlib/array-complex64' );
var Complex128Array = require( '@stdlib/array-complex128' );
var BooleanArray = require( '@stdlib/array-bool' );
var reinterpret64 = require( '@stdlib/strided-base-reinterpret-complex64' );
var reinterpret128 = require( '@stdlib/strided-base-reinterpret-complex128' );
var reinterpretBoolean = require( '@stdlib/strided-base-reinterpret-boolean' );
var Complex128 = require( '@stdlib/complex-float64-ctor' );
var Complex64 = require( '@stdlib/complex-float32-ctor' );
var instanceOf = require( '@stdlib/assert-instance-of' );
var full = require( './../lib' );


// TESTS //

tape( 'main export is a function', function test( t ) {
	t.ok( true, __filename );
	t.strictEqual( typeof full, 'function', 'main export is a function' );
	t.end();
});

tape( 'the function throws an error if provided a value other than a nonnegative integer for the first argument', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-3,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			full( value, 1.0 );
		};
	}
});

tape( 'the function throws an error if provided a value other than a nonnegative integer for the first argument (dtype)', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		-3,
		3.14,
		NaN,
		true,
		false,
		null,
		void 0,
		[],
		{},
		function noop() {}
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			full( value, 1.0, 'float32' );
		};
	}
});

tape( 'the function throws an error if provided an unrecognized data type', function test( t ) {
	var values;
	var i;

	values = [
		'5',
		'beep',
		'full',
		'Int32',
		'Uint32',
		'Int16',
		'Uint16',
		'Int8',
		'Uint8',
		'Uint8c',
		'uint8_clamped',
		'Float64',
		'Float32',
		'FLOAT64',
		'FLOAT32',
		'GENERIC'
	];

	for ( i = 0; i < values.length; i++ ) {
		t.throws( badValue( values[i] ), TypeError, 'throws an error when provided '+values[i] );
	}
	t.end();

	function badValue( value ) {
		return function badValue() {
			full( 10, 1.0, value );
		};
	}
});

tape( 'the function returns a filled array (default)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	arr = full( 5, 1.0 );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float64)', function test( t ) {
	var expected;
	var arr;

	expected = new Float64Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	arr = full( 5, 1.0, 'float64' );
	t.strictEqual( instanceOf( arr, Float64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=float32)', function test( t ) {
	var expected;
	var arr;

	expected = new Float32Array( [ 1.0, 1.0, 1.0, 1.0, 1.0 ] );

	arr = full( 5, 1.0, 'float32' );
	t.strictEqual( instanceOf( arr, Float32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=bool)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8Array( [ 1, 1, 1, 1 ] );

	arr = full( 4, true, 'bool' );
	t.strictEqual( instanceOf( arr, BooleanArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( reinterpretBoolean( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex128)', function test( t ) {
	var expected;
	var arr;
	var z;

	expected = new Float64Array( [ 1.0, 2.0, 1.0, 2.0 ] );

	z = new Complex128( 1.0, 2.0 );
	arr = full( 2, z, 'complex128' );
	t.strictEqual( instanceOf( arr, Complex128Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret128( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=complex64)', function test( t ) {
	var expected;
	var arr;
	var z;

	expected = new Float32Array( [ 1.0, 2.0, 1.0, 2.0 ] );

	z = new Complex64( 1.0, 2.0 );
	arr = full( 2, z, 'complex64' );
	t.strictEqual( instanceOf( arr, Complex64Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length/2, 'returns expected value' );
	t.deepEqual( reinterpret64( arr, 0 ), expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int32)', function test( t ) {
	var expected;
	var arr;

	expected = new Int32Array( [ 1, 1, 1, 1, 1 ] );

	arr = full( 5, 1, 'int32' );
	t.strictEqual( instanceOf( arr, Int32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint32)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint32Array( [ 1, 1, 1, 1, 1 ] );

	arr = full( 5, 1, 'uint32' );
	t.strictEqual( instanceOf( arr, Uint32Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int16)', function test( t ) {
	var expected;
	var arr;

	expected = new Int16Array( [ 1, 1, 1, 1, 1 ] );

	arr = full( 5, 1, 'int16' );
	t.strictEqual( instanceOf( arr, Int16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint16)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint16Array( [ 1, 1, 1, 1, 1 ] );

	arr = full( 5, 1, 'uint16' );
	t.strictEqual( instanceOf( arr, Uint16Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=int8)', function test( t ) {
	var expected;
	var arr;

	expected = new Int8Array( [ 1, 1, 1, 1, 1 ] );

	arr = full( 5, 1, 'int8' );
	t.strictEqual( instanceOf( arr, Int8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8Array( [ 1, 1, 1, 1, 1 ] );

	arr = full( 5, 1, 'uint8' );
	t.strictEqual( instanceOf( arr, Uint8Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=uint8c)', function test( t ) {
	var expected;
	var arr;

	expected = new Uint8ClampedArray( [ 1, 1, 1, 1, 1 ] );

	arr = full( 5, 1, 'uint8c' );
	t.strictEqual( instanceOf( arr, Uint8ClampedArray ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});

tape( 'the function returns a filled array (dtype=generic)', function test( t ) {
	var expected;
	var arr;

	expected = [ 1, 1, 1, 1, 1 ];

	arr = full( 5, 1, 'generic' );
	t.strictEqual( instanceOf( arr, Array ), true, 'returns expected value' );
	t.strictEqual( arr.length, expected.length, 'returns expected value' );
	t.deepEqual( arr, expected, 'returns expected value' );

	t.end();
});
