<!--

@license Apache-2.0

Copyright (c) 2020 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# iterMap2

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Create an [iterator][mdn-iterator-protocol] which invokes a binary function accepting numeric arguments for each iterated value.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->



<section class="usage">

## Usage

```javascript
import iterMap2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-tools-map2@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/math-iter-tools-map2/tags). For example,

```javascript
import iterMap2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-tools-map2@v0.1.1-esm/index.mjs';
```

#### iterMap2( iter0, iter1, fcn\[, options] )

Returns an [iterator][mdn-iterator-protocol] which invokes a binary `function` accepting numeric arguments for each iterated value.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';
import copysign from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-copysign@esm/index.mjs';

var it1 = array2iterator( [ 1.0, 2.0, 3.0, 4.0 ] );
var it2 = array2iterator( [ 1.0, -1.0, -1.0, 1.0 ] );

var it = iterMap2( it1, it2, copysign );
// returns <Object>

var r = it.next().value;
// returns 1.0

r = it.next().value;
// returns -2.0

r = it.next().value;
// returns -3.0

// ...
```

The returned [iterator][mdn-iterator-protocol] protocol-compliant object has the following properties:

-   **next**: function which returns an [iterator][mdn-iterator-protocol] protocol-compliant object containing the next iterated value (if one exists) assigned to a `value` property and a `done` property having a `boolean` value indicating whether the iterator is finished.
-   **return**: function which closes an [iterator][mdn-iterator-protocol] and returns a single (optional) argument in an [iterator][mdn-iterator-protocol] protocol-compliant object.

The invoked `function` is provided two arguments:

-   `x`: iterated value from first input [iterator][mdn-iterator-protocol].
-   `y`: iterated value from second input [iterator][mdn-iterator-protocol].

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';

function fcn( x, y ) {
    return x + y + 10;
}

var it1 = array2iterator( [ 1, 2, 3, 4 ] );
var it2 = array2iterator( [ 1, 2, 3, 4 ] );

var it = iterMap2( it1, it2, fcn );
// returns <Object>

var r = it.next().value;
// returns 12

r = it.next().value;
// returns 14

r = it.next().value;
// returns 16

// ...
```

The function supports the following `options`:

-   **invalid**: return value when an input [iterator][mdn-iterator-protocol] yields a non-numeric value. Default: `NaN`.

By default, the function returns an [iterator][mdn-iterator-protocol] which returns `NaN` when an input [iterator][mdn-iterator-protocol] yields a non-numeric value. To specify a different return value, set the `invalid` option.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';
import copysign from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-copysign@esm/index.mjs';

var it1 = array2iterator( [ '1.0', '2.0', '3.0' ] );
var it2 = array2iterator( [ 1.0, 2.0, 3.0 ] );

var opts = {
    'invalid': null
};
var it = iterMap2( it1, it2, copysign, opts );
// returns <Object>

var v = it.next().value;
// returns null

v = it.next().value;
// returns null

// ...
```

If provided a numeric value as an [`iterator`][mdn-iterator-protocol] argument, the value is broadcast as an **infinite** [iterator][mdn-iterator-protocol] which **always** returns the provided value.

```javascript
import array2iterator from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-to-iterator@esm/index.mjs';
import copysign from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-copysign@esm/index.mjs';

var it1 = array2iterator( [ 1.0, 2.0 ] );

var it = iterMap2( it1, -4.0, copysign );
// returns <Object>

var v = it.next().value;
// returns -1.0

v = it.next().value;
// returns -2.0

var bool = it.next().done;
// returns true
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   If an iterated value is non-numeric (including `NaN`), the returned [iterator][mdn-iterator-protocol] returns `NaN`. If non-numeric iterated values are possible, you are advised to provide an [`iterator`][mdn-iterator-protocol] which type checks and handles non-numeric values accordingly.
-   The length of the returned [iterator][mdn-iterator-protocol] is equal to the length of the shortest provided [iterator][mdn-iterator-protocol]. In other words, the returned [iterator][mdn-iterator-protocol] ends once **one** of the provided [iterators][mdn-iterator-protocol] ends.
-   If an environment supports `Symbol.iterator` **and** a provided [iterator][mdn-iterator-protocol] is iterable, the returned [iterator][mdn-iterator-protocol] is iterable.

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import randu from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-randu@esm/index.mjs';
import uniform from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-iter-uniform@esm/index.mjs';
import copysign from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-copysign@esm/index.mjs';
import iterMap2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-iter-tools-map2@esm/index.mjs';

// Create seeded iterators for generating pseudorandom numbers:
var rand1 = randu({
    'seed': 1234,
    'iter': 10
});

var rand2 = uniform( -1.0, 1.0, {
    'seed': 1234,
    'iter': 10
});

// Create an iterator which consumes the pseudorandom number iterators:
var it = iterMap2( rand1, rand2, copysign );

// Perform manual iteration...
var r;
while ( true ) {
    r = it.next();
    if ( r.done ) {
        break;
    }
    console.log( r.value );
}

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2023. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/math-iter-tools-map2.svg
[npm-url]: https://npmjs.org/package/@stdlib/math-iter-tools-map2

[test-image]: https://github.com/stdlib-js/math-iter-tools-map2/actions/workflows/test.yml/badge.svg?branch=v0.1.1
[test-url]: https://github.com/stdlib-js/math-iter-tools-map2/actions/workflows/test.yml?query=branch:v0.1.1

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/math-iter-tools-map2/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/math-iter-tools-map2?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/math-iter-tools-map2.svg
[dependencies-url]: https://david-dm.org/stdlib-js/math-iter-tools-map2/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/math-iter-tools-map2/tree/deno
[umd-url]: https://github.com/stdlib-js/math-iter-tools-map2/tree/umd
[esm-url]: https://github.com/stdlib-js/math-iter-tools-map2/tree/esm
[branches-url]: https://github.com/stdlib-js/math-iter-tools-map2/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/math-iter-tools-map2/main/LICENSE

[mdn-iterator-protocol]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#The_iterator_protocol

</section>

<!-- /.links -->
