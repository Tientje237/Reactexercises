import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import NoPage from './pages/NoPage';
import Navigation from './Pages/Navigation';

function App() {

  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navigation />}>
            <Route index element={<Home />}/>
            <Route path="/home" element={<Home />}/>
            <Route path="/about" element={<About />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="*" element={<NoPage />}/>
          </Route>
        </Routes>
      </BrowserRouter>
      </div>
  )
}

export default App



