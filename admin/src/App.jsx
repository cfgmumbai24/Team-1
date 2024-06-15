import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import Home from './pages/Home';
// import Syllabus from './pages/Syllabus';
import { DarkModeProvider } from './contexts/DarkModeContext';
import AddVideo from './features/dashboard/AddVideo';
import VideoList from './features/dashboard/VideoList';
import  {Toaster } from 'react-hot-toast';

function App() {
  return (
    
    <DarkModeProvider>
      <BrowserRouter>
      <Toaster/>
      <Routes>
        <Route  element={<AppLayout />}>
          <Route index element={<Home />} />
          <Route path="/upload" element={<AddVideo />} />
          <Route path="/delete" element={<VideoList />} />
          {/* <Route path="/syllabus" element={<Syllabus />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;