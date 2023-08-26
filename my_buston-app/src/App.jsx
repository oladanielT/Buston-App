import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCard from './components/HeadlinesCard';
import Food from './components/Food';
import Categories from './components/categories';

function App() {
  return ( 
    <div className=''>
      <Navbar/>
      <Hero/>
      <HeadlineCard/>
      <Food/>
      <Categories/>
    </div>
   );
}

export default App;