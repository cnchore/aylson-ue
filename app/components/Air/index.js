import React,{Component} from 'react'
import './air'
import cs from 'classnames'
import {Link,hashHistory} from 'react-router'
import '../../js/datePicker';
var calendar = new datePicker();
class Air extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	airOpen:true,
	  	moshiOpen:false,
	  	fengsuOpen:false,
	  	moshiVisable:false,
	  	fengsuVisable:false,
	  	btnsOpen:false,
	  	dingshiOpen:false,
			dingshiVisable:false,
			ecoOpen:false,
			youshuimianOpen:false,
			zuoyoubaifengOpen:false,
			shangxiabaifengOpen:false,
	  	moshiCheck:'zhileng',
	  	fengsuCheck:'gaofeng',
	  	animation:'',
	  	title:26,
	  };
	}
	componentDidMount(){
		let self=this;
		calendar.init({
			'trigger': '#timePicker', /*按钮选择器，用于触发弹出插件*/
			'type': 'time',/*模式：date日期；datetime日期时间；time时间；ym年月；*/
			'minDate':'1900-1-1',/*最小日期*/
			'maxDate':'2100-12-31',/*最大日期*/
			'onSubmit':function(){/*确认时触发事件*/
				console.log(calendar.value);
				self.setState({
					dingshiVisable:true,
				})
			},
			'onClose':function(){/*取消时触发事件*/
			}
		});
	}
	
	toggle(e,field,t=''){
		e.preventDefault();
		e.stopPropagation();
		if(t){
			this.setState({
	      [field]: !this.state[field],
	      [t]:!this.state[t],
	    });
	    if(t==='dingshiVisable' && calendar.value){
	    	calendar.value='';
	    }
		}else{
	    this.setState({
	      [field]: !this.state[field],
	    });
		}
  }
  check(e,t,field){
		e.preventDefault();
		e.stopPropagation();
    this.setState({
      [t]: field,
    });
  }
  handerProgress(t){
  	let {title}=this.state;
  	if(t===1){//-
  		title--;
  		if(title<16)title=16;
  	}else{//+
  		title++;
  		if(title>30)title=30;
  	}
  	this.setState({title});
  }
  getTimeType(time=''){
  	if(!time && !calendar.value) return '';
  	if(!time) time=calendar.value;
  	let h=new Date().getHours(),m=new Date().getMinutes();
  	let _h=time.split(':')[0],_m=time.split(':')[1];
  	if(parseInt(_h)>parseInt(h))
  		return '今天';
  	if(parseInt(_h)===parseInt(h) && parseInt(_m)>parseInt(m))
  		return '今天';
  	return '明天'
  }
	render(){
		const {moshiOpen,fengsuOpen,moshiVisable,fengsuVisable,dingshiOpen,dingshiVisable,
			progress,moshiCheck,fengsuCheck,title,btnsOpen,airOpen,
			ecoOpen,youshuimianOpen,zuoyoubaifengOpen,shangxiabaifengOpen} =this.state;
		const {location} =this.props;
		let animation=location && location.query && location.query.animation?location.query.animation:'';
		let moshiImg,fengsuImg,moshiTxt='',fengsuTxt='';
		switch(moshiCheck){
			case 'zhileng':moshiImg=require('./images/模式/制冷1.png');moshiTxt='制冷';break;
			case 'zhire':moshiImg=require('./images/模式/制热1.png');moshiTxt='制热';break;
			case 'zidong':moshiImg=require('./images/模式/模式.png');moshiTxt='自动';break;
			case 'songfeng':moshiImg=require('./images/模式/送风1.png');moshiTxt='送风';break;
			case 'chushi':moshiImg=require('./images/模式/除湿1.png');moshiTxt='除湿';break;
		}
		switch(fengsuCheck){
			case 'gaofeng':fengsuImg=require('./images/风速/高风1.png');fengsuTxt='高风';break;
			case 'zhongfeng':fengsuImg=require('./images/风速/中风1.png');fengsuTxt='中风';break;
			case 'difeng':fengsuImg=require('./images/风速/低风1.png');fengsuTxt='低风';break;
			case 'zidongfeng':fengsuImg=require('./images/风速/风速.png');fengsuTxt='自动';break;
		}
		let proWidth='';
		if(title){
			proWidth=`${title/30*100}%`;
		}
		return (
			<section className={cs('air',animation?animation:'',airOpen?'':'air-close')}>
				<header>
					空调
				</header>
				<Link to={`/room?animation=lefttoright&airOpen=${airOpen}`} className="q-button-prev color-white"></Link>
				<div className={cs('air-switch','icon-btn',airOpen?'open':'')} onClick={e=>this.toggle(e,'airOpen')}></div>
				{
					airOpen?
					<div className="page">
						<div className="temperature">
							<div className="info show-ani">
								<div className="title">{title}<sup>o</sup></div>
								<div className="desc">室内22℃</div>
							</div>
							<div className="action">
								<button onClick={e=>this.handerProgress(1)}>−</button>
								<div className="progress">
									<span style={{width:proWidth}}></span>
								</div>
								<button onClick={e=>this.handerProgress(2)}>+</button>
							</div>
							<div className="msg">{calendar.value?`关机时间：${this.getTimeType()}${calendar.value}`:' '}</div>
						</div>
						<div className={cs('btns',btnsOpen?'open':'')}>
							<span className={cs('arrow',btnsOpen?'':'down')} onClick={e=>this.toggle(e,'btnsOpen')}></span>
							<div onClick={e=>this.toggle(e,'moshiOpen','moshiVisable')} className="icon-btn">
								<img src={moshiImg} alt="模式"/>
								<p>{moshiTxt}</p>
							</div>
							<div onClick={e=>this.toggle(e,'fengsuOpen','fengsuVisable')} className="icon-btn">
								<img src={fengsuImg} alt="风速"/>
								<p>{fengsuTxt}</p>
							</div>
							{
								dingshiVisable?
								<div className="icon-btn" onClick={e=>this.toggle(e,'dingshiOpen')}>
									<img src={require('./images/定时.png')} alt="定时"/>
									<p>定时关机</p>
								</div>
								:
								<div id="timePicker" data-notShow={dingshiVisable} className="icon-btn unactive">
									<img src={require('./images/定时.png')} alt="定时"/><p>定时</p>
								</div>
							}
							<div className={cs('icon-btn',ecoOpen?'':'unactive')} onClick={e=>this.toggle(e,'ecoOpen')}>
								<img src={require('./images/eco.png')} alt="ECO" /><p>ECO</p>
							</div>
							<div  className={cs('icon-btn',youshuimianOpen?'':'unactive')} onClick={e=>this.toggle(e,'youshuimianOpen')}>
								<img src={require('./images/优睡眠.png')} alt="优睡眠"/><p>优睡眠</p>
							</div>
							<div  className={cs('icon-btn',zuoyoubaifengOpen?'':'unactive')} onClick={e=>this.toggle(e,'zuoyoubaifengOpen')}>
								<img src={require('./images/左右摆风.png')} alt="左右摆风"/><p>左右摆风</p>
							</div>
							<div  className={cs('icon-btn',shangxiabaifengOpen?'':'unactive')} onClick={e=>this.toggle(e,'shangxiabaifengOpen')}>
								<img src={require('./images/上下摆风.png')} alt="上下摆风"/><p>上下摆风</p>
							</div>
							
						</div>
						
							<div className={cs('modal','moshi',moshiOpen?'show':'hide')}>
								<div className="mask" onClick={e=>this.toggle(e,'moshiOpen','moshiVisable')}></div>
								<div className="header">
									<span onClick={e=>this.toggle(e,'moshiOpen','moshiVisable')}>取消</span>
									模式
									<span  onClick={e=>this.toggle(e,'moshiOpen','moshiVisable')}>确定</span>
								</div>
								<div className={moshiCheck==='zhileng'?'check':''} onClick={e=>this.check(e,'moshiCheck','zhileng')}>
									<span className="icon zhileng">制冷</span>
								</div>
								<div className={moshiCheck==='zhire'?'check':''} onClick={e=>this.check(e,'moshiCheck','zhire')}>
									<span className="icon zhire">制热</span>
								</div>
								<div className={moshiCheck==='zidong'?'check':''} onClick={e=>this.check(e,'moshiCheck','zidong')}>
									<span className="icon zidong">自动</span>
								</div>
								<div className={moshiCheck==='songfeng'?'check':''} onClick={e=>this.check(e,'moshiCheck','songfeng')}>
									<span className="icon songfeng">送风</span>
								</div>
								<div className={moshiCheck==='chushi'?'check':''} onClick={e=>this.check(e,'moshiCheck','chushi')}>
									<span className="icon chushi">除湿</span>
								</div>
							</div>
							
						
							<div className={cs('modal','fengsu',fengsuOpen?'show':'hide')}>
								<div className="mask" onClick={e=>this.toggle(e,'fengsuOpen','fengsuVisable')}></div>
								<div className="header">
									<span onClick={e=>this.toggle(e,'fengsuOpen','fengsuVisable')}>取消</span>
									风速
									<span onClick={e=>this.toggle(e,'fengsuOpen','fengsuVisable')}>确定</span>
								</div>
								<div className={fengsuCheck==='gaofeng'?'check':''} onClick={e=>this.check(e,'fengsuCheck','gaofeng')}>
									<span className="icon gaofeng">高风</span>
								</div>
								<div className={fengsuCheck==='zhongfeng'?'check':''} onClick={e=>this.check(e,'fengsuCheck','zhongfeng')}>
									<span className="icon zhongfeng">中风</span>
								</div>
								<div className={fengsuCheck==='difeng'?'check':''} onClick={e=>this.check(e,'fengsuCheck','difeng')}>
									<span className="icon difeng">低风</span>
								</div>
								<div className={fengsuCheck==='zidongfeng'?'check':''} onClick={e=>this.check(e,'fengsuCheck','zidongfeng')}>
									<span className="icon zidongfeng">自动</span>
								</div>
							</div>
							<div className={cs('modal','dingshi',dingshiOpen?'show':'hide')}>
								<div className="mask" onClick={e=>this.toggle(e,'dingshiOpen','dingshiVisable')}></div>
								<div className="header">
									<span onClick={e=>this.toggle(e,'dingshiOpen')}>取消</span>
									定时关机
									<span onClick={e=>this.toggle(e,'dingshiOpen','dingshiVisable')}>关闭定时</span>
								</div>
								<div className="body">
									<p className="lg">{calendar.value}</p>
									<p className="desc">关机时间<span>明天</span></p>
								</div>
							</div>
					</div>
					:
					null
				}

			</section>
		)
	}
}
export default Air