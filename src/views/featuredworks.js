import React from 'react'

import { Helmet } from 'react-helmet'

import './featuredworks.css'

const Featuredworks = (props) => {
  return (
    <div className="featuredworks-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="featuredworks-dummy-container">
        <span className="featuredworks-text">
          <span>Featured works</span>
        </span>
      </div>
    </div>
  )
}

export default Featuredworks
