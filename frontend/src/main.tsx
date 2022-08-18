import 'bootstrap/dist/css/bootstrap.css';

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import App from './App';
import Navbar from './components/Navbar';
import Footer from './pages/Footer';
import Home from './pages/Home';
import OverView from './pages/OverView';
import SearchDetail from './pages/SearchDetail';
import Series from './pages/Series';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Navbar />
            <Routes>
                <Route path='/' element={<Home />} />

                <Route path='/movies' element={<App />} />
                <Route path='/series' element={<Series />} />
                <Route path='/overview/:type/:id' element={<OverView />} />
                <Route path='/search/:id' element={<SearchDetail />} />
            </Routes>
            <Footer />
        </BrowserRouter>
    </React.StrictMode>,
);
