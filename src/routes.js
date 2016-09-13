import React from 'react';
import { Route, IndexRoute } from 'react-router';

import App from './components/app';
import PostIndex from './components/PostIndex';
import Landing from './components/Landing';
import Listings from './components/Listings';
const Greeting = () => {
	return <div>Hey there!</div>;
};

export default (
	<Route path="/" component={App} >
		<IndexRoute component = {Landing} />
		<Route path="great" component ={Greeting} />
		<Route path='listings' component ={Listings} />
	</Route>
);