import React from 'react';
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Chat from './pages/Chat';
import SetAvatar from './pages/SetAvatar';
import Home from './pages/Home';

export default function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/setAvatar' element={<SetAvatar/>} />
      <Route path='/chat' element={<Chat/>} />
      <Route path='/' element={<Home />} />
    </Routes>
  </BrowserRouter>
  );
}
