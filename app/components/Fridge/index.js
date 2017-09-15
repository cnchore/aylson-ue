import React,{Component} from 'react'
import './fridge';
import {hashHistory,Link} from 'react-router';
import cs from 'classnames';
import Model from '../Model';
import Slider from '../Slider';

class Fridge extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
			fresh0Open:false,
			freshOpen:true,
			freezeOpen:false,
			lockOpen:false,
			coldStorage:5,//冷藏
			tempColdStorage:0,
			coldStorageModelVisable:false,
			freezing:-18,//冷冻
			tempFreezing:0,
			freezingModelVisable:false,
			temperature:0,//变温
			tempTemperature:0,
			temperatureModelVisable:false,
	  };

	}
	
  toggle(e,field){
		e.preventDefault();
		e.stopPropagation();
		let {fresh0Open,freshOpen,freezeOpen,lockOpen,coldStorage,freezing,temperature} =this.state;
		switch(field){
			// 0℃保鲜
			case 'fresh0Open':temperature=0;break;
			// 保鲜
			case 'freshOpen': 
				freezing=-18; 
				if(freshOpen){
					freezeOpen=true;
				}else{
					freezeOpen=false;
				}
				break;
			// 速冻
			case 'freezeOpen': 
				freezing=-23; 
				if(freezeOpen){
					freshOpen=true;
				}else{
					freshOpen=false;
				}
				break;
			
		}
    this.setState({
    	fresh0Open,freshOpen,freezeOpen,lockOpen,
      [field]: !this.state[field],
      coldStorage,
      freezing,
      temperature,
    });
  }
  handerTemperature(modelVisable,oldTemperature,newTemperature){
  	// console.log(e)
  	this.setState({
  		[modelVisable]:true,
  		[oldTemperature]:this.state[newTemperature],
  	})
  }
	cancel(field){
		this.setState({[field]:false});
	}
	okFun(field,oldTemperature,newTemperature){
		this.setState({
			[field]:false,
			[oldTemperature]:this.state[newTemperature],
		});
	}
	sliderOnchange(temperature,field){
		// console.log('temperature:',temperature);
		this.setState({[field]:temperature})
	}
	render(){
		const {fresh0Open,freshOpen,freezeOpen,lockOpen,coldStorage,freezing,temperature,
			coldStorageModelVisable,tempColdStorage,
			freezingModelVisable,tempFreezing,
			temperatureModelVisable,tempTemperature} =this.state;
		const {location} =this.props;
		let animation=location && location.query && location.query.animation?location.query.animation:'';
		
		return (
			<section className={cs('fridge',animation?animation:'')} 
				>
				<header>
					冰箱
				</header>
				<Link to="/kitchen?animation=lefttoright" className="q-button-prev"></Link>
				<div className="page">
					<div className="out">
						<div className="left" onClick={e=>this.handerTemperature('coldStorageModelVisable','tempColdStorage','coldStorage')}>
							<div className="title">{coldStorage}<sup>o</sup></div>
							<div className="desc">冷藏室</div>
						</div>
						<div className="right">
							<div className="top" onClick={e=>this.handerTemperature('freezingModelVisable','tempFreezing','freezing')}>
								<div className="title">{freezing}<sup>o</sup></div>
								<div className="desc">冷冻室</div>
							</div>
							<div className="bottom" onClick={e=>this.handerTemperature('temperatureModelVisable','tempTemperature','temperature')}>
								<div className="title">{temperature}<sup>o</sup></div>
								<div className="desc">变温室</div>
							</div>
						</div>
					</div>
					<div className="model">
						<div onClick={e=>this.toggle(e,'fresh0Open')} className={cs('icon','btn-0-fresh',fresh0Open?'open':'')}>0℃保鲜</div>
						<div onClick={e=>this.toggle(e,'freshOpen')} className={cs('icon','btn-fresh',freshOpen?'open':'')} >保鲜</div>
						<div onClick={e=>this.toggle(e,'freezeOpen')} className={cs('icon','btn-freeze',freezeOpen?'open':'')} >速冻</div>
						<div onClick={e=>this.toggle(e,'lockOpen')} className={cs('icon','btn-lock',lockOpen?'open':'')} >童锁</div>
					</div>
				</div>
				{
					coldStorageModelVisable?
					<Model modelVisable={coldStorageModelVisable} 
						cancelFun={()=>this.cancel('coldStorageModelVisable')}
						okFun={()=>this.okFun('coldStorageModelVisable','coldStorage','tempColdStorage')}
						>
						<p className="q-slider-title">冷藏室温度{tempColdStorage}℃</p>
						<Slider 
							defaultValue={coldStorage}
							minValue={2}
							maxValue={8}
							onChange={(e)=>this.sliderOnchange(e,'tempColdStorage')}
						/>
						<div className="q-slider-desc">
							<span className='-left'>2℃</span>
							<span className="-right">8℃</span>
						</div>
					</Model>
					:null
				}
				{
					freezingModelVisable?
					<Model modelVisable={freezingModelVisable} 
						cancelFun={()=>this.cancel('freezingModelVisable')}
						okFun={()=>this.okFun('freezingModelVisable','freezing','tempFreezing')}
						>
						<p className="q-slider-title">冷冻室温度{tempFreezing}℃</p>
						<Slider 
							defaultValue={freezing}
							minValue={-23}
							maxValue={-15}
							onChange={(e)=>this.sliderOnchange(e,'tempFreezing')}
						/>
						<div className="q-slider-desc">
							<span className='-left'>-23℃</span>
							<span className="-right">-15℃</span>
						</div>
					</Model>
					:null
				}
				{
					temperatureModelVisable?
					<Model modelVisable={temperatureModelVisable} 
						cancelFun={()=>this.cancel('temperatureModelVisable')}
						okFun={()=>this.okFun('temperatureModelVisable','temperature','tempTemperature')}
						>
						<p className="q-slider-title">变温室温度{tempTemperature}℃</p>
						<Slider 
							defaultValue={temperature}
							minValue={-7}
							maxValue={5}
							onChange={(e)=>this.sliderOnchange(e,'tempTemperature')}
						/>
						<div className="q-slider-desc">
							<span className='-left'>-7℃</span>
							<span className="-right">5℃</span>
						</div>
					</Model>
					:null
				}
			</section>
		)
	}
}
export default Fridge