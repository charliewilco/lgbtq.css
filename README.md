![Screenshot of Gradients](./screenshot.png)

# LGBTQ.css

Some simple CSS gradients to add some pride to your stylesheets. Color values are slightly saturated for preference. Massively WIP.


## Installation

```
npm install lgbtq.css --save
```

or from a CDN

```
<link rel="stylesheet" href="//unpkg.com/lgbtq.css/lgbtq.css" media="screen" title="LGBTQ.css" charset="utf-8">
```

### Usage in Build

Recommend you use [PostCSS](https://github.com/postcss/postcss) and [postcss-import](https://github.com/postcss/postcss-import). But there's a processed file available from a [CDN](https://unpkg.com/lgbtq.css@1.0.1/lgbtq.css) and in the [repo](https://github.com/charlespeters/lgbtq.css/blob/master/lgbtq.css).

```css
@import 'lgbtq.css';
```

The colors are saturated for my personal preference and if you'd like to modify them in your build, override them; you could do something like this:

```css
:root {
  --b-blue: #414EF9;
}
```

### Using in HTML

After you've installed the project you can use it in your HTML or templates like this:

```markup
<body class="c-banner--[gay,bi,trans,pan,asex,nonb]">
```

All the variables are listed in [index.css](https://github.com/charlespeters/lgbtq.css/blob/master/index.css)

## Setup for LGBTQ.css

![PostCSS Logo](http://postcss.org/_/web_modules/Hero/postcss.svg)

This project uses [PostCSS](http://postcss.org/) and [postcss-cli](https://github.com/postcss/postcss-cli), check out the [config](https://github.com/charlespeters/lgbtq.css/blob/master/.postcss.json).

1. Clone the repo `git clone https://github.com/charlespeters/lgbtq.css.git`
2. Install Node `brew install node`
3. In the root of the project run `npm install; npm run watch`
4. Write some CSS

![CSS](http://i.giphy.com/nArBQosm5nXdm.gif)

## Browser Support

LGBTQ.css makes uses of `:before` CSS pseudo selector and CSS gradients. CSS pseudo selectors have really great browser support: Chrome 2+, Safari 1.3+, Firefox 3.5+, Opera 6+ and IE 8+. CSS gradients are supported in Firefox 3+ (and 16+ unprefixed), Chrome 4+ (and 26+ unprefixed), IE 10+, Safari 4+ (6.1+ unprefixed), Opera 11.5+ (and 12+ unprefixed) and Android browsers 2.1+ (and 4.4+ unprefixed).

The processed file contains `-webkit` prefixed fallbacks.

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
