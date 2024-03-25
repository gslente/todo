import React from 'react'
import ReactDOM from 'react-dom/client'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Error from './pages/Error.jsx'
import Login from './pages/Login.jsx'
import Register from './pages/Register.jsx'

import App from './pages/App.jsx'

import './css/index.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <Error />
  },
  {
    path: '/user/login',
    element: <Login />,
  },
  {
    path: '/user/register',
    element: <Register />
  },

  {
    /* FOR TESTING */
    path: '/app',
    element: <App />,
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,
)
