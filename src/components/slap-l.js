import React from 'react'

import PropTypes from 'prop-types'

import './slap-l.css'

const SlapL = (props) => {
  return (
    <div className={`slap-l-slap-l ${props.rootClassName} `}>
      <div className="slap-l-container">
        <h1 className="slap-l-text">
          Llevando el metaverso a cada rincon de latinoamerica
        </h1>
        <span className="slap-l-text1">{props.header}</span>
        <div className="slap-l-container1">
          <img
            alt={props.pastedImage_alt}
            src={props.pastedImage_src}
            className="slap-l-pasted-image"
          />
          <a
            href="https://api.whatsapp.com/send/?phone=573203149378&amp;text&amp;type=phone_number&amp;app_absent=0"
            target="_blank"
            rel="noreferrer noopener"
            className="slap-l-text2"
          >
            {props.text}
          </a>
          <div className="slap-l-container2">
            <a
              href="https://api.whatsapp.com/send/?phone=573203149378&amp;text&amp;type=phone_number&amp;app_absent=0"
              target="_blank"
              rel="noreferrer noopener"
              className="slap-l-link button"
            >
              {props.button}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

SlapL.defaultProps = {
  pastedImage_alt: 'pastedImage',
  header: 'Escribenos para empesar a crear un futuro negocio en el metaverso.',
  text: 'Mándanos un mensaje',
  pastedImage_src: '/playground_assets/pastedimage-4qg5-200h.png',
  button: 'WhatsApp',
  rootClassName: '',
}

SlapL.propTypes = {
  pastedImage_alt: PropTypes.string,
  header: PropTypes.string,
  text: PropTypes.string,
  pastedImage_src: PropTypes.string,
  button: PropTypes.string,
  rootClassName: PropTypes.string,
}

export default SlapL
