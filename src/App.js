import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Clients from './components/Clients';
import Comunity from './components/Comunity';
import DesignStudio from './components/DesignStudio';
import Achievements from './components/Achievements';
import Footer from './components/Footer';

export default function App() {
    return (
        <div>
            <Navbar />
            <Hero />
            <Clients />
            <Comunity />
            <DesignStudio />
            <Achievements />
            <Footer />
        </div>
    );
}
