import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Service from './pages/Service/Service.jsx'
import Bookmarks from './pages/Bookmarks/Bookmarks.jsx'
import About from './pages/About/About.jsx'
import MainLayouts from './Components/Layouts/MainLayouts.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayouts></MainLayouts>,
    children: [
      {
        path: '/',
        element: <Home></Home>
      },
      {
        path: '/service',
        element: <Service></Service>
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      },
      {
        path: '/about',
        element: <About></About>
      },
    ]
  },
 
])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router = {router} />
  </StrictMode>,
)
