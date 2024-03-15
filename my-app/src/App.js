import React from 'react';
import Home from './page/home/Home.jsx'; // or './components/navbar.jsx'
import Navbar from './components/navbar/navbar.jsx';
import Footer from './components/footer/footer.jsx';
import Slider from './components/slider/slider.jsx';

function App() {
  return (
    <div>
      <Navbar />
      {/* <Slider /> */}
      <Home></Home>
      <Footer/>
    </div>
  );
}

export default App;