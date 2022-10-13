import React, { Component } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from '../components/Footer';
import Nav from '../components/Nav';
import About from '../pages/About';
import Contact from '../pages/Contact';
import Home from '../pages/Home';
import NotFoundPage from '../pages/NotFoundPage';
import Pages from '../pages/Pages';
import Services from '../pages/Services';



class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
      <Nav />
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/pages' element={<Pages/>}></Route>
        <Route path='*' element={<NotFoundPage/>}></Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    )
  }
}

export default AppRouter;