![Screenshot of Gradients](./screenshot.png)

# LGBTQ.css

Some simple CSS gradients to add some pride to your stylesheets. Color values are slightly saturated for preference. Massively WIP.


## Installation

```
npm install lgbtq.css --save
```

or from a CDN

```
<link rel="stylesheet" href="//npmcdn.com/lgbtq.css/lgbtq.css" media="screen" title="LGBTQ.css" charset="utf-8">
```

### Usage in Build

Recommended you use [PostCSS](https://github.com/postcss/postcss) and [postcss-import](https://github.com/postcss/postcss-import).

```css
@import 'lgbtq.css';
```

The colors are saturated for my personal preference and if you'd like to modify them in your build override them, you could do something like this:

```css
:root {
  --b-blue: #414EF9;
}
```

All the variables are listed in [index.css](https://github.com/charlespeters/lgbtq.css/blob/master/index.css)

## Contributing

First off, you're awesome for wanting to contribute. Second, please take a second to go over a few things to make this process simpler for everyone. Third, you're awesome.

### Pull Requests

- [Fork](https://github.com/charlespeters/lgbtq.css#fork-destination-box) this repo.
- Push to your fork and submit a pull request.
- Please provide a short explanation of why you made the changes you made.

### Issues

**Reduced test cases are required**. All bug reports and problem issues require a reduced test case. See [CSS Tricks - Reduced Test Cases](http://css-tricks.com/reduced-test-cases/) on why they _"are the absolute, ... number one way to troubleshoot bugs."_ Reduced test cases help you identify the issue at hand and understand your own code. On our side, they greatly reduce the amount of time spent resolving the issue.

- A reduced test case is an isolated example that demonstrates the bug or issue.
- It contains the bare minimum HTML, CSS, and JavaScript required to demonstrate the bug. No extra functionality or styling.
- A link to your site is **not** a reduced test case.
- A [JSBin](http://jsbin.com/) or [CodePen](http://codepen.io) is preferred so we can help you fix an error.

## License

MIT

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
