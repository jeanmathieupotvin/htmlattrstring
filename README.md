# htmlattrstring

Create strings of HTML attributes from JavaScript objects. 

This module is really simple. The initial intent was to use it along with EJS views and keep code embedded into views clean and easy to read.

# Installation

The package is not published on `npm`. I thought it was too simple to be published.
Instead, users can clone this repo into their project.

```bash
git clone https://github.com/jeanmathieupotvin/htmlattrstring
```

Alternatively, they can download an [official release](https://github.com/jeanmathieupotvin/htmlattrstring/releases) from this repository.

# Usage

The module exports a single `toString()` function. This function expects one argument of type `object`. Any other value, such as an `array`, will throw a `TypeError`. It always returns a string. The input object can contain any kind of enumerable `key/value` pairs. The values that are not string will be automatically discarded from the output (there is **no** attempt to coerce them to strings before).

```js
const htmlAttrString = require('htmlattrstring');
const attrs = {
    src: 'https://my.example.com/images/3972eaf.png',
    class: 'my-img',
    height: '200',
    width: '400'
}
const attrsWithNumbers = {
    src: 'https://my.example.com/images/3972eaf.png',
    class: 'my-img',
    height: '200',
    width: '400',
    dataId: 3463
}

htmlAttrString.toString(attrs);
htmlAttrString.toString(attrsWithNumbers);
// Outputs 'src="https://my.example.com/images/3972eaf.png" class="my-img" height="200" width="400"'.
```

# Testing

Testing is based on the `mocha` framework. Run the command line below to execute all unit tests.

```bash
npm run test
```

# Bugs and feedback

Submit them [here](https://github.com/jeanmathieupotvin/htmlattrstring/issues). Thanks!
