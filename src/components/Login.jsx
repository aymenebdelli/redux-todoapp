import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import { loginUser } from '../Redux/Actions/usersActions'
import { SignInSchema } from '../Redux/utulities/schemas/SignUpSchema'
import SocialButtons from '../components/SocialButtons'
import { Toaster } from 'react-hot-toast'
import { useSelector } from 'react-redux'

const Login = () => {
  const { isLoading } = useSelector(({ user }) => user)
  const dispatch = useDispatch()
  const history = useHistory()

  const handleSubmit = ({ email, password }) => {
    dispatch(
      loginUser({
        email,
        password,
      })
    )
      .then(() => history.replace('/'))
      .catch(() => console.log(''))
  }

  return (
    <>
      <Helmet>
        <title>Login | Task Manager</title>
      </Helmet>
      <Toaster />
      <div className="container">
        <div className="login__wrapper">
          <h1>Login</h1>
          <Formik
            initialValues={{ email: '', password: '', remember: false }}
            onSubmit={handleSubmit}
            validationSchema={SignInSchema}
          >
            <Form action="">
              <div className="input-control">
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="input-control__error"
                />
              </div>
              <div className="input-control">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <ErrorMessage
                  name="password"
                  component="p"
                  className="input-control__error"
                />
              </div>
              <div className="login__options">
                <label htmlFor="remember">
                  <Field type="checkbox" name="remember" id="remember" />
                  Remember Me
                </label>
                <Link to="/">Forgot password ?</Link>
              </div>

              <button
                className="btn-primary btn-login"
                type="submit"
                disabled={isLoading}
              >
                Login
              </button>
            </Form>
          </Formik>
          <div className="login__hr">
            <span></span>
            <p>or sign in with</p>
            <span></span>
          </div>
          <SocialButtons />
          <div className="login__caption">
            <Link to="/auth/sign-up" className="login__caption">
              Don't have an account ?
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login