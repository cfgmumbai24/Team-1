import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AppLayout from './Layout/AppLayout';
import Home from './pages/Home';
// import Syllabus from './pages/Syllabus';
import { DarkModeProvider } from './contexts/DarkModeContext';

function App() {
  return (
    <DarkModeProvider>
      <BrowserRouter>
      <Routes>
        <Route  element={<AppLayout />}>
          <Route index element={<Home />} />
          {/* <Route path="/syllabus" element={<Syllabus />} /> */}
        </Route>
      </Routes>
    </BrowserRouter>
    </DarkModeProvider>
  );
}

export default App;