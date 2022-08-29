import React from 'react'
import { Route, Redirect } from 'react-router-dom'
import { useUserContext } from '../context/user_context'
// import { useAuth0 } from '@auth0/auth0-react'

const PrivateRoute = ({ children, ...rest }) => {
  const { myUser} = useUserContext()

  // const myUser = localStorage.getItem('user')?JSON.parse(localStorage.getItem('user')):null
  return (
    <Route
      {...rest}
      render={() => {
        return myUser ? children : <Redirect to='/'></Redirect>
      }}
    ></Route>
  )
}
export default PrivateRoute