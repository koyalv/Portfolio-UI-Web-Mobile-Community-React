import React from 'react'

import { Helmet } from 'react-helmet'

import './group1.css'

const Group1 = (props) => {
  return (
    <div className="group1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="group1-group1">
        <img
          alt="Ellipse21365"
          src="/external/ellipse21365-crbf-200h.png"
          className="group1-ellipse2"
        />
        <img
          alt="Ellipse11365"
          src="/external/ellipse11365-8lp-200h.png"
          className="group1-ellipse1"
        />
      </div>
    </div>
  )
}

export default Group1
