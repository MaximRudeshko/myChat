import React from 'react';
import {Route} from 'react-router-dom'

import Auth from './components/Pages/auth/Auth';
import Home from './components/Pages/home/Home';


import './styles/index.scss';


function App() {



  return (
    <div className="App">
        <Route exact path={["/", "/login", "/register"]} component={Auth} />
        <Route exact path="/home" render={() => <Home/>} />
    </div>
  );
}

export default App;