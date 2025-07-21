import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import {createBrowserRouter , RouterProvider} from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import UploadCard from './UploadCard.jsx'
import Sidebar from './Sidebar.jsx'
import Player from './Player.jsx'
import Scoutmar from './Scoutmar.jsx'
import Signup from './Signup.jsx'
import PlayerList from './Playerlist.jsx'
import Login from './Login.jsx'
import PlayerInfo from './PlayerInfo.jsx'
import Register from './Register.jsx'
import ContactUs from './ContactUs.jsx'

const router=createBrowserRouter([
  {
    path: '/',
    element: <App/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path:"/register",
    element:<Register/>
  },
  {
    path: '/signup',
    element: <Signup/>
  },
  {
    path:"/Playerlist",
    element:<PlayerList/>
  },
  {
    path:"/Scoutmar",
    element:<Scoutmar/>
  },
  {
    path:"/player",
    element:<Player/>
  },
  {
    path:"/PlayerInfo",
    element:<PlayerInfo/>
  },
  {
    path:"/ContactUs",
    element:<ContactUs/>
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
