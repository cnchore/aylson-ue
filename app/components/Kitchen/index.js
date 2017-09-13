import React,{Component} from 'react'
import './kitchen';
import {hashHistory,Link} from 'react-router';
import cs from 'classnames';
class Kitchen extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	startx:0,
	  	starty:0,
	  	endx:0,
	  	endy:0,
	  	documentWidth:window.screen.availWidth,
	  	fridgeOpen:false,//冰箱
			lightOpen:false,//主灯
			machineOpen:false,//抽烟机
			fanOpen:false,//抽风机
			blowerOpen:false,//送风机
			beltOpen:false,//灯带
			winOpen:true,//电动窗
			recipesOpen:false,//健康食谱
	  };
	}
	handleStart(e){
      // e.preventDefault();
      e.stopPropagation();
      this.setState({  
          startx : e.targetTouches[0].clientX,
          starty : e.targetTouches[0].clientY,
      });
  }
  handleMove(e){
  	// e.preventDefault();
  	e.stopPropagation();
  	this.setState({
  		endx:e.targetTouches[0].clientX,
  		endy:e.targetTouches[0].clientY,
  	})
  }
  handleTouchEnd (e) {
  	const {startx,starty,endx,endy,documentWidth} =this.state;
  	var deltax = endx - startx;
  	var deltay = endy - starty;
  	if( Math.abs( deltax ) < 0.3*documentWidth && Math.abs( deltay ) < 0.3*documentWidth )
  		return;
  	if( Math.abs( deltax ) >= Math.abs( deltay ) ){
  		if( deltax > 0 ){//move right
        hashHistory.push('/room?animation=lefttoright');
      }
      else{//move left
      }
    }
    else{
    	if( deltay > 0 ){ //move down
      }
      else{//move up
      }
    }
  }
  toggle(e,field){
		e.preventDefault();
		e.stopPropagation();
    this.setState({
      [field]: !this.state[field],
    });
  }
	render(){
		const {fridgeOpen,lightOpen,machineOpen,fanOpen,blowerOpen,beltOpen,winOpen,recipesOpen} =this.state;
		const {location} =this.props;
		let animation=location && location.query && location.query.animation?location.query.animation:'';
		return (
			<section className={cs('kitchen',animation?animation:'')} 
				onTouchStart={e=>this.handleStart(e)} 
				onTouchMove={e=>this.handleMove(e)} 
				onTouchEnd={e=>this.handleTouchEnd(e)}
				>
				<header>
					厨房
				</header>
				<Link to="/room?animation=lefttoright" className="q-button-prev"></Link>
				<div className="pagination">
					<span></span>
					<span className="active"></span>
				</div>
				<div className="page">
					<div className={cs('light',lightOpen?'open':'')}>
						<div className="tips">
							<span className="point"></span>
							<span className="content">灯</span>
						</div>
					</div>
					<div className="window">
						<div className={cs('left',winOpen?'open':'close')}></div>
						<div className="frame"></div>
						<div className={cs('right',winOpen?'open':'close')}></div>
						<div className="tips">
							<span className="point"></span>
							<span className="content">电动窗</span>
						</div>
					</div>
					<div className={cs('fan',fanOpen?'open':'')}>
						<div className="tips">
							<span className="point"></span>
							<span className="content">抽风机</span>
						</div>
						<i></i>
					</div>
					<div className="air-blower">
						<div className="tips">
							<span className="point"></span>
							<span className="content">送风机</span>
						</div>
					</div>
					<div className="fridge">
						<div className="tips">
							<span className="point"></span>
							<span className="content">冰箱</span>
						</div>
					</div>
					<div className="cupboard">
						<div className="top frame"></div>
						<div className="light-belt">
							<div className="tips">
							<span className="point"></span>
							<span className="content">灯带</span>
						</div>
						</div>
						<div className="btn"></div>
						<div className="water-tap"></div>
						<div className="bottom frame"></div>
						<div className="bottom-line"></div>
					</div>
					<div className="smoke-machine">
						<div className={cs('machine',machineOpen?'open':'')}>
							<div className="tips">
								<span className="point"></span>
								<span className="content">抽烟机</span>
							</div>
						</div>
					</div>
					<div className="console-wall"></div>
					<div className="pot"></div>
					<div className="console">
						<div className="top"></div>
					</div>
					<div className="dining-table">
						<div className="top"></div>
					</div>
					<div className="recipes">
						<div className="tips">
							<span className="point"></span>
							<span className="content">健康食谱</span>
						</div>
					</div>
					<div className="stool1"></div>
					<div className="stool2"></div>
					<div className="stool3"></div>
					<div className="carpet"></div>
					<div className="model">
						<div onClick={e=>this.toggle(e,'fridgeOpen')} className={cs('icon','icon-btn','btn-fridge',fridgeOpen?'':'unactive')}>冰箱</div>
						<div onClick={e=>this.toggle(e,'lightOpen')} className={cs('icon','icon-btn','btn-light',lightOpen?'':'unactive')}>主灯</div>
						<div onClick={e=>this.toggle(e,'machineOpen')} className={cs('icon','icon-btn','btn-smoke-machine',machineOpen?'':'unactive')}>抽烟机</div>
						<div onClick={e=>this.toggle(e,'fanOpen')} className={cs('icon','icon-btn','btn-fan',fanOpen?'':'unactive')}>抽风机</div>
						<div onClick={e=>this.toggle(e,'blowerOpen')} className={cs('icon','icon-btn','btn-air-blower',blowerOpen?'':'unactive')}>送风机</div>
						<div onClick={e=>this.toggle(e,'beltOpen')} className={cs('icon','icon-btn','btn-light-belt',beltOpen?'':'unactive')}>灯带</div>
						<div onClick={e=>this.toggle(e,'winOpen')} className={cs('icon','icon-btn','btn-win',winOpen?'':'unactive')}>电动窗</div>
						<div onClick={e=>this.toggle(e,'recipesOpen')} className={cs('icon','icon-btn','btn-recipes',recipesOpen?'':'unactive')}>健康食谱</div>
					</div>
				</div>
			</section>
		)
	}
}
export default Kitchen