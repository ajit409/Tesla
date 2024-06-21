import logo from './logo.svg';
import './App.css';
import Home from './component/Home';
import Header from './component/Header/Header';
import AOS from 'aos';
import 'aos/dist/aos.css';
import React from 'react';
import Footer from './component/Footer/Footer';

function App() {
  React.useEffect(()=>{
    AOS.init({duration:2000})
  })
  return (
    <div className="App">
   <Header/>
   < Home/>
   <Footer/>

   
   
   
    </div>
  );
}

export default App;
