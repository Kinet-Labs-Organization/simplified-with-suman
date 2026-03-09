import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Layout from './Layout';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import AllEpisodes from './AllEpisodes';
import AllResources from './AllResources';
import { PrivacyPolicy, TermsOfUse, Disclaimer, CookiePolicy } from './LegalPages';

function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/all-episodes" element={<AllEpisodes />} />
          <Route path="/all-resources" element={<AllResources />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/cookie-policy" element={<CookiePolicy />} />
        </Routes>
        <Footer />
      </Layout>
    </Router>
  );
}

export default App;