import React,{Component} from 'react'
import Door from './components/Door'
import Room from './components/Room'
// import Air from './components/Air'
// import Kitchen from './components/Kitchen'
// import Fridge from './components/Fridge'
// import Recipes from './components/Recipes'
// import RecipesDetail from './components/RecipesDetail'
// import SwiperPage from './components/SwiperPage';
class App extends Component{
	constructor(props) {
	  super(props);
		this.clientWidth=document.body.clientWidth;
	  this.state = {};
	}
	render(){
		let location={
			query:{
				animation:'righttoleft'
			}
		}
		let width={width:this.clientWidth+'px'}
		let style={width:2*this.clientWidth+'px',height:'100%'}
		return <div style={style}>
						<Door styles={width}/>
						<Room location={location} styles={width}/>
					</div>
	}
}
export default App