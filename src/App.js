import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom'

import Auth from './components/Pages/auth/Auth';
import Home from './components/Pages/home/Home';
import { auth } from './redux/actions/user';


import './styles/index.scss';

function App() {

  const dispatch = useDispatch()
  const {isAuth} = useSelector(state => state.user)


  React.useEffect(() => {
    dispatch(auth())
  },[])

  return (
    <div className="App">
      {
        !isAuth ? 
          <Switch>
            <Route exact path={["/", "/login", "/register"]} component={Auth} />
            <Redirect to = '/'/>
          </Switch>
          :
          <Switch>
            <Route exact path="/home" component={Home} />
            <Redirect to = '/home'/>
          </Switch>
      }     
    </div>
  );
}

export default App;