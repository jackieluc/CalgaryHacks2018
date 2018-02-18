import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {
  Nav,
  NavbarBrand,
  NavbarToggler,
  NavItem,
  NavLink,
  Badge
} from 'reactstrap';
import HeaderDropdown from './HeaderDropdown';

class Header extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isCollapsed: false,
      currentChevronIcon: 'fa fa-chevron-left',
    };
    this.sidebarToggle = this.sidebarToggle.bind(this);
  }

  sidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-hidden');
    const chevronIcon = this.state.isCollapsed ? 'fa fa-chevron-left' : 'fa fa-chevron-right';
    this.setState({ 
      isCollapsed: !this.state.isCollapsed,
      currentChevronIcon: chevronIcon,
    });
  }

  sidebarMinimize(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-minimized');
  }

  mobileSidebarToggle(e) {
    e.preventDefault();
    document.body.classList.toggle('sidebar-mobile-show');
    const chevronIcon = this.state.isCollapsed ? 'fa fa-chevron-right' : 'fa fa-chevron-left';
    this.setState({ 
      isCollapsed: !this.state.isCollapsed,
      currentChevronIcon: chevronIcon,
    });
  }

  render() {
    return (
      <header className="app-header navbar">
        <NavbarToggler className="d-lg-none" onClick={this.mobileSidebarToggle}>
          <span className={this.state.currentChevronIcon}></span>
        </NavbarToggler>
        <NavbarBrand href="#"></NavbarBrand>
        <NavbarToggler className="d-md-down-none" onClick={this.sidebarToggle}>
          <span className={this.state.currentChevronIcon}></span>
        </NavbarToggler>
        <Nav className="ml-auto" navbar>
          <NavItem className="px-3">
            <NavLink href="#/Settings"><i className="fa fa-cog fa-lg"></i></NavLink>
          </NavItem>
        </Nav>
      </header>
    );
  }
}

export default Header;
