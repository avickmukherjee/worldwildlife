import React from 'react';
import { Router, Route, IndexRoute, hashHistory,browserHistory  } from 'react-router';
import App from './components/App';
import Home from './components/Home';
import About from './components/About/';
import Faq from './components/Faq/';
import Contact from './components/Contact/';
import SpeciesDetail from './components/Detail/SpeciesDetail';

export default (
 <Router history={browserHistory} >
  <Route path='/' component={App} >
    <IndexRoute component={Home} />
    <Route path='about' component={About} />  
    <Route path='faq' component={Faq} />  
    <Route path='contact' component={Contact} /> 
    <Route path='detail/:id' component={SpeciesDetail} />  
  </Route>
</Router>
);