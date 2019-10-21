import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';

import connect from '../store/connect';

import NavLink from './NavLink';

const _NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <div className="navbar-brand">
          <NavLink to="/">Planet Marvel</NavLink>
        </div>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink to="/comingsoon">Characters</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/comics">Comics</NavLink>
            </NavItem>
            <NavItem>
              <NavLink to="/comingsoon">Movies</NavLink>
            </NavItem>
            <UncontrolledDropdown nav inNavbar>
              <DropdownToggle nav caret>
                Bruce Wayne
              </DropdownToggle>
              <DropdownMenu right>
                <DropdownItem>Profile</DropdownItem>
                <DropdownItem>Settings</DropdownItem>
                <DropdownItem
                  onClick={() => props.dispatchLogout()}
                  color="link"
                >
                  Logout
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogout: () => dispatch({ type: 'LOGOUT' })
  };
};

export default connect(mapDispatchToProps)(_NavBar);
