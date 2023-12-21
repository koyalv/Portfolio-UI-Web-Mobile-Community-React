import React from 'react'

import { Helmet } from 'react-helmet'

import './design-pattern.css'

const DesignPattern = (props) => {
  return (
    <div className="design-pattern-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="design-pattern-dummy-container">
        <span className="design-pattern-text">
          <span>Design, Pattern</span>
        </span>
      </div>
    </div>
  )
}

export default DesignPattern
