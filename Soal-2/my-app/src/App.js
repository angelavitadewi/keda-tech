import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/reset.css';
import './App.css';
import NavHeader from './component/Nav';
import wave1 from './asset/wave1.png';
import wave2 from './asset/wave2.png';
import Home from './component/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from './component/About';
import Pricing from './component/Pricing';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <BrowserRouter>
        <img alt='wave1' src={wave1} className='wavehead' />
        <NavHeader />
        <Routes>
          <Route path='/'>
            <Route index element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/contact' element={<Contact />} />
          </Route>
        </Routes>
        <div className='footer'>
          <img alt='wave2' src={wave2} />
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
