import {mount} from "enzyme"
import React from "react"

import DonutChart from "./index"

const data = [
  {value: 100, stroke: "#22594e", strokeWidth: 6},
  {value: 60, stroke: "#2f7d6d"},
  {value: 30, stroke: "#3da18d"},
  {value: 20, stroke: "#69c2b0"},
  {value: 10, stroke: "#a1d9ce"},
]
const DonutChartFixture = <DonutChart data={data} spacing={1} />
const DonutChartWrongSpacingFixture = <DonutChart data={data} spacing={-1} />

describe("DonutChart", () => {
  it("renders", () => {
    mount(DonutChartFixture)
    mount(DonutChartWrongSpacingFixture)
  })
})
