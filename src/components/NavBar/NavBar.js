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

import connect from '../../store/connect';

import NavLink from './NavLink';
import LogoImage from '../LogoImage';

import './NavBar.css';

const _NavBar = props => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  return (
    <div>
      <Navbar className="nav-marvel" color="dark" dark expand="md">
        <div className="navbar-brand navbar-brand-marvel">
          {/* <LogoImage dark height='32px' width='32px' /> */}
          <NavLink to="/">
            <img
              alt="planet marvel logo"
              src="planet-marvel-title-img.png"
              // height={''}
              width="200px"
            />
          </NavLink>
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
                {props.fullname}
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

const mapStateToProps = ({ user: { firstName, lastName } }) => {
  return {
    fullname: `${firstName} ${lastName}`
  };
};

const mapDispatchToProps = dispatch => {
  return {
    dispatchLogout: () => dispatch({ type: 'LOGOUT' })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(_NavBar);
