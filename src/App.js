import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

import './App.css';
import Navbar from './components/Navbar';
import Page404 from './components/Page404';
import UserComponent from './components/UserComponent';
import Filter from './components/Filter';
import Contact from './components/Nested Routing/Contact';
import Company from './components/Nested Routing/Company';
import Channel from './components/Nested Routing/Channel';
import Other from './components/Nested Routing/Other';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/user' element={<UserComponent />} />
          <Route path='/user/:name' element={<UserComponent />} />
          <Route path='/filter' element={<Filter />} />
          {/* Nested Routing */}
          <Route path='/contact' element={<Contact />}>
            <Route path='company' element={<Company />} />
            <Route path="channel" element={<Channel />} />
            <Route path='other' element={<Other />} />
          </Route>
          <Route path='/*' element={<Navigate to='/' />} />
          {/* <Route path='/*' element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
