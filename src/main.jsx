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
import Details from './pages/Details/Details.jsx'
import { Toaster } from 'react-hot-toast';
import Checkout from './Components/Checkout/Checkout.jsx'


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
        element: <Service></Service>,
        loader: () => fetch('darkweb.json'),
      },
      {
        path: '/data/:id',
        element: <Details></Details>,
        // loader: ( { params })=> fetch(`/public/darkweb.json/${params.id}`),
        loader: async ({ params }) => {
          const response = await fetch('/public/darkweb.json');
          const data = await response.json();
          return data.find(item => item.id == params.id)
        },
      },
      {
        path: '/bookmarks',
        element: <Bookmarks></Bookmarks>
      },
      {
        path: '/about',
        element: <About></About>
      },
      {
        path: "/checkout",
        element: <Checkout/>

      },
    ]
  },

])


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <Toaster />
  </StrictMode>,
)
