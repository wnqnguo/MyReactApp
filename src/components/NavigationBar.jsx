import React, { Component } from'react';
import ReactDOM from 'react-dom';
import SearchDropDown from './SearchDropDown';
import DatePicker from './DatePicker';import { Navbar, Nav , NavItem, NavDropdown, MenuItem} from 'react-bootstrap';
export default class NavigationBar extends Component{
	
	constructor(props){
		super(props);
		this.state = { term: '', showDropDown:false};
		this.onInputChange = this.onInputChange.bind(this);
		this.fetchSearchResult = this.fetchSearchResult.bind(this);
	}
	onInputChange(event){
		var autocomplete = new google.maps.places.Autocomplete(ReactDOM.findDOMNode(this.refs.searchInput));
		var that = this;
		google.maps.event.addListener(autocomplete, 'place_changed', function() {
    		that.setState({showDropDown:true});
    	console.log('place',autocomplete.getPlace());
    	
	});
	}
	fetchSearchResult(){
		this.setState({showDropDown:false});
		console.log("called parent");
	}
	render(){
		return(
			<div class="navigationbar">
				 <Navbar>
    				<Navbar.Header>
      					<Navbar.Brand>
        					<a href="#">AirClone</a>
      					</Navbar.Brand>
    				</Navbar.Header>
			    <Nav>
			      
			      <form className="navbar-form navbar-left">
			        <div className="form-group">
			          <input
			           ref="searchInput"
			           type="text" 
			           className="form-control" 
			           placeholder="Where to?"
			           onChange={this.onInputChange}></input>
			        </div>
			      </form>
			      <NavItem eventKey={1} href="#">Become a Host</NavItem>
      			  <NavItem eventKey={2} href="#">Messages</NavItem>
			      <NavDropdown eventKey={3} title="Wenqian" id="basic-nav-dropdown" >
			        <MenuItem eventKey={3.1}>Your Trips</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={3.2}>Wish Lists</MenuItem>
			        <MenuItem divider />
			        <MenuItem eventKey={3.3}>Profile Page</MenuItem>
			      </NavDropdown>
			    </Nav>
 			 </Navbar>
 			 { this.state.showDropDown ? <SearchDropDown fetchSearchResult={this.fetchSearchResult.bind(this)}className="search-dropdown" /> : null }
			</div>
		)
	}
}