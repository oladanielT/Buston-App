import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import HeadlineCard from './components/HeadlinesCard';
import Food from './components/Food';

function App() {
  return ( 
    <div className=''>
      <Navbar/>
      <Hero/>
      <HeadlineCard/>
      <Food/>
    </div>
   );
}

export default App;