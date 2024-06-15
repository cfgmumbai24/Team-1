import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Outlet } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import GovSchemes from './pages/GovSchemes';

function App() {
  

  return (
    <>
       <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/community" element={<CommunityPage />} />
        <Route path="/gov-schemes" element={<GovSchemes />} />
        <Route path="/gov-schemes/:id" component={SchemeDetails} />
      </Routes>
      <Outlet />
      <Footer />
    </Router>
    </>
  )
}

export default App
