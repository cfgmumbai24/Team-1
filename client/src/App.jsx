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

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/forum" element={<CommunityPage />} />   
      </Routes>
      <Outlet />
      <Footer />
    </Router>
    </>
  )
}

export default App
