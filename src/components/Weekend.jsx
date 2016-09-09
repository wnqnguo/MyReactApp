import React, { Component } from'react';
export default class Weekend extends Component{
	render(){
		return(
			<div>
				 <section id="portfolio">
			        <div className="container">
			            <div className="row carousel-item">
			                <div className="col-lg-12 text-center">
			                    <h2>Just For The Weekend</h2>
			                </div>
			            </div>
			            <div className="row">
			                <div className="col-sm-4 portfolio-item">
			                    <img src="../../style/assets/napa.jpg" className="img-responsive" alt=""/>
			                </div>
			                <div className="col-sm-4 portfolio-item">
			                    <img src="../../style/assets/sonoma.jpg" className="img-responsive" alt=""/>
			                </div>
			                <div className="col-sm-4 portfolio-item">
			                    <img src="../../style/assets/santa-cruz.jpg" className="img-responsive" alt=""/>
			                </div>
			            </div>
			            <div className="row">
			            	<div className="col-sm-12 col-lg- col-lg-offset-4 space-top-4 hide-sm">
			            		<a href="" className="btn btn-large btn-block">
			            			See All Destinations
			            		</a>
			            	</div>
			            </div>
			        </div>
    			</section>
			</div>
		)
	}
}