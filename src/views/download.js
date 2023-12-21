import React from 'react'

import { Helmet } from 'react-helmet'

import './download.css'

const Download = (props) => {
  return (
    <div className="download-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="download-download">
        <span className="download-text">
          <span>Download Resume</span>
        </span>
      </div>
    </div>
  )
}

export default Download
