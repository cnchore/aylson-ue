import React,{Component} from 'react'
import './room'
import cs from 'classnames'
import {Link,hashHistory} from 'react-router'
class Room extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	lightOpen:false,
	  	curtainsOpen:true,
	  	windowOpen:false,
	  	airRun:false,
	  	startx:0,
	  	starty:0,
	  	endx:0,
	  	endy:0,
	  	documentWidth:window.screen.availWidth,
	  	animation:'',
	  };
	}
	componentDidMount(){
		
	}
	toggle(e,field){
		e.preventDefault();
		e.stopPropagation();
    this.setState({
      [field]: !this.state[field],
    });
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
      }
      else{//move left
        hashHistory.push('/kitchen?animation=righttoleft');
      }
    }
    else{
    	if( deltay > 0 ){ //move down
      }
      else{//move up
      }
    }
  }
  handleAir(){
  	hashHistory.push('/air?animation=righttoleft');
  }
	render(){
		const {lightOpen,curtainsOpen,windowOpen,airRun} =this.state;
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
					<div className={cs('light',lightOpen?'open':'')} onClick={e=>this.toggle(e, 'lightOpen')}>
						<div className="tips">
							<span className="point"></span>
							<span className="content">灯</span>
						</div>
					</div>
					<div className="rod"></div>
					<div className="window" onClick={e=>this.toggle(e, 'windowOpen')}>
						<div className="tips">
							<span className="point"></span>
							<span className="content">窗</span>
						</div>
						<div className={cs('left-win',windowOpen?'open':'close')}></div>
						<div className="frame-win"></div>
						<div className={cs('right-win',windowOpen?'open':'close')}></div>
					</div>
					<div className={cs('curtains','left',curtainsOpen?'':'close')} onClick={e=>this.toggle(e, 'curtainsOpen')}>
						<div className="tips">
							<span className="point"></span>
							<span className="content">窗帘</span>
						</div>
					</div>
					<div className={cs('curtains','right',curtainsOpen?'':'close')} onClick={e=>this.toggle(e, 'curtainsOpen')}></div>
					<div className="sound">
						<div className="tips">
							<span className="point"></span>
							<span className="content">音响</span>
						</div>
					</div>
					<div className="air" onClick={this.handleAir}>
						<div className="tips">
							<span className="point"></span>
							<span className="content">空调</span>
						</div>
						<div className={cs('wind',airOpen==='true'?'run':'')}></div>
					</div>
					<div className="sofa"></div>
				</div>
			</div>
		)
	}
}
export default Room