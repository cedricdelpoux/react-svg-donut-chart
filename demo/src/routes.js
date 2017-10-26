import React from "react"
import ReactSvgDonutChart from "../../src"

import readmeHtml from "../../README.md"

const data = [
  {value: 100, stroke: "#22594e", strokeWidth: 6},
  {value: 60, stroke: "#2f7d6d"},
  {value: 30, stroke: "#3da18d"},
  {value: 20, stroke: "#69c2b0"},
  {value: 10, stroke: "#a1d9ce"},
]

const routes = [
  {
    path: "/",
    exact: true,
    demo: {
      component: <ReactSvgDonutChart data={data} spacing={1} />,
      displayName: "ReactSvgDonutChart",
    },
    label: "Demo",
  },
  {
    path: "/readme",
    html: readmeHtml,
    label: "Read me",
  },
]

export default routes
