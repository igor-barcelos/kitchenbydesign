import logo from './logo.svg';
import './App.css';
import TopBar from './Components/TopBar/TopBar';
import NavBar from './Components/NavBar/NavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import AboutUs from './Views/AboutUs/AboutUs';
import Home from './Views/Home/Home';


function App() {
  return (
    <div className="App">
      {/* <TopBar/> */}
      <Router> 
        <NavBar/>
        <Routes> 
          <Route exact path='/' Component={Home} /> 
          <Route exact path='/about' Component={AboutUs}/> 
        </Routes> 
      </Router> 
    </div>
  );
}

export default App;
