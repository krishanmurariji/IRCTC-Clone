import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
import PNRStatus from './components/PNRStatus';
import TrainList from './components/TrainList';
import TrainSearch from './components/TrainSearch';

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/pnr-status" element={<PNRStatus />} />
            <Route path="/trains" element={<TrainList />} />
            <Route path="/book" element={<TrainSearch />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
