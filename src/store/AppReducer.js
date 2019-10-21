const AppReducer = (action, state) => {
  switch (action.type) {
    case 'SAY_HELLO':
      return { ...state, message: 'parlez vouse' };
    case 'LOGIN': {
      const { username, password } = action;
      const isLoggedIn =
        username === 'bwayne@batcave.io' && password === 'iamironman';
      return {
        ...state,
        isLoggedIn,
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
    default:
      return state;
  }
};

export default AppReducer;
