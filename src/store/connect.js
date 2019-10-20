import React, { useContext } from 'react';
import AppContext from './AppContext';

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    return function(otherProps) {
      const { state, dispatch } = useContext(AppContext);
      const stateToProps = mapStateToProps(state);
      const dispatchToProps = mapDispatchToProps && mapDispatchToProps(dispatch);
      const props = { ...otherProps, ...stateToProps, ...dispatchToProps };
      // ? ...props
      return <Component {...props} />;
    };
  };
}
