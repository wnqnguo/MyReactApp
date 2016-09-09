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
					<div >
						<ul className="list-group">
							<li className="list-group-item">
								<div className="panel-header">Room type</div>
							</li>
							 <li className="list-group-item ">
									<label className="menu-item" for="room_type_0">
										<input type="checkbox" id="room_type_0" 
								         value="Entire home/apt"/>
										<span>Entire home/apt</span>
									</label>
								</li>
								<li className="list-group-item">
									<label>
										<input type="checkbox"
												value="Private room"/>
										<span>Private room</span>
									</label>
								</li>
								<li className="list-group-item"> 
									<label className="checkbox">
										<input type="checkbox" 
												value="Share room" />
										<span>Share room</span>
									</label>
								</li>
							</ul>
					</div>
				</div>
			</div>
		)
	}
}