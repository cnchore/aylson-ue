import React,{Component} from 'react'
import './room'
import cs from 'classnames'
import {Link,hashHistory} from 'react-router'
import mp3 from './takeabow.mp3'
// import gas from './images/gas.gif'
var audio;
class Room extends Component{
	constructor(props) {
	  super(props);
		// this.modelTips=this.props.modelTips;
	  this.state = {
	  	startx:0,
	  	endx:0,
	  	touched:false,
	  	documentWidth:window.screen.availWidth,
	  };
	}
	componentDidMount(){
	
	}
	componentWillUnmount(){
		if(audio){
			audio.pause();
			audio=null;
		}
	}
	componentWillReceiveProps(nextProps){
		// console.log('room',nextProps.modelTips,audio)
		nextProps.modelTips && !audio && this.playAudio();
	}
	HTML5Audio(url, loop) {
		audio=new Audio(url)
    // audio.src=url;
    audio.autoplay = true;
    audio.loop = loop || false; //是否循环
    audio.play();
    return {
        end: function(callback) {
            audio.addEventListener('ended', function() {
                callback()
            }, false);
        }
    }
	}
	playAudio(){
		if(audio){
			if(audio.paused){
				audio.play();
			}else{
				audio.pause();
			}

		}else{
			this.HTML5Audio(mp3)
		}
	}
	stopAudio(){
		audio && !audio.ended && audio.pause();
  	audio=null;
	}
	toggle(e,field){
		e.preventDefault();
		e.stopPropagation();
		if(field==='soundOpen'){
			this.playAudio();
		}
    this.props.setState(field);
  }
  handleStart(e){
    e.stopPropagation();
    this.setState({  
        startx : e.targetTouches[0].clientX,
        touched:false,
    });
    // e.preventDefault();
  }
  handleMove(e){

  	e.stopPropagation();
  	this.setState({
  		endx:e.targetTouches[0].clientX,
  		touched:true,
  	})
  	// e.preventDefault();
  }
  handleTouchEnd (e) {
  	// e.preventDefault();
  	e.stopPropagation();
  	const {startx,endx,touched,documentWidth} =this.state;
  	var deltax = endx - startx;
  	if(!touched || Math.abs( deltax ) < 0.3*documentWidth)
  		return;
		if( deltax > 0 ){//move right
    }
    else{//move left
    	// console.log('move left')
      // hashHistory.push('/kitchen?animation=righttoleft');
      this.stopAudio();
      this.props.gotoKitchen();
    }
  }
  handleAir(e,airOpen){
  	// hashHistory.push('/air?animation=righttoleft&t='+t);
  	this.props.toggleAir(airOpen);
  }
  handleGotoDoor(){
  	this.stopAudio();
  	this.props.gotoDoor();
  }
  handleGotoKitchen(){
  	this.stopAudio();
  	this.props.gotoKitchen();
  }
	render(){
		const {lightOpen,curtainsOpen,windowOpen,airRun,soundOpen,airOpen,modelTips} =this.props;
		// modelTips && !audio && this.playAudio();
		return (
			<section className={cs('room')} style={this.props.style}
				>
				<div className="q-state"></div>
				<header>
					客厅
					<span className="q-button-prev" onClick={e=>this.handleGotoDoor()}></span>
					<div className="pagination">
						<span className="active"></span>
						<span></span>
					</div>
					<span className="q-button-next" onClick={e=>this.handleGotoKitchen()}></span>
				</header>
				<div className="page" >
					<div className={cs('light',lightOpen?'open':'')}>
						<div className="tips">
							<span className="point"></span>
							<span className="content">灯</span>
						</div>
					</div>
					<div className="rod"></div>
					<div className="window">
						<div className="tips">
							<span className="point"></span>
							<span className="content">窗</span>
						</div>
						<div className={cs('left-win',windowOpen?'open':'close')}></div>
						<div className="frame-win"></div>
						<div className={cs('right-win',windowOpen?'open':'close')}></div>
					</div>
					<div className={cs('curtains','left',curtainsOpen?'':'close')}>
						<div className="tips">
							<span className="point"></span>
							<span className="content">窗帘</span>
						</div>
					</div>
					<div className={cs('curtains','right',curtainsOpen?'':'close')}></div>
					<div className="sound">
						<div className="tips">
							<span className="point"></span>
							<span className="content">音响</span>
						</div>
					</div>
					<div className="air">
						<div className="tips">
							<span className="point"></span>
							<span className="content">空调</span>
						</div>
						<div className={cs('wind',airOpen?'run':'')}></div>
					</div>
					<div className={cs('sofa',lightOpen?'light-open':'')}></div>
				</div>
					<div className="model">
						<div onClick={e=>this.toggle(e,'soundOpen')} className={cs('icon','icon-btn','btn-sound',soundOpen?'':'unactive')}>音响</div>
						<div onClick={e=>this.toggle(e,'lightOpen')} className={cs('icon','icon-btn','btn-light',lightOpen?'':'unactive')}>主灯</div>
						<div onClick={e=>this.toggle(e,'windowOpen')} className={cs('icon','icon-btn','btn-window',windowOpen?'':'unactive')}>窗</div>
						<div onClick={e=>this.toggle(e,'curtainsOpen')} className={cs('icon','icon-btn','btn-curtains',curtainsOpen?'':'unactive')}>窗帘</div>
						<div onClick={e=>this.handleAir(e,airOpen)} className={cs('icon','icon-btn','btn-air',airOpen?'':'unactive')}>空调</div>
					</div>
				<div className={cs('q-mask',lightOpen?'close':'open')}></div>
				{
					modelTips?
					<div className={cs('q-model-tips',modelTips?'open':'close')}>
						<div>欢迎回家</div>
						<div>已自动为您开启回家模式</div>
						<div>灯：<span>开启</span></div>
						<div>窗：<span>开启</span></div>
						<div>窗帘：<span>开启</span></div>
						<div>空调：<span>开启</span></div>
						<div>音响：<span>开启</span></div>
					</div>
					:null
				}
			</section>
		)
	}
}
export default Room