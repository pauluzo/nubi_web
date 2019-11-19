import React from 'react';
import {Route, Switch} from 'react-router-dom';
import NotFound from './components/Pages/NotFound';
import Home from './components/Pages/Home';
import Testimonial from './components/Pages/Testimonial';
import News from './components/Pages/News';
import Contact from './components/Pages/Contact';
import App from './App';

function Routes () {
  return (
    <div>
      <App/>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/testimonials' component={Testimonial} />
        <Route path='/news' component={News} />
        <Route path='/contact' component={Contact} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default Routes;