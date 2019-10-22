import React, { useContext } from 'react';
import AppContext from './AppContext';

export default function connect(mapStateToProps, mapDispatchToProps) {
  return function(Component) {
    return function(otherProps) {
      const { state, dispatch } = useContext(AppContext);

      let stateToProps;
      let dispatchToProps;

      if (mapDispatchToProps) {
        stateToProps = mapStateToProps && mapStateToProps(state);
        dispatchToProps = mapDispatchToProps(dispatch);
      } else if (mapStateToProps.name === 'mapDispatchToProps') {
        dispatchToProps = mapStateToProps(dispatch);
      } else {
        stateToProps = mapStateToProps(state);
      }
      const props = {
        ...otherProps,
        ...(stateToProps || {}),
        ...(dispatchToProps || {})
      };
      // ? ...props
      return <Component {...props} />;
    };
  };
}
