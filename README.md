# htmlattrstring
Create strings of HTML attributes from JavaScript objects.

# Installation

Here.

# Usage

The module exports a single `toString()` function. This function expects one argument of type `object`. Any other value, such as an array, will throw a `TypeError`. It always returns a string. The input object can contain any kind of enumerable `key/value` pairs. The values that are not string will be automatically discarded from the output (there is **no** attempt to coerce them before to strings).

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

Testing is based on the `mocha` framework.

```bash
npm run test
```
