import React, { useReducer } from 'react';
import log from 'loglevel';

import AppContext from './AppContext';
import AppReducer from './AppReducer';
import initialState from './initialState';

const localState = window.localStorage.getItem('AppState');
const state0 = localState ? JSON.parse(localState) : initialState;

export default function AppStore(props) {
  const [state, dispatch] = useReducer((state, action) => {
    const newState = AppReducer(action, { ...state });

    log.debug(
      `AppReducer() - dispatching action of type ${action.type}: `,
      action,
      '\nprevious state',
      state,
      '\nnew state',
      newState
    );

    window.localStorage.setItem('AppState', JSON.stringify(newState));
    return newState;
  }, state0);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  );
}
