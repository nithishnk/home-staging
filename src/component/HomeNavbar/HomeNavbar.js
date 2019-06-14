import React, { Component } from 'react'
import {Navbar,Nav,NavDropdown} from 'react-bootstrap'
import './HomeNavbar.css'
import s from '../../images/logo.png'
export default class HomeNavbar extends Component {
  state = {
    backgroundColor: 'transparent;'
  }

  listenScrollEvent = e => {
    if (window.scrollY > 300) {
      this.setState({backgroundColor: '#e5e5e5'})
    } else {
      this.setState({backgroundColor: 'transparent'})
    }
  }

  componentDidMount() {
    window.addEventListener('scroll', this.listenScrollEvent)
  }
    render() {
        return (
            <div className="Navbar_Home_Section">
                <Navbar style={{backgroundColor: this.state.backgroundColor}} className="stky" collapseOnSelect expand="lg " >
                <Navbar.Brand className="logo-pad" href="#home">
      <img
        src={s}
        width="35"
        height="35"
        className="d-inline-block align-top"
        alt=" logo"
      />
    </Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="mr-auto">
     
    </Nav>
    <Nav>
    <Nav.Link href="/">Home</Nav.Link>
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/service">Service</Nav.Link>
      {/*<NavDropdown title="Services" href="/service "id="collasible-nav-dropdown">
        <NavDropdown.Item href="vacant">Vacant</NavDropdown.Item>
        <NavDropdown.Item href="#">Occupied</NavDropdown.Item>
        <NavDropdown.Item href="#">Individuals</NavDropdown.Item>
        <NavDropdown.Item href="#">Broker</NavDropdown.Item>
        <NavDropdown.Item href="#">Real Estate</NavDropdown.Item>
        <NavDropdown.Divider />
        </NavDropdown> */}
      <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      <Nav.Link href="/contact">Contact Us</Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>
            </div>
            
        )
    }
}
