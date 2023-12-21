import React from 'react'

import { Helmet } from 'react-helmet'

import './worklistmobile.css'

const Worklistmobile = (props) => {
  return (
    <div className="worklistmobile-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="worklistmobile-worklistmobile">
        <img
          alt="Rectangle30I138"
          src="/external/rectangle30i138-q6u-300h.png"
          className="worklistmobile-rectangle30"
        />
        <span className="worklistmobile-text">
          <span>Designing Dashboards</span>
        </span>
        <span className="worklistmobile-text2">
          <span>Dashboard</span>
        </span>
        <div className="worklistmobile-group2">
          <span className="worklistmobile-text4">
            <span>2020</span>
          </span>
        </div>
        <span className="worklistmobile-text6">
          <span>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit. Exercitation
            veniam consequat sunt nostrud amet.
          </span>
        </span>
        <img
          alt="Vector8I138"
          src="/external/vector8i138-6l9x.svg"
          className="worklistmobile-vector8"
        />
      </div>
    </div>
  )
}

export default Worklistmobile
