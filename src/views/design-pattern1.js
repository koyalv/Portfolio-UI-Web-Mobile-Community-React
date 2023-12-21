import React from 'react'

import { Helmet } from 'react-helmet'

import './design-pattern1.css'

const DesignPattern1 = (props) => {
  return (
    <div className="design-pattern1-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="design-pattern1-dummy-container">
        <span className="design-pattern1-text">
          <span>Design, Pattern</span>
        </span>
      </div>
    </div>
  )
}

export default DesignPattern1
