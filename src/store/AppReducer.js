const AppReducer = (action, state) => {
  switch (action.type) {
    case 'SAY_HELLO':
      return { ...state, message: 'parlez vouse' };
    case 'LOGIN': {
      const { username, password } = action;
      const isLoggedIn =
        username === 'bwayne@batcave.io' && password === 'ironmanenvy';
      return {
        ...state,
        isLoggedIn
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoggedIn: false
      };
    }
    default:
      return state;
  }
};

export default AppReducer;
