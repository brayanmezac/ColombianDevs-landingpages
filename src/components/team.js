import React from 'react'

import TestimonialCard1 from './testimonial-card1'
import './team.css'

const Team = (props) => {
  return (
    <div className="team-team">
      <div className="team-container">
        <h1 className="team-text">
          <span>Nuestro Equipo</span>
        </h1>
        <span className="team-text2">
          <span>
            Nuestro equipo está conformado por varios perfiles profesionales…
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span></span>
          <span></span>
        </span>
        <div className="team-container1">
          <TestimonialCard1
            picture_src="https://p16-sign-va.tiktokcdn.com/tos-maliva-avt-0068/52a37cbfeb3c43661c96fdb6557dc7d2~c5_100x100.jpeg?x-expires=1658599200&amp;x-signature=9uOrT0TYUO6wfCLTovuBkEaNs5Q%3D"
            rootClassName="rootClassName2"
            role="CIO &amp; SOFTWARE ENGINEER"
            name="Juan Esteban Perez Monsalve"
            quote="Programador experto en Desarrollo Web, Full Stack, Backend, Frontend, Python para backend, inteligencia artificial y ciencia de datos."
            picture_alt="programador nea"
          ></TestimonialCard1>
          <TestimonialCard1
            rootClassName="rootClassName"
            role="CEO"
            name="Cedeño Vargas Edwin Hernan"
            quote="Especialista en Cyber-security con amplios conocimientos en automatizaciones, creación de bot y desarrollo web"
            picture_alt="edwin"
            picture_src="https://media-exp1.licdn.com/dms/image/C4E03AQFjVNO9ERxSAg/profile-displayphoto-shrink_200_200/0/1641923198695?e=1663804800&amp;v=beta&amp;t=pAnaphapKGod1Gg9Y50Tao2pTtNtDs2MqiwMFFYtd48"
          ></TestimonialCard1>
          <TestimonialCard1
            picture_src="https://media-exp1.licdn.com/dms/image/C4D03AQGEpVa9C1oRHQ/profile-displayphoto-shrink_200_200/0/1646809122505?e=1663804800&amp;v=beta&amp;t=4xb68ZXvaHK_iaEs5BpSirad0ObvHvkWUwv2BkppqWs"
            rootClassName="rootClassName1"
            role="CO-CEO &amp; CTO"
            name="Brayan Meza Castillo"
            quote="Programador experto en Realidad Aumentada, Realidad Virtual y Realidad Mixta a la vez combina una amplia gama de conocimientos como Desarrollo Web, Backend, Frontend y Internet de las cosas"
            picture_alt="Brayanmezac"
          ></TestimonialCard1>
        </div>
      </div>
    </div>
  )
}

export default Team
