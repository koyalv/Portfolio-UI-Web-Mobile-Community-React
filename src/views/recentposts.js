import React from 'react'

import { Helmet } from 'react-helmet'

import './recentposts.css'

const Recentposts = (props) => {
  return (
    <div className="recentposts-container">
      <Helmet>
        <title>exported project</title>
      </Helmet>
      <div className="recentposts-dummy-container">
        <span className="recentposts-text">
          <span>Recent posts</span>
        </span>
      </div>
    </div>
  )
}

export default Recentposts
