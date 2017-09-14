import React,{Component} from 'react'
import './fridge';
import {hashHistory,Link} from 'react-router';
import cs from 'classnames';
import Model from '../Model';
class Fridge extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
			fresh0Open:false,
			freshOpen:true,
			freezeOpen:false,
			lockOpen:false,
			coldStorage:5,//冷藏
			freezing:-18,//冷冻
			temperature:0,//变温
			modelVisable:false,
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
  handerColdStorage(e){
  	// console.log(e)
  	this.setState({modelVisable:true})
  }
	cancel(){
		this.setState({modelVisable:false});
	}
	render(){
		const {fresh0Open,freshOpen,freezeOpen,lockOpen,coldStorage,freezing,temperature,modelVisable} =this.state;
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
						<div className="left" onClick={e=>this.handerColdStorage(e)}>
							<div className="title">{coldStorage}<sup>o</sup></div>
							<div className="desc">冷藏室</div>
						</div>
						<div className="right">
							<div className="top">
								<div className="title">{freezing}<sup>o</sup></div>
								<div className="desc">冷冻室</div>
							</div>
							<div className="bottom">
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
					modelVisable?
					<Model modelVisable={modelVisable} cancelFun={()=>this.cancel()}>
						<p>冷藏室温度</p>
					</Model>
					:null
				}
			</section>
		)
	}
}
export default Fridge