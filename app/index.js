import React,{Component} from 'react'
import {render} from 'react-dom';
import App from './app'
import './common.less';
import {Router,IndexRoute, Route, hashHistory } from 'react-router';
// render(<App />,document.getElementById('root'));
render((
	<Router history={hashHistory}>
	  <Route path='/' component={App}/>
	</Router>
),document.getElementById('root'));
