import React from 'react';
import {render} from 'react-dom';
import Door from './components/Door'
import Room from './components/Room'
import Kitchen from './components/Kitchen'
// import SwiperPage from './components/SwiperPage';

import './common.less';
import {Router,IndexRoute, Route, hashHistory } from 'react-router';
render((
	<Router history={hashHistory}>
	  <Route path='/' component={Door}/>
    <Route path='room' component={Room} />
    <Route path='kitchen' component={Kitchen} />
	</Router>
),document.getElementById('root'));
// render(<SwiperPage />, document.getElementById('root'));
