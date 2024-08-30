import React from 'react';
import './index.css'; // Ensure this CSS file is imported
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Anal from './components/Anal';
import Newsletter from './components/Newsletter'
import Cards from './components/Cards'
import Footer from './components/Footer'

function App() {
  return (
    <div>
 <Navbar /> 
<Hero />
<Anal />  
<Newsletter />
<Cards />
<Footer />

    </div>
  );
}

export default App;


