import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AnimeNavbar from './Components/AnimeNavbar';
import AnimeHome from './Components/AnimeHome';
import AnimePopular from './Components/AnimePopular';

function App() {
  return (
    <Router>
      <AnimeNavbar />
      <Routes>
        <Route path="/" element={<AnimeHome />} />
        <Route path="/popular" element={<AnimePopular />} />
      </Routes>
    </Router>
  );
}

export default App;
