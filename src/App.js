import './App.css';
import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import News from './components/News';
import LoadingBar from 'react-top-loading-bar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => {
  const apiKey = process.env.REACT_APP_NEWS_API_KEY;
  const [progress, setProgress] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const pageSize = 9;

  useEffect(() => {
    document.body.classList.toggle('dark-mode', darkMode);
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(prev => !prev);

  return (
    <Router>
      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <LoadingBar color="#E11D48" height={3} progress={progress} />
      <Routes>
        <Route path="/"             element={<News setProgress={setProgress} apiKey={apiKey} key="general"       pageSize={pageSize} country="us" category="general"       />} />
        <Route path="/business"     element={<News setProgress={setProgress} apiKey={apiKey} key="business"     pageSize={pageSize} country="us" category="business"     />} />
        <Route path="/entertainment"element={<News setProgress={setProgress} apiKey={apiKey} key="entertainment" pageSize={pageSize} country="us" category="entertainment" />} />
        <Route path="/health"       element={<News setProgress={setProgress} apiKey={apiKey} key="health"       pageSize={pageSize} country="us" category="health"       />} />
        <Route path="/science"      element={<News setProgress={setProgress} apiKey={apiKey} key="science"      pageSize={pageSize} country="us" category="science"      />} />
        <Route path="/sports"       element={<News setProgress={setProgress} apiKey={apiKey} key="sports"       pageSize={pageSize} country="us" category="sports"       />} />
        <Route path="/technology"   element={<News setProgress={setProgress} apiKey={apiKey} key="technology"   pageSize={pageSize} country="us" category="technology"   />} />
      </Routes>
    </Router>
  );
};

export default App;
