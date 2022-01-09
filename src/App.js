import React, { Suspense, useEffect, useState } from 'react'
import './App.css';
import FormTodo from './components/FormTodo';
import Header from './components/Header';
import TaskList from './components/TaskList';
import { BrowserRouter as Router, Switch } from 'react-router-dom'
import { Toaster } from 'react-hot-toast'
import PrivateRoute from './hoc/PrivateRoute'
import PublicRoute from './hoc/PublicRoute'
import Loading from './components/Loading'
import User from './components/User'
import { authUser } from './Redux/Actions/usersActions'
import { useDispatch, useSelector } from 'react-redux'

const EditTask = React.lazy(() => import('./components/EditTask'))
const Login = React.lazy(() => import('./components/Login'))
const Register = React.lazy(() => import('./components/Register'))

function App() {

  const { user } = useSelector(({ user }) => user)
  const [isChecking, setIsChecking] = useState(true)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!user && window.localStorage.getItem('token')) {
      dispatch(authUser()).then(() => setIsChecking(false))
    } else {
      setIsChecking(false)
    }
  }, [user, dispatch])

  if (isChecking) {
    return <Loading />
  }

  return (
    <Router>
      <div className="App">
        <Toaster toastOptions={{ duration: 4000 }} />
        <Suspense fallback={<Loading />}>
          <Switch>
            <PrivateRoute exact path="/">
              <Header />
              <FormTodo />
              <TaskList />
              <User />
            </PrivateRoute>
            <PrivateRoute exact path="/edit/:id" component={EditTask} />
            <PublicRoute path="/auth/login" component={Login} />
            <PublicRoute path="/auth/sign-up" component={Register} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
