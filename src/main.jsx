import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './assets/template/Header'
import Footer from './assets/template/Footer'
import { Button } from 'react-bootstrap'
import Home from './pages/home'
import SobreMim from './pages/Sobremim'
import Contato from './pages/Contato'
import './custom.css';

import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "sobremim",
    element: <SobreMim/>
  },
  {
    path: "contato",
    element : <Contato/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <Header />
   <RouterProvider router={router}/>
   <Footer />
  </StrictMode>,
)
