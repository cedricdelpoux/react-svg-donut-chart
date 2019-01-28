import React from "react"
import PropTypes from "prop-types"

import Segment from "./Segment"
import {width} from "./constants"

const ReactSvgDonutChart = ({data, spacing, ...rest}) => {
  const total = data.reduce((prev, current) => current.value + prev, 0)
  let percentAcc = 0
  return (
    <svg viewBox={`0 0 ${width} ${width}`} {...rest}>
      {data.map((d, i) => {
        const percent = d.value / Math.ceil(total) * 100
        const DashArrayPercent =
          spacing < 0 || percent - spacing < 0 ? percent : percent - spacing
        const DashArraylength =
          spacing < 0 || percent + spacing > 100
            ? 100 - percent
            : 100 - percent + spacing
        const strokeDasharray = `${DashArrayPercent} ${DashArraylength}`
        const strokeDashoffset = i === 0 ? 0 : 100 - percentAcc
        percentAcc += percent
        return (
          percent > 0 && (
            <Segment
              key={i}
              strokeDasharray={strokeDasharray}
              strokeDashoffset={strokeDashoffset}
              {...d}
            />
          )
        )
      })}
    </svg>
  )
}

ReactSvgDonutChart.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      stroke: PropTypes.string.isRequired,
      strokeWidth: PropTypes.number,
      title: PropTypes.string,
      value: PropTypes.number.isRequired,
    })
  ),
  spacing: PropTypes.number,
}

ReactSvgDonutChart.defaultProps = {
  data: [],
  spacing: 0,
}

export default ReactSvgDonutChart
