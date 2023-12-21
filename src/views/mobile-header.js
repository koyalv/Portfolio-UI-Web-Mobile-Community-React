import React from 'react'

import { Helmet } from 'react-helmet'

import './mobile-header.css'

const MobileHeader = (props) => {
  return (
    <div className="mobile-header-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="mobile-header-mobile-header">
        <div className="mobile-header-menu">
          <img
            alt="Vector16I138"
            src="/external/vector16i138-bjj.svg"
            className="mobile-header-vector16"
          />
          <img
            alt="Vector17I138"
            src="/external/vector17i138-ls8.svg"
            className="mobile-header-vector17"
          />
          <img
            alt="Vector18I138"
            src="/external/vector18i138-9o2p.svg"
            className="mobile-header-vector18"
          />
        </div>
      </div>
    </div>
  )
}

export default MobileHeader
