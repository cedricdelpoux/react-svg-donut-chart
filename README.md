# react-svg-donut-chart

[![npm package][npm-badge]][npm]
[![Travis][build-badge]][build]
[![Codecov][codecov-badge]][codecov]
![Module formats][module-formats]

A lightweight responsive donut chart React component using only SVG

## Getting started

[![react-svg-donut-chart](https://nodei.co/npm/react-svg-donut-chart.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/react-svg-donut-chart/)

You can download `react-svg-donut-chart` from the NPM registry via the `npm` or `yarn` commands

```shell
yarn add react-svg-donut-chart
npm install react-svg-donut-chart --save
```

If you don't use package manager and you want to include `react-svg-donut-chart` directly in your html, you could get it from the UNPKG CDN

```html
https://unpkg.com/react-svg-donut-chart/dist/react-svg-donut-chart.min.js.
```

## Usage

```javascript
import React from "react"
import DonutChart from "react-svg-donut-chart"

const dataPie = [
    {value: 100, stroke: "#22594e", strokeWidth: 6},
    {value: 60, stroke: "#2f7d6d"},
    {value: 30, stroke: "#3da18d"},
    {value: 20, stroke: "#69c2b0"},
    {value: 10, stroke: "#a1d9ce"},
  ]

const App = () => <DonutChart data={data} />
```

## Demo

See [Demo page][github-page]

## Contributing

* ⇄ Pull/Merge requests and ★ Stars are always welcome.
* For bugs and feature requests, please [create an issue][github-issue].
* Pull requests must be accompanied by passing automated tests (`npm test`).

See [CONTRIBUTING.md](./CONTRIBUTING.md) guidelines

## Changelog

See [changelog](./CHANGELOG.md)

## License

This project is licensed under the MIT License - see the [LICENCE.md](./LICENCE.md) file for details

[npm-badge]: https://img.shields.io/npm/v/react-svg-donut-chart.svg?style=flat-square
[npm]: https://www.npmjs.org/package/react-svg-donut-chart

[build-badge]: https://img.shields.io/travis/xuopled/react-svg-donut-chart/master.svg?style=flat-square
[build]: https://travis-ci.org/xuopled/react-svg-donut-chart

[codecov-badge]: https://img.shields.io/codecov/c/github/xuopled/react-svg-donut-chart.svg?style=flat-square
[codecov]: https://codecov.io/gh/xuopled/react-svg-donut-chart

[module-formats]: https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg?style=flat-square

[github-page]: https://xuopled.github.io/react-svg-donut-chart
[github-issue]: https://github.com/xuopled/react-svg-donut-chart/issues/new
