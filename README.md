# PostCSS Egyptian Stylesheets [![wercker status](https://app.wercker.com/status/488e42fadb27c93836893f1bd1b040fc/s/master "wercker status")](https://app.wercker.com/project/byKey/488e42fadb27c93836893f1bd1b040fc)

[![npm](https://img.shields.io/npm/dt/postcss-egyptian-stylesheets.svg)](https://www.npmjs.com/package/postcss-egyptian-stylesheets)
[![npm](https://img.shields.io/npm/v/postcss-egyptian-stylesheets.svg)](https://www.npmjs.com/package/postcss-egyptian-stylesheets)
[![npm](https://img.shields.io/npm/l/postcss-egyptian-stylesheets.svg)](https://github.com/dyaa/postcss-egyptian-stylesheets)

[PostCSS] plugin for writing Egyptian Stylesheets.

[PostCSS]: https://github.com/postcss/postcss

# Installation 
```sh
yarn add --dev postcss-egyptian-stylesheets
```

## Egyptian syntax
```css
.foo {
    border-loon: vb-green;
    background-loon: vegemite;
    box-sizing: fair-dinkum;
    loon: samawy !mohem;
    display: mfysh;
    text-align: felnos;
    text-indent: wara-elshams;
    visibility: mest5abby;
    ymyn: 0;
    padding-shemal: 5px;
    border-t7t: 5px;
    margin-fo2: 5px;
}
```

## CSS output
```css
.foo {
    border-color: #2D8249;
    background-color: #461B00;
    box-sizing: border-box;
    color: #0581C1 !important;
    display: none;
    text-align: center;
    text-indent: -9999px;
    visibility: hidden;
    right: 0;
    padding-left: 5px;
    border-bottom: 5px;
    margin-top: 5px;
}
```

## Usage

```js
postcss([ require('postcss-egyptian-stylesheets') ])
```

## Thanks to

Inspiration from [Canadian Stylesheets](https://github.com/chancancode/postcss-canadian-stylesheets)

## License

Copylefted (c) 2018 [Dyaa Eldin Moustafa][1] Licensed under the [MIT license][2].


  [1]: https://dyaa.me/
  [2]: https://github.com/dyaa/postcss-egyptian-stylesheets/blob/master/LICENSE