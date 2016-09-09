import React, { Component } from'react';
export default class SearchDropDown extends Component{
	
	render(){
		return(
			<div>
				<div class="search-dropdown">
					<div className="col-md-1" >
						<div class="form-group">
    						<label>Check in</label>
    						<input type="text" class="form-control"placeholder=""/>
  						</div>
					</div>
					<div className="col-md-1" >
						<div class="form-group">
    						<label>Check out</label>
    						<input type="text" class="form-control"placeholder=""/>
  						</div>
					</div>
					<div className="col-md-1" >
						<div class="form-group">
    						<label>Guest</label>
    						<input type="text" class="form-control"placeholder=""/>
  						</div>
					</div>
				</div>
			</div>
		)
	}
}