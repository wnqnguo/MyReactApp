import React, { Component } from'react';
export default class SearchDropDown extends Component{
	
	render(){
		return(
			<div id="header-search-settings" className="search-dropdown">
				<div className="search-dropdown panel header-menu">
					<div className="row row-condensed">
						<div className="col-sm-9">
							<div className="row row-condensed">
								<div className="col-sm-6" >
									<label for="header-search-checkin" className="field-label">Check in</label>
									<input type="text" id="header-search-checkin" placeholder="dd-mm-yyyy"
									      name="checkin" className="checkin ui-datepicker-target"/>
								</div>
								<div className="col-sm-6" >
									<label for="header-search-checkin" className="field-label">Check out</label>
									<input type="text" id="header-search-checkin" placeholder="dd-mm-yyyy"
									      name="checkin" className="checkin ui-datepicker-target"/>
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
								<label className="checkbox menu-item">
									<input type="checkbox"/>
									<i className="icon icon-private-romom-horizontal-margin-medium"/>
									<span>Private room</span>
								</label>
								<label className="checkbox menu-item">
									<input type="checkbox"/>
									<i className="icon icon-private-romom-horizontal-margin-medium"/>
									<span>Private room</span>
								</label>
								<label className="checkbox menu-item">
									<input type="checkbox"/>
									<i className="icon icon-private-romom-horizontal-margin-medium"/>
									<span>Private room</span>
								</label>
							 </div>
							</div>
							</div>
						</fieldset>
						<div className="panel-body">
						<button className="btn btn-primary btn-block">
							<i className ="icon icon-search"/>
							<span>Find a place</span>
						</button>
						
					</div>
				</div>
			</div>
		)
	}
}