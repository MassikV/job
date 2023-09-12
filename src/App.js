import './App.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./Site/components/Header";
import Footer from "./Site/components/Footer"
import PopUp from "./Site/components/PopUp";
import Main from './Site/pages/Main'
import MoreOurProjects from './Site/pages/MoreOurProjects'
import PhonePopUp from "./Site/components/PhonePopUp";
function App() {
  // const { language, toggleLanguage, theme, toggleTheme } = useGlobalContext();
  // <div className="theme-toggle" onClick={toggleTheme}>
  //   {theme === 'light' ? '🌞' : '🌙'}
  // </div>
  // <div className="language" onClick={toggleLanguage}>
  //   {language === 'ua' ? 'ua' : 'eng'}
  // </div>
  return (
      <Router>
        <Routes>
        <Header />
        <PhonePopUp/>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/projects" element={<MoreOurProjects />} />
          </Routes>
        <PopUp/>
          <Footer />
        </Routes>
        </Router>
  );
}


export default App;
