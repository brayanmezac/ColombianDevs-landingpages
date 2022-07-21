import React from 'react'

import PropTypes from 'prop-types'

import './navigation-links2.css'

const NavigationLinks2 = (props) => {
  return (
    <nav className={`navigation-links2-nav ${props.rootClassName} `}>
      <span className="navigation-links2-nav1">{props.nav1}</span>
      <span className="navigation-links2-nav2">{props.nav2}</span>
      <span className="navigation-links2-nav3">{props.nav3}</span>
    </nav>
  )
}

NavigationLinks2.defaultProps = {
  nav2: 'About',
  rootClassName: '',
  nav1: 'Skills',
  nav3: 'Team',
}

NavigationLinks2.propTypes = {
  nav2: PropTypes.string,
  rootClassName: PropTypes.string,
  nav1: PropTypes.string,
  nav3: PropTypes.string,
}

export default NavigationLinks2
