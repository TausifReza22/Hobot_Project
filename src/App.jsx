
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import NavReact from './components/Navbar/NavReact'; 
import Home from './components/Home/Home';
import Ready from './components/Ready/Ready';
import Youtube from './components/Youtube/Youtube';
import Work from './components/Work/Work';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <>
      <NavReact /> 
      <Home/>
      <Ready/>
      <Youtube/>
      <Work/>
      <Footer/>
    </>
  );
}

export default App;
