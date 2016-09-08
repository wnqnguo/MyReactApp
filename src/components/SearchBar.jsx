import React, { Component } from'react';
import { Form } from 'react-bootstrap'
export default class SearchBar extends Component{
	render(){
		return(
			<div>
				<div className="row">
					<div className="col-md-5" >
						<input placeholder="Where to?"/>
					</div>
					<div className="col-md-2">
						<input placeholder="Check In"/>
					</div>
					<div className="col-md-2">
						<input placeholder="Check Out?"/>
					</div>
					<div className="col-md-1">
						<input placeholder="Guest"/>
					</div>
					<div className="col-md-2">
						<button type="submit" className="btn btn-primary">Submit</button>
					</div>
				</div>
			</div>
		)
	}
}