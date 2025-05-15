import { Route, Routes } from 'react-router-dom'
import './App.css'

import Welcome from './pages/Welcome'
import Home from './pages/Home'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import Tasveer from './pages/Tasveer'
import Couple from './pages/Couple'
import Ghaatha from './pages/Ghaatha'
import BlogList from './pages/Blogs'
import BlogDetails from './pages/BlogDetails'
import UserLayout from './layout/UserLayout'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route element={<UserLayout />}>
          <Route path='/hov' element={<Home />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/contactus' element={<ContactUs />} />
          <Route path='/tasveers' element={<Tasveer />} />
          <Route path='/tasveers/couple' element={<Couple />} />
          <Route path='/gaathas' element={<Ghaatha />} />
          <Route path='/blogs' element={<BlogList />} />
          <Route path='/blogs/:id' element={<BlogDetails />} />
        </Route>
      </Routes>
    </>
  )
}

export default App
