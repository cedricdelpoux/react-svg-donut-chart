import React from "react"
import PropTypes from "prop-types"

import {center, radius} from "../constants"

const Segment = ({
  stroke,
  strokeDasharray,
  strokeDashoffset,
  strokeWidth,
  title,
}) => (
  <circle
    cx={center.x}
    cy={center.y}
    r={radius}
    fill="none"
    stroke={stroke}
    strokeWidth={strokeWidth}
    strokeDasharray={strokeDasharray}
    strokeDashoffset={strokeDashoffset}
  >
    {title && <title>{title}</title>}
  </circle>
)

Segment.propTypes = {
  stroke: PropTypes.string.isRequired,
  strokeDasharray: PropTypes.string.isRequired,
  strokeDashoffset: PropTypes.number.isRequired,
  strokeWidth: PropTypes.number,
  title: PropTypes.string,
  value: PropTypes.number.isRequired,
}

Segment.defaultProps = {
  strokeWidth: 5,
}

export default Segment
