import React from "react";

import PropTypes from "prop-types";

import FeatureCard4 from "./feature-card4";
import "./features.css";

const Features = (props) => {
  return (
    <div className={`features-features ${props.rootClassName} `}>
      <h1 className="features-text">
        <span className="">
          Descubre nuestras
          <span
            dangerouslySetInnerHTML={{
              __html: " "
            }}
          />
        </span>
        <br className=""></br>
        <span className="">habilidades</span>
      </h1>
      <div className="features-separator"></div>
      <div className="features-container">
        <div className="features-container1">
          <model-viewer
            bounds="tight"
            src="https://cdn.glitch.global/131bcdae-772c-4801-a55a-fb874d994a2f/logoCD.glb?v=1658433192555"
            background-color
            preload
            reveal-when-loaded
            disable-zoom
            camera-orbit="calc(40rad * env(window-scroll-y)) 90deg"
            environment-image="neutral"
            shadow-intensity="0.5"
          ></model-viewer>
        </div>
        <div className="features-container2">
          <FeatureCard4
            title="Realidad Virtual"
            description="Entorno virtual el cual está conformado por escenas, y objetos 3D con apariencia realistas las cuales permiten una inmersión completa dentro de un entorno simulado. Este tipo de experiencias requieren de unos dispositivos especiales normalmente llamados gafas o cascos de realidad virtual."
            rootClassName="rootClassName1"
            className=""
          ></FeatureCard4>
          <FeatureCard4
            title="Realidad Aumentada"
            description="Objetos 3D superpuestos sobre la realidad las cuales aumentan la experiencia del usuario, este tipo de experiencias tienen que ser reproducidas en un dispositivo móvil o gafas o cascos de realidad aumentada."
            rootClassName="rootClassName4"
            className=""
          ></FeatureCard4>
          <FeatureCard4
            title="CyberSecurity"
            rootClassName="rootClassName3"
            description="Haz cualquier sistema tecnológico más seguro contamos con expertos en cybersecurity para atender todas tus necesidades."
            className=""
          ></FeatureCard4>
          <FeatureCard4
            title="Desarrollo de software"
            description="Desarrollamos cualquier tipo de software, nuestro enfoque está en la web; aplicaciones multiplataforma capaces de ser corridas en cualquier dispositivo que posee un navegador web."
            rootClassName="rootClassName2"
            className=""
          ></FeatureCard4>
        </div>
      </div>
    </div>
  );
};

Features.defaultProps = {
  rootClassName: ""
};

Features.propTypes = {
  rootClassName: PropTypes.string
};

export default Features;
