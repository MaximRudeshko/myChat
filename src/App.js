import React from 'react';
import Auth from './components/Pages/auth/Auth';
import './styles/index.scss';
import {Route} from 'react-router-dom'
import Home from './components/Pages/home/Home'

function App() {
  return (
    <div className="App">
        <Auth/>
        <Route path = '/home' component = {Home}/>
    </div>
  );
}

export default App;