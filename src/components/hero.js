import React from "react";

import PropTypes from "prop-types";

import "./hero.css";

const Hero = (props) => {
  return (
    <div className={`hero-hero ${props.rootClassName} `}>
      <img
        alt={props.pastedImage_alt}
        src={props.pastedImage_src}
        className="hero-pasted-image"
      />
      <div className="hero-container">
        <h1 className="hero-text">{props.heading}</h1>
        <span className="hero-text1">{props.Text}</span>
        <div className="hero-btn-group">
          <a
            href="https://csb-oigj3u.netlify.app/"
            target="_blank"
            rel="noreferrer noopener"
            className="hero-link button"
          >
            {props.button}
          </a>
          <a
            href="https://brayanmezac.github.io/Logo-3d-con-three-js/"
            target="_blank"
            rel="noreferrer noopener"
            className="hero-link1 button"
          >
            {props.button1}
          </a>
        </div>
      </div>
    </div>
  );
};

Hero.defaultProps = {
  pastedImage_alt: "pastedImage",
  heading:
    "Realidad aumentada, realidad virtual y realidad mixta para tu negocio",
  button: "Probar AR",
  pastedImage_src: "/playground_assets/pastedimage-gqrsg-500w.png",
  Text:
    "Masifica la tasa de conversión de lead de tu emprendimiento utilizando lo ultimo en tecnologia e innovacion",
  button1: "Probar VR",
  rootClassName: ""
};

Hero.propTypes = {
  pastedImage_alt: PropTypes.string,
  heading: PropTypes.string,
  button: PropTypes.string,
  pastedImage_src: PropTypes.string,
  Text: PropTypes.string,
  button1: PropTypes.string,
  rootClassName: PropTypes.string
};

export default Hero;
