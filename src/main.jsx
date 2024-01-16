import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {Route,RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Login from './Components/Login.jsx'
import Profile from './Components/Profile.jsx'
import Layout from './Layout.jsx'
import UserContextProvider from './Context/UserContextProvider.jsx'


const router = new createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
        <Route path='/' element={<Login />} />
        <Route path='/profile' element={<Profile />} /> 
    </Route>
  )
)
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <UserContextProvider>
      <RouterProvider router={router} />
      </UserContextProvider>
  </React.StrictMode>,
)
