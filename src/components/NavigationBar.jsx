import React, { Component } from'react';
import { Navbar, Nav , NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
export default class NavigationBar extends Component{
	render(){
		return(
			<div>
				 <Navbar>
    				<Navbar.Header>
      					<Navbar.Brand>
        					<a href="#">AirClone</a>
      					</Navbar.Brand>
    				</Navbar.Header>
			    <Nav>
			      
			      <form className="navbar-form navbar-left">
			        <div className="form-group">
			          <input type="text" className="form-control" placeholder="Where to?"></input>
			        </div>
			      </form>
			      
			      <NavDropdown eventKey={3} title="Wenqian" id="basic-nav-dropdown" >
			        <MenuItem eventKey={3.1}>Your Trips</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={3.2}>Wish Lists</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={3.3}>Profile Page</MenuItem>
			      </NavDropdown>
			    </Nav>
 			 </Navbar>
			</div>
		)
	}
}