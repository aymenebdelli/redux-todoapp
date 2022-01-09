import React from 'react'
import { useSelector } from 'react-redux'
import { Route, Redirect } from 'react-router-dom'

const PrivateRoute = ({ component: Component, ...rest }) => {
  const { user } = useSelector((state) => state.user)

  return (
    <Route {...rest}>
      {user ? <Component /> : <Redirect  to="/auth/login" />}
    </Route>
  )
}

export default PrivateRoute