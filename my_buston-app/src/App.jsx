import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCard from './components/HeadlinesCard';
import Food from './components/Food';
import Categories from './components/categories';
import Footer from './components/Footer';
import { CartProvider } from './data/CartContext';

function App() {
  return ( 
    
      <div className='App'>
        <Navbar/>
        <Hero/>
        <HeadlineCard/>
        <Food/>
        <Categories/>
        <Footer/>
      </div>

  
   );
}

export default App;