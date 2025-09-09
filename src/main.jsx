import { StrictMode, lazy, Suspense } from 'react'
import { createRoot } from 'react-dom/client'
import {createBrowserRouter, createRoutesFromElements, Route, RouterProvider, Link, NavLink } from 'react-router-dom'
import './index.css'
import App from './App.jsx'
import Layout from './Layout.jsx'
import Loading from './components/Loading.jsx'
import ErrorPage from './components/ErrorPage.jsx'

const Home = lazy(() => import('./pages/Home.jsx'))
const Shop = lazy(() => import('./pages/Shop.jsx'))
const Blog = lazy(() => import('./pages/Blog.jsx'))
const Contact = lazy(() => import('./pages/Contact.jsx'))
const About = lazy(() => import('./pages/About.jsx'))
const FAQs = lazy(() => import('./pages/FAQs.jsx'))
const ShippingPolicy = lazy(() => import('./pages/ShippingPolicy.jsx'))
const ReturnAndRefund = lazy(() => import('./pages/ReturnAndRefund.jsx'))



const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='shop' element={<Shop />} />
        <Route path='blogs' element={<Blog />} />
        <Route path='contact' element={<Contact />} />
        <Route path='about' element={<About />} />
        <Route path='faq' element={<FAQs />} />
        <Route path='shipping' element={<ShippingPolicy />} />
        <Route path='returns' element={<ReturnAndRefund />} />
      </Route>

      <Route path='*' elements={<ErrorPage />} />
    </>
  )
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>,
)
