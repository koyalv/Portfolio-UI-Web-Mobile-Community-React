import React from 'react'

import { Helmet } from 'react-helmet'

import './hi-iam-john-creative-technologist.css'

const HiIamJohnCreativeTechnologist = (props) => {
  return (
    <div className="hi-iam-john-creative-technologist-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="hi-iam-john-creative-technologist-dummy-container">
        <span className="hi-iam-john-creative-technologist-text">
          <span>
            <span>Hi, I am John,</span>
            <br></br>
            <span>Creative Technologist</span>
          </span>
        </span>
      </div>
    </div>
  )
}

export default HiIamJohnCreativeTechnologist
