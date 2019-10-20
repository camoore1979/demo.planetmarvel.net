import React, { useReducer } from 'react';
import log from 'loglevel';

import AppContext from './AppContext';

const initialState = {
  isLoggedIn: false,
  message: 'hello world'
};

export default function AppReducer(props) {
  const [state, dispatch] = useReducer((state, action) => {
    log.debug(`AppReducer() - dispatching action of type ${action.type}: `, action);
    switch (action.type) {
      case 'SAY_HELLO':
        return { ...state, message: 'parlez vouse' };
      case 'LOGIN': {
        const { username, password } = action;
        const isLoggedIn = username === 'bwayne' && password === 'ironmanenvy';
        return {
          ...state,
          isLoggedIn: username === 'bwayne' && password === 'ironmanenvy'
        };
      }
      default:
        return state;
    }
  }, initialState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}
