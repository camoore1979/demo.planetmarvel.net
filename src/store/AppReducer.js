const AppReducer = (action, state) => {
  switch (action.type) {
    case 'LOGIN': {
      const { username, password } = action;
      const isLoggedIn =
        username === 'bwayne@batcave.io' && password === 'iamironman';
      return {
        ...state,
        isLoggedIn,
        logInError: !isLoggedIn && 'Username or password is incorrect.',
        user: {
          firstName: 'Bruce',
          lastName: 'Wayne'
        }
      };
    }
    case 'LOGOUT': {
      return {
        ...state,
        isLoggedIn: false,
        user: {}
      };
    }
    case 'SET_COMIC': {
      return {
        ...state,
        comic: action.comic
      }
    }
    default:
      return state;
  }
};

export default AppReducer;
