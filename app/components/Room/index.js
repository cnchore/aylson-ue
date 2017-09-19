import React,{Component} from 'react'
import './room'
import cs from 'classnames'
import {Link,hashHistory} from 'react-router'
import mp3 from './takeabow.mp3'
var audio;
class Room extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	lightOpen:false,
	  	curtainsOpen:true,
	  	windowOpen:false,
	  	airRun:false,
	  	startx:0,
	  	endx:0,
	  	touched:false,
	  	soundOpen:false,
	  	documentWidth:window.screen.availWidth,
	  	animation:'',
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
	toggle(e,field){
		e.preventDefault();
		e.stopPropagation();
		if(field==='soundOpen'){
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
    this.setState({
      [field]: !this.state[field],
    });
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
    	console.log('move left')
      hashHistory.push('/kitchen?animation=righttoleft');
    }
  }
  handleAir(){
  	hashHistory.push('/air?animation=righttoleft');
  }
	render(){
		const {lightOpen,curtainsOpen,windowOpen,airRun,soundOpen} =this.state;
		const {location} =this.props;
		let animation=location && location.query && location.query.animation?location.query.animation:'';
		let airOpen=location && location.query && location.query.airOpen?location.query.airOpen:'';
		return (
			<div className={cs('room',animation?animation:'')} 
				onTouchStart={e=>this.handleStart(e)} 
				onTouchMove={e=>this.handleMove(e)} 
				onTouchEnd={e=>this.handleTouchEnd(e)}>
				<header>
					客厅
				</header>
				<Link to="/?animation=lefttoright" className="q-button-prev"></Link>
				<div className="pagination">
					<span className="active"></span>
					<span></span>
				</div>
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
						<div className={cs('wind',airOpen==='true'?'run':'')}></div>
					</div>
					<div className={cs('sofa',lightOpen?'light-open':'')}></div>
				</div>
					<div className="model">
						<div onClick={e=>this.toggle(e,'soundOpen')} className={cs('icon','icon-btn','btn-sound',soundOpen?'':'unactive')}>音响</div>
						<div onClick={e=>this.toggle(e,'lightOpen')} className={cs('icon','icon-btn','btn-light',lightOpen?'':'unactive')}>主灯</div>
						<div onClick={e=>this.toggle(e,'windowOpen')} className={cs('icon','icon-btn','btn-window',windowOpen?'':'unactive')}>窗</div>
						<div onClick={e=>this.toggle(e,'curtainsOpen')} className={cs('icon','icon-btn','btn-curtains',curtainsOpen?'':'unactive')}>窗帘</div>
						<div onClick={e=>this.handleAir(e)} className={cs('icon','icon-btn','btn-air',airOpen==='true'?'':'unactive')}>空调</div>
					</div>
				<div className={cs('q-mask',lightOpen?'':'open')}></div>
			</div>
		)
	}
}
export default Room