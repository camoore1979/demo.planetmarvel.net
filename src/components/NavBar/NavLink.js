import React from 'react';
import { NavLink } from 'react-router-dom';

export default function _NavLink({ children, to }) {
  return (
    <NavLink className="nav-link" to={to}>
      {children}
    </NavLink>
  );
}
