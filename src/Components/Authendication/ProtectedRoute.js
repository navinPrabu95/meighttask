import React from 'react'
import { Navigate } from 'react-router'

function ProtectedRoute(props) {

  const isAuthendicated = localStorage.getItem('Items')?true:false
  
  console.log(localStorage.getItem('Items'));

  const component = props.children

  return (
    isAuthendicated?component:<Navigate to='/signin'></Navigate>
  )
}

export default ProtectedRoute