
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter as Router, Routes, Route, Outlet, BrowserRouter } from 'react-router-dom';
import CommunityPage from './pages/CommunityPage';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { LanguageProvider } from './contexts/languageContext';

function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        // staleTime: 60*1000
        staleTime: 0
      }
    }
  })

  return (
    <LanguageProvider>
    <QueryClientProvider client={queryClient}>
       <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/forum" element={<CommunityPage />} />   
      </Routes>
      <Outlet />
    </BrowserRouter>
    </QueryClientProvider>
    </LanguageProvider>
  )
}

export default App
