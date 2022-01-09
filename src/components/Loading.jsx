import React from 'react'
import { Helmet } from 'react-helmet'
import Spinner from './Spinner'

const Loading = () => {
  return (
    <div>
      <Helmet>
        <title>Loading... | Task Manager</title>
      </Helmet>
      <div className="loading">
        <Spinner />
      </div>
    </div>
  )
}

export default Loading