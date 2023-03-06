import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './Sidebar';
import Home from './pages/Home.js';
import Explore from './pages/Explore.js';
import MyOrders from './pages/MyOrders.js';
import Profile from './pages/Profile.js';
import SignUp from './pages/SignUp.js';
import Message from './pages/Message.js';

// import ProductList from './pages/ProductList.js';
// import Navbar from '../../component/Navbar';


const Nav = () => {

  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Sidebar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/myorders" element={<MyOrders />} />
          <Route path="/message" element={<Message />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/productlist" element={<ProductList />} /> */}
        </Routes>
      </Sidebar>
    </BrowserRouter>
  );
};

export default Nav;
