# biojs-utils-seqtools

[![NPM version](http://img.shields.io/npm/v/biojs-utils-seqtools.svg)](https://www.npmjs.org/package/biojs-utils-seqtools) 
[![Build Status](https://secure.travis-ci.org/greenify/biojs-utils-seqtools.png?branch=master)](http://travis-ci.org/greenify/biojs-utils-seqtools) 

> Convience tools to work with seqs

## Getting Started
Install the module with: `npm install biojs-utils-seqtools`

```javascript
var st = require('biojs-utils-seqtools');
```

## Documentation

### st.getMeta(label)

``
st.getMeta("sp|abc|def") // {name: "def", ids: {sp: "abc"}}
``

### st.contains(text,search)

```
st.contains("ABC", 2) // false
st.contains("ABC","C") // true
```

### st.splitNChars(text,n)

```
st.splitNChars("ABC", 2) // ["AB", "C"]
```

## Contributing

All contributions are welcome.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/greenify/biojs-utils-seqtools/issues).

## License 

The MIT License

Copyright (c) 2014, greenify

Permission is hereby granted, free of charge, to any person
obtaining a copy of this software and associated documentation
files (the "Software"), to deal in the Software without
restriction, including without limitation the rights to use,
copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the
Software is furnished to do so, subject to the following
conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES
OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND
NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT
HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
OTHER DEALINGS IN THE SOFTWARE.
