import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from './home';
import About from './about';
import Itstaffing from './itstaffing';
import Services from './services';
import Clients from './clients';
import Careers from './careers';
import Contact from './contact';

const Main = () => {
  return (
    <Routes> {/* The Switch decides which component to show based on the current URL.*/}
      <Route path='./home' component={Home}></Route>
      <Route path='./about' component={About}></Route>
      <Route path='./itstaffing' component={Itstaffing}></Route>
      <Route path='./services' component={Services}></Route>
      <Route exact path='./clients' component={Clients}></Route>
      <Route exact path='./careers' component={Careers}></Route>
      <Route exact path='./contact' component={Contact}></Route>
    </Routes>
  );
}

export default Main;