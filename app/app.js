import React,{Component} from 'react'
import Door from './components/Door'
import Room from './components/Room'
import Air from './components/Air'
import Kitchen from './components/Kitchen'
import Fridge from './components/Fridge'
import Recipes from './components/Recipes'
import RecipesDetail from './components/RecipesDetail'
// import SwiperPage from './components/SwiperPage';
class App extends Component{
	constructor(props) {
	  super(props);
		this.clientWidth=document.body.clientWidth;
	  this.state = {
	  	left:0,
	  	fingerVisable:false,
	  	lightOpen:true,
	  	curtainsOpen:true,
	  	windowOpen:true,
	  	airRun:true,
	  	soundOpen:true,
	  	airOpen:true,
	  	modelTips:false,
	  	fridgeOpen_K:false,//冰箱
			lightOpen_K:false,//主灯
			machineOpen_K:false,//抽烟机
			fanOpen_K:false,//抽风机
			blowerOpen_K:false,//送风机
			beltOpen_K:false,//灯带
			winOpen_K:true,//电动窗
			recipesOpen_K:false,//健康食谱
	  };
	}
	gotoRoom(modelTips=true){
		let left=-1*1*this.clientWidth;
		this.setState({left,modelTips});
	}
	gotoDoor(){
		let left=-1*0*this.clientWidth;
		this.setState({left,fingerVisable:false,modelTips:false});
	}
	gotoKitchen(){
		let left=-1*2*this.clientWidth;
		this.setState({left,modelTips:false});
	}
	handerFinger(){
		let {fingerVisable} = this.state;
		this.setState({fingerVisable:!fingerVisable});
	}
	handerSetState(field){
		this.setState({[field]:!this.state[field]});
	}
	toggleAir(airOpen,type=true){

		let roomStyle ={
			zIndex:type?-1:'auto',
			// transform:type?'translateY(-100%)':'translateY(0)',
			opacity:type?0:1
		}
		let airStyle={
			zIndex:!type?-1:'auto',
			// transform:type?'translateY(-100%)':'translateY(0)',
			opacity:type?1:0
		}
		this.setState({
			roomStyle,
			airStyle,
			airOpen,
			modelTips:false,
		})
	}
	toggleFridge(type=true){
		console.log('toggleFridge',type)
		let kitchenStyle ={
			// transform:type?'translateY(-100%)':'translateY(0)',
			zIndex:type?-1:'auto',
			opacity:type?0:1
		}
		let fridgeStyle={
			// transform:type?'translateY(-100%)':'translateY(0)',
			zIndex:!type?-1:'auto',
			opacity:type?1:0
		}

		this.setState({
			kitchenStyle,
			fridgeStyle,
			recipesDetailStyle:{
				zIndex:-1,opacity:0
			},
			recipesStyle:{
				zIndex:-1,opacity:0
			}
		})
	}
	toggleRecipes(type=true){
		let kitchenStyle ={
			// transform:type?'translateY(-100%)':'translateY(0)',
			zIndex:type?-1:'auto',
			opacity:type?0:1
		}
		let recipesStyle={
			// transform:type?'translateY(-200%)':'translateY(0)',
			zIndex:!type?-1:'auto',
			opacity:type?1:0
		}
		this.setState({
			kitchenStyle,
			recipesStyle,
			recipesDetailStyle:{
				zIndex:-1,opacity:0
			},
			fridgeStyle:{
				zIndex:-1,opacity:0
			}
		})
	}
	toggleRecipesDetail(type,code=null){
		let recipesStyle={
			// transform:type?'translateY(-200%)':'translateY(-200%)',
			zIndex:type?-1:'auto',
			opacity:type?0:1
		}
		let recipesDetailStyle ={
			// transform:type?'translateY(-300%)':'translateY(0)',
			zIndex:!type?-1:'auto',
			opacity:type?1:0
		}
		this.setState({
			recipesDetailStyle,
			recipesStyle,
			kitchenStyle:{
				zIndex:-1,opacity:0
			},
			fridgeStyle:{
				zIndex:-1,opacity:0
			},
			code
		})
	}
	componentWillMount(){
		this.setState({loading:true});
	}
	componentDidMount(){
		this.setState({loading:false});
	}
	render(){

		const {
			
			left,fingerVisable,
			lightOpen,curtainsOpen,windowOpen,airRun,soundOpen,airOpen,modelTips,roomStyle,
			fridgeOpen_K,lightOpen_K,machineOpen_K,fanOpen_K,blowerOpen_K,beltOpen_K,winOpen_K,recipesOpen_K,
			airStyle,
			kitchenStyle,
			fridgeStyle,
			recipesStyle,
			recipesDetailStyle,code
		} = this.state;
		let location={
			query:{
				animation:'righttoleft'
			}
		}

		let width={width:this.clientWidth+'px'}
		let style={width:3*this.clientWidth+'px',left:left+'px'}
		
		return <div style={style} className="q-main">
						<div className="q-swiper" style={width}>
							<Door  gotoRoom={this.gotoRoom.bind(this)} 
										 handerFinger={this.handerFinger.bind(this)}
										 modelVisable={fingerVisable}
										 />
						</div>
						<div className="q-swiper" style={width}>
							<Room gotoDoor={this.gotoDoor.bind(this)}
										gotoKitchen={this.gotoKitchen.bind(this)}
										modelTips={modelTips}
										lightOpen={lightOpen}
										curtainsOpen={curtainsOpen}
										windowOpen={windowOpen}
										airRun={airRun}
										soundOpen={soundOpen}
										airOpen={airOpen}
										style={roomStyle}
										setState={this.handerSetState.bind(this)}
										toggleAir={this.toggleAir.bind(this)}
							/>
							<Air gotoRoom={this.toggleAir.bind(this)}
									 style={airStyle} 
							/>
						</div>
						<div className="q-swiper" style={width}>
							<Kitchen gotoRoom={this.gotoRoom.bind(this)}
										fridgeOpen={fridgeOpen_K}
										lightOpen={lightOpen_K}
										machineOpen={machineOpen_K}
										fanOpen={fanOpen_K}
										blowerOpen={blowerOpen_K}
										beltOpen={beltOpen_K}
										winOpen={winOpen_K}
										recipesOpen={recipesOpen_K}
										setState={this.handerSetState.bind(this)}
										toggleFridge={this.toggleFridge.bind(this)}
										toggleRecipes={this.toggleRecipes.bind(this)}
										style={kitchenStyle}
							/>
							<Fridge toggleFridge={this.toggleFridge.bind(this)} 
											style={fridgeStyle}
							/>
							<Recipes toggleRecipes={this.toggleRecipes.bind(this)}
											style={recipesStyle}
											toggleRecipesDetail={this.toggleRecipesDetail.bind(this)} 
							/>
							<RecipesDetail toggleRecipesDetail={this.toggleRecipesDetail.bind(this)} 
											style={recipesDetailStyle}
											code={code}
							/>				
						</div>
					</div>
	}
}
export default App