import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';

//pages
import MainPage from './pages/MainPage';

function App() {
  return (
    <Router>
      <Routes>
        {/* 메인페이지 */}
        <Route path='/' element={<MainPage />} />
      </Routes>
    </Router>
  );
}

export default App;
