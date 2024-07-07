import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import PhotoGallery from './components/PhotoGallery/PhotoGallery';
import MemeGallery from './components/MemeGallery/MemeGallery';
import Messages from './components/Messages/Messages';
import About from './components/About/About';
import './App.css';

function App() {
    return (
        <Router basename={process.env.PUBLIC_URL}>
            <div className="App">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/gallery" element={<PhotoGallery />} />
                    <Route path="/memes" element={<MemeGallery />} />
                    <Route path="/messages" element={<Messages />} />
                    <Route path="/about" element={<About />} />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
