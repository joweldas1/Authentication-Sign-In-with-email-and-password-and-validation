import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Router, RouterProvider, createBrowserRouter } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout.jsx'
import Home from './Home/Home.jsx'
import Login from './Login/Login.jsx'
import Register from './Register/Register.jsx'
import HeroRegister from './HeroRegister/HeroRegister.jsx'





const router=createBrowserRouter([
  {
    path:'/',
    element: <MainLayout></MainLayout>,
    children:[
      {
        path:'/',
        element:<Home></Home>
      },
      {
        path:'/login',
        element:<Login></Login>
      },
      {
        path:'/register',
        element:<Register></Register>
      },
      {
        path:'/heroRegister',
        element:<HeroRegister></HeroRegister>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
