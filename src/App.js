import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {Redirect, Route, Switch} from 'react-router-dom'

import Auth from './components/Pages/auth/Auth';
import Home from './components/Pages/home/Home';
import { auth } from './redux/actions/user';
import socket from './socket/socket';

import './styles/index.scss';

function App() {

  const dispatch = useDispatch()
  const {isAuth} = useSelector(state => state.user)


  React.useEffect(() => {
    dispatch(auth())
    socket.emit('TEST', 'TEST')
    socket.on('FETCH_DIALOGS', (data) => console.log(data))
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
            <Route exact path="/home" render={() => <Home/>} />
            <Redirect to = '/home'/>
          </Switch>
      }     
    </div>
  );
}

export default App;