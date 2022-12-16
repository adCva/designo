import './App.css';
import './Scss/style.css';
import Main from "./Pages/Main";
import Company from "./Pages/Company";
import Locations from "./Pages/Locations";
import Contact from "./Pages/Contact";
import { BrowserRouter, Routes, Route}  from 'react-router-dom';


function App() {
  return (
    <BrowserRouter basename={window.location.pathname || ''} className="App">
      <Routes>
        <Route exact path="/" element={<Main />}/>
        <Route path="/company" element={<Company />}/>
        <Route path="/locations" element={<Locations />}/>
        <Route path="/contact" element={<Contact />}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;