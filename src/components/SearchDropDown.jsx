import React, { Component } from'react';
import ReactDOM from 'react-dom';

import DatePicker from './DatePicker'
var moment = require('moment');
export default class SearchDropDown extends Component{
	constructor(props){
		super(props);
		this.state = { focusedInput: null,
      startDate: null,
      endDate: null};
      this.getInitialState = this.getInitialState.bind(this);
      this.handleChange = this.handleChange.bind(this);
      this.fetchSearchResult = this.fetchSearchResult.bind(this);
		
	}
	getInitialState(){
    return {
      startDate: moment()
    };
  }
  fetchSearchResult(event){
  	this.props.fetchSearchResult(event)
  }
  componentDidMount(){
  	 $('.datepicker').datepicker();
  }
  handleChange(date) {
    this.setState({
      startDate: date
    });
  }
	
	checkBoxChange(event){
		console.log("event is",event);
	}
	
	render(){
		return(
			<div id="header-search-settings" className="search-dropdown">
				<div className="search-dropdown panel header-menu">
					<div className="row row-condensed">
						<div className="col-sm-9">
							<div className="row row-condensed">
							    <div className="col-sm-4">
								<DatePicker/>
								</div>
								<div className="col-sm-4">
								<DatePicker/>
							</div>
							</div>
						</div>
						<div className="col-sm-3" >
							<div className="form-group">
	    						<label for="header-search-guests" className="field-label">Guests</label>
	    						<div className="select select-block">
									<select id="header-search-guests" name="guests">
										<option value="1">1</option>
										<option value="2">2</option>
										<option value="3">3</option>
										<option value="4">4</option>
										<option value="5">5</option>
									</select>
								</div>
	  						</div>
						</div>
					</div>
					
						<fieldset>
						    <div className="panel panel-default">
							<div className="panel-header menu-header">
								<legend>Room type</legend>
							</div>
							<div className="panel-body">
							<div>
								<label className="menu-item">
									<input name="radio" type="radio" />
									<i className="icon icon-private-romom-horizontal-margin-medium"/>
									<span>Entire home/apt</span>
								</label>
								<label className="menu-item">
									<input name="radio" type="radio" />
									<i className="icon icon-private-romom-horizontal-margin-medium"/>
									<span>Private room</span>
								</label>
								<label className="menu-item">
									<input  name="radio" type="radio" onChange={this.checkBoxChange} />
									<i className="icon icon-private-romom-horizontal-margin-medium"/>
									<span>Shared room</span>
								</label>
							 </div>
							</div>
							</div>
						</fieldset>
						<div className="panel-body">
						<button className="btn btn-primary btn-block" onClick={this.fetchSearchResult}>
							<i className ="icon icon-search"/>
							<span>Find a place</span>
						</button>
						
					</div>
				</div>
			</div>
		)
	}
}