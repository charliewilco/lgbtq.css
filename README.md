![Screenshot of Gradients](./screenshot-2.png)

# LGBTQ.css

Some simple CSS gradients to add some pride to your stylesheets. Color values are slightly saturated for preference. Massively WIP.

## Installation

```
npm install lgbtq.css --save
```

or from a CDN

```html
<link
	rel="stylesheet"
	href="https://unpkg.com/lgbtq.css/dist/lgbtq.css"
	media="screen"
	title="LGBTQ.css"
	charset="utf-8"
/>
```

### Usage in Build

Recommend you use [PostCSS](https://github.com/postcss/postcss) and [postcss-import](https://github.com/postcss/postcss-import). But there's a processed file available from a [CDN](https://unpkg.com/lgbtq.css@1.0.1/lgbtq.css) and in the [repo](https://github.com/charliewilco/lgbtq.css/blob/lgbtq/src/lgbtq.css).

```css
@import "~lgbtq.css";
```

### Class Names

| Class Name    | Flag                    |
| ------------- | ----------------------- |
| `Gay`         | Gay Pride               |
| `BiPlus`      | Bisexual Pride          |
| `Trans`       | Transgender Pride       |
| `NonBinary`   | Non-binary Pride        |
| `Asexual`     | Asexual Pride           |
| `Pansexual`   | Pansexual Pride         |
| `Queer`       | Queer Pride             |
| `GayMale`     | Gay Male Pride          |
| `Lesbian`     | Lesbian Pride           |
| `Intersex`    | Intersex Pride          |
| `GenderFluid` | Genderfluid Pride       |
| `Agender`     | Agender Pride           |
| `Polyamorous` | Polyamorous Pride       |
| `Omnisexual`  | Omnisexual Pride        |
| `Polysexual`  | Polysexual Pride        |
| `AroAce`      | Aromantic Asexual Pride |
| `Genderqueer` | Genderqueer Pride       |

## Setup for LGBTQ.css

![PostCSS Logo](http://postcss.org/_/web_modules/Hero/postcss.svg)

This project uses [PostCSS](http://postcss.org/) and [postcss-cli](https://github.com/postcss/postcss-cli), check out the [config](https://github.com/charliewilco/lgbtq.css/blob/main/package.json).

1. Clone the repo `git clone https://github.com/charliwilco/lgbtq.css.git`
2. Install Node `brew install node`
3. In the root of the project run `yarn && yarn dev`
4. Write some CSS

![CSS](http://i.giphy.com/nArBQosm5nXdm.gif)

## Browser Support

LGBTQ.css makes uses of `:before` CSS pseudo selector and CSS gradients. CSS pseudo selectors have really great browser support: Chrome 2+, Safari 1.3+, Firefox 3.5+, Opera 6+ and IE 8+. CSS gradients are supported in Firefox 3+ (and 16+ unprefixed), Chrome 4+ (and 26+ unprefixed), IE 10+, Safari 4+ (6.1+ unprefixed), Opera 11.5+ (and 12+ unprefixed) and Android browsers 2.1+ (and 4.4+ unprefixed).

The processed file contains `-webkit` prefixed fallbacks.

## Contributing

First off, you're awesome for wanting to contribute. Second, please take a second to go over a few things to make this process simpler for everyone. Third, you're awesome.

### Pull Requests

- [Fork](https://github.com/charliewilco/lgbtq.css#fork-destination-box) this repo.
- Push to your fork and submit a pull request.
- Please provide a short explanation of why you made the changes you made.

### Issues

**Reduced test cases are required**. All bug reports and problem issues require a reduced test case. See [CSS Tricks - Reduced Test Cases](http://css-tricks.com/reduced-test-cases/) on why they _"are the absolute, ... number one way to troubleshoot bugs."_ Reduced test cases help you identify the issue at hand and understand your own code. On our side, they greatly reduce the amount of time spent resolving the issue.

- A reduced test case is an isolated example that demonstrates the bug or issue.
- It contains the bare minimum HTML, CSS, and JavaScript required to demonstrate the bug. No extra functionality or styling.
- A link to your site is **not** a reduced test case.
- A [JSBin](http://jsbin.com/) or [CodePen](http://codepen.io) is preferred so we can help you fix an error.
