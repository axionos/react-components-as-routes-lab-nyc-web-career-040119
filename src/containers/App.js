import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from '../components/NavBar';
import Home from '../components/Home';
import Actors from '../components/Actors';
import Directors from '../components/Directors';
import Movies from '../components/Movies';


const App = (props) => {
  return (
    <Router>
      <React.Fragment>
        <NavBar />
        <Route path="/" component={Home} />
        <Route path="/actors" component={Actors} />
        <Route path="/directors" component={Directors} />
        <Route path="/movies" component={Movies} />
      </React.Fragment>
    </Router>
  );
};

export default App
