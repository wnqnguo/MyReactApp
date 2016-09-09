import React, { Component } from'react';
import SearchBar from './SearchBar'
export default class Header extends Component{
	render(){
		return(
			<div className="header-container">
				<header>
		        	<div className="container">
		            <div className="row">
		                <div className="col-lg-12">
		                    <img className="img-responsive" src="../../style/assets/Header.jpg" alt=""/>
		                   
		                </div>
		            </div>
		            </div>
	            </header>
	            
        	</div>
		)
	}
}