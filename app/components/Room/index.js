import React,{Component} from 'react'
import './room'
import cs from 'classnames'
import {Link} from 'react-router'
class Room extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	lightOpen:false,
	  	curtainsOpen:true,
	  	windowOpen:false,
	  	startx:0,
	  	starty:0,
	  	endx:0,
	  	endy:0,
	  	documentWidth:window.screen.availWidth,
	  	arrow:'',
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
      // console.log('start:',e.targetTouches[0])
			//前面原生js用的是touches,其实还有一个targetTouches，在这两个的输出结果是一致的。
      this.setState({  //当触摸开始时候，记录当时的坐标值，还有设置触摸变化的xy轴的变化为0，因为当新一轮触摸开始时候，必须重新设置，相当于初始化
          startx : e.targetTouches[0].clientX,
          starty : e.targetTouches[0].clientY,
      });
  }
  handleMove(e){
  	// e.preventDefault();
  	e.stopPropagation();
  	// console.log('end:',e.targetTouches[0])
  	this.setState({
  		endx:e.targetTouches[0].clientX,
  		endy:e.targetTouches[0].clientY,
  	})
  }
  handleTouchEnd (e) {
  	const {startx,starty,endx,endy,documentWidth} =this.state;
  	var deltax = endx - startx;
  	var deltay = endy - starty;
  	// console.log('deltax:',deltax,'deltay:',deltay,startx,endx,starty,endy)
  	if( Math.abs( deltax ) < 0.3*documentWidth && Math.abs( deltay ) < 0.3*documentWidth )
  		return;

  	if( Math.abs( deltax ) >= Math.abs( deltay ) ){

  		if( deltax > 0 ){
        //move right
        console.log('move right')
        this.setState({arrow:'right'});
      }
      else{
        //move left
        console.log('move left')
        this.setState({arrow:'left'});
        
      }
    }
    else{
    	if( deltay > 0 ){
        //move down
        console.log('move down')
        this.setState({arrow:'down'});
        
      }
      else{
        //move up
        console.log('move up')
        this.setState({arrow:'up'});
        
      }
    }
  }

	render(){
		const {lightOpen,curtainsOpen,windowOpen,arrow} =this.state;
		
		return (
			<div className="room" 
				onTouchStart={e=>this.handleStart(e)} 
				onTouchMove={e=>this.handleMove(e)} 
				onTouchEnd={e=>this.handleTouchEnd(e)}>
				<header>
					客厅{arrow}
				</header>
				<Link to="/" className="q-button-prev"></Link>
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
					<div className="air">
						<div className="tips">
							<span className="point"></span>
							<span className="content">空调</span>
						</div>
						<div className="wind"></div>
					</div>
					<div className="sofa"></div>
				</div>
			</div>
		)
	}
}
export default Room