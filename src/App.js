import Hero from "./components/Hero";
import { useEffect } from "react";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Aos from 'aos';
import 'aos/dist/aos.css'
import Connect from "./components/Connect";
import RecentWorks from "./components/RecentWorks";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {

  useEffect(()=>{
    Aos.init({duration: 1000});
  },[]);

  return (
    <div className="App">
      <Hero />
      <Connect />
      <RecentWorks />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
