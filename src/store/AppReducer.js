import React, { useReducer } from 'react';

import AppContext from './AppContext';

const initialState = {
  message: 'hello world'
};

export default function AppReducer(props) {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SAY_HELLO':
        return { message: 'parlez vouse'};
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
