import { ErrorMessage, Field, Form, Formik } from 'formik'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useDispatch } from 'react-redux'
import { Link, useHistory} from 'react-router-dom'
import { registerRequest } from '../Redux/Actions/usersActions'
import SignUpSchema from '../Redux/utulities/schemas/SignUpSchema'
import SocialButtons from '../components/SocialButtons'

const Register = () => {
  const history = useHistory()
  const dispatch = useDispatch()
  const initialValues = {
    name: '',
    email: '',
    password: '',
  }
  const handleSubmit = (values) => {
    dispatch(registerRequest(values))
      .then(() => history.replace('/'))
      .catch(() => {})
  }
  return (
    <>
      <Helmet>
        <title>Register | Task Manager</title>
      </Helmet>
      <div className="container">
        <div className="wrapper">
          <h1>Sign Up</h1>
          <Formik
            initialValues={initialValues}
            validationSchema={SignUpSchema}
            onSubmit={handleSubmit}
          >
            <Form>
              <div className="input-control">
                <label htmlFor="name">Name</label>
                <Field
                  type="text"
                  name="name"
                  placeholder="John Doe"
                  autoComplete="off"
                />
                <ErrorMessage
                  name="name"
                  component="p"
                  className="input-control__error"
                />
              </div>
              <div className="input-control">
                <label htmlFor="email">Email</label>
                <Field
                  type="email"
                  name="email"
                  placeholder="johndoe@example.com"
                />
                <ErrorMessage
                  name="email"
                  component="p"
                  className="input-control__error"
                />
              </div>
              <div className="input-control">
                <label htmlFor="password">Password</label>
                <Field type="password" name="password" />
                <p className="input-control__caption">At least 8 characters</p>
                <ErrorMessage
                  name="password"
                  component="p"
                  className="input-control__error"
                />
              </div>
              <button className="btn btn-primary w-full" type="submit">
                Sign up
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
            <Link to="/auth/login" className="login__caption">
              Already have an account?
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Register