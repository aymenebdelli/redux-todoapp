import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PublicRoute = ({ component: Component, ...rest }) => {
  const user = useSelector(({ user }) => user.user)
  return <Route {...rest}>{!user ? <Component /> : <Redirect to="/" />}</Route>
}

export default PublicRoute