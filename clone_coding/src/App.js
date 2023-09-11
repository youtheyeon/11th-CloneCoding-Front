import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

//pages
import MainPage from './pages/MainPage';
import DetailPage from './pages/DetailPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인페이지 */}
        <Route path='/' element={<MainPage />} />
        {/* 상세페이지 */}
        <Route path='/articles/:id' element={<DetailPage />} />
      </Routes>
    </Router>
  );
}

export default App;
