import {mount, shallow} from "enzyme"
import React from "react"

import Segment from "./index"

const props = {
  stroke: "#000",
  strokeDasharray: "50 50",
  strokeDashoffset: 0,
  strokeWidth: 5,
  value: 50,
}
const title = "Title"
const SegmentFixture = <Segment {...props} />
const SegmentWithTitleFixture = <Segment {...props} title={title} />

describe("Segment", () => {
  it("renders", () => {
    mount(SegmentFixture)
  })

  it("generates <title>", () => {
    const segment = shallow(SegmentWithTitleFixture)
    expect(segment.html()).toContain(`<title>${title}</title>`)
  })
})
