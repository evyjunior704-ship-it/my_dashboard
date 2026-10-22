import React, { useState, useEffect } from 'react';
import EditorialBackdrop from './components/EditorialBackdrop';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import { profileData } from './data/profileData';
import './App.css';

const VALID_TABS = ['about', 'projects', 'skills', 'education', 'contact'];

export function App() {
  const getInitialTab = () => {
    if (typeof window !== 'undefined' && window.location.hash) {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_TABS.includes(hash)) {
        return hash;
      }
    }
    return 'about';
  };

  const [activeTab, setActiveTab] = useState(getInitialTab);

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '').toLowerCase();
      if (VALID_TABS.includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleTabChange = (tabId) => {
    if (!VALID_TABS.includes(tabId)) return;
    setActiveTab(tabId);
    if (typeof window !== 'undefined') {
      window.history.pushState(null, '', `#${tabId}`);
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <div className="portfolio-app-root">
      {/* Restrained Vector Ambient Prismatic Backdrop */}
      <EditorialBackdrop />

      {/* Segmented Liquid-Glass Navigation Tab Bar */}
      <Navbar 
        identity={profileData.identity} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />

      {/* Main Tabbed Content Container (Expands to wide viewport on About, Projects, Skills & Education tabs) */}
      <main className={`portfolio-container ${['about', 'projects', 'skills', 'education'].includes(activeTab) ? 'wide-viewport' : ''}`} id="main-content">
        {/* Tab 1: About (Hero Introduction & Perspective) */}
        {activeTab === 'about' && (
          <div 
            key="panel-about" 
            role="tabpanel" 
            id="panel-about" 
            aria-labelledby="tab-btn-about"
            className="tab-content-panel tab-about"
          >
            <Hero identity={profileData.identity} onTabChange={handleTabChange} />
            <About />
          </div>
        )}

        {/* Tab 2: Engineered Systems Case Studies */}
        {activeTab === 'projects' && (
          <div 
            key="panel-projects" 
            role="tabpanel" 
            id="panel-projects" 
            aria-labelledby="tab-btn-projects"
            className="tab-content-panel tab-standalone"
          >
            <Projects projects={profileData.projects} />
          </div>
        )}

        {/* Tab 3: Verified Technical Capabilities */}
        {activeTab === 'skills' && (
          <div 
            key="panel-skills" 
            role="tabpanel" 
            id="panel-skills" 
            aria-labelledby="tab-btn-skills"
            className="tab-content-panel tab-standalone"
          >
            <Skills skills={profileData.skills} />
          </div>
        )}

        {/* Tab 4: Academic Foundation, Coursework & Direction */}
        {activeTab === 'education' && (
          <div 
            key="panel-education" 
            role="tabpanel" 
            id="panel-education" 
            aria-labelledby="tab-btn-education"
            className="tab-content-panel tab-standalone"
          >
            <Education education={profileData.education} />
          </div>
        )}

        {/* Tab 5: Professional Contact */}
        {activeTab === 'contact' && (
          <div 
            key="panel-contact" 
            role="tabpanel" 
            id="panel-contact" 
            aria-labelledby="tab-btn-contact"
            className="tab-content-panel tab-standalone"
          >
            <Contact identity={profileData.identity} />
          </div>
        )}
      </main>

      {/* Architectural Footer with Quick Tab Links */}
      <Footer 
        identity={profileData.identity} 
        activeTab={activeTab} 
        onTabChange={handleTabChange} 
      />
    </div>
  );
}

export default App;
