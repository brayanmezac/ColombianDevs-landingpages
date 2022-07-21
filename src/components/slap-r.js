import React from 'react'

import PropTypes from 'prop-types'

import './slap-r.css'

const SlapR = (props) => {
  return (
    <div className={`slap-r-slap-r ${props.rootClassName} `}>
      <img
        alt="image"
        src="/playground_assets/saly%20-%203d%20illustration%20pack%20%5Bfind%20it%20on%20figma%5D-700w.png"
        className="slap-r-persona-vr"
      />
      <img
        alt="image"
        src="/playground_assets/background-700w.png"
        className="slap-r-image"
      />
    </div>
  )
}

SlapR.defaultProps = {
  rootClassName: '',
}

SlapR.propTypes = {
  rootClassName: PropTypes.string,
}

export default SlapR
