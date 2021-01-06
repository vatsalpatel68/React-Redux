import React from 'react';
import './App.css';

/*
import CakeContainer from './components/cakeContainer';
import CakeHooks from './components/cakeHooks';
import IceCreamContainer from './components/iceCreamContainer';
*/

import UserContainer from './components/userContainer';
import { Provider } from 'react-redux';
import store from "./redux/store";

function App() {
  return (
    <Provider store = { store }>
    <div className="App">
      {
        /*
      <CakeContainer />
      <CakeHooks />
      <IceCreamContainer />
        */
    }
     <UserContainer />
   </div>
    </Provider>
  );
}

export default App;
