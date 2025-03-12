import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import TrainSearch from './components/TrainSearch';
import PNRStatus from './components/PNRStatus';
import TrainList from './components/TrainList'; // Ensure this is correctly imported
import ImageSlider from "./components/ImageSlider"; // Correct path
function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-100">
        <Header />
        <main className="container mx-auto py-8">
           <ImageSlider />
          <Routes>
            <Route path="/" element={<TrainSearch />} />
            
            <Route path="/pnr-status" element={<PNRStatus />} />
            <Route path="/trains" element={<TrainList />} />
          </Routes>
        </main>
        
      </div>
    </Router>
  );
}

export default App;