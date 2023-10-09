import './App.css';
import Nav from './components/Nav.js'
import HeroSection from './components/HeroSection';
import Partners from './components/Partners';
import Highlight from './components/Highlight';
import Testimonials from './components/Testimonials';
import Faq from './components/FAQ';
import Form from './components/Form';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Nav/>
    <main>
      <HeroSection/>
      <Partners/>
      <Highlight/>
      <Testimonials/>
      <Faq/>
      <Form/>
    </main>
    <Footer/>
    </>
  );
}

export default App;
