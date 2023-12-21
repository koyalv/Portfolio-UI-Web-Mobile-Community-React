import React from 'react'

import { Helmet } from 'react-helmet'

import './footer.css'

const Footer = (props) => {
  return (
    <div className="footer-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="footer-footer">
        <img
          alt="Rectangle40I136"
          src="/external/rectangle40i136-vsna-200h.png"
          className="footer-rectangle40"
        />
        <img
          alt="fbI136"
          src="/external/fbi136-1h3.svg"
          className="footer-fb"
        />
        <img
          alt="LinkedinI136"
          src="/external/linkedini136-pnsk.svg"
          className="footer-linkedin"
        />
        <div className="footer-group">
          <div className="footer-group1">
            <img
              alt="VectorI136"
              src="/external/vectori136-lmah.svg"
              className="footer-vector"
            />
          </div>
        </div>
        <div className="footer-insta">
          <img
            alt="VectorI136"
            src="/external/vectori136-mvf.svg"
            className="footer-vector1"
          />
          <img
            alt="VectorI136"
            src="/external/vectori136-8w0b.svg"
            className="footer-vector2"
          />
          <img
            alt="VectorI136"
            src="/external/vectori136-qm3c.svg"
            className="footer-vector3"
          />
        </div>
        <span className="footer-text">
          <span>
            Copyright ©2020 All rights reserved
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
        </span>
      </div>
    </div>
  )
}

export default Footer
