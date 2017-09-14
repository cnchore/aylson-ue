import React,{Component} from 'react';
import './model';
import cs from 'classnames'
class Model extends Component{
	constructor(props) {
	  super(props);
	  this.state = {
	  	modelVisable:props.modelVisable,
	  };
	  
	}
	pauseEvent(e){
		e.stopPropagation&&e.stopPropagation();
		e.preventDefault&&e.preventDefault();
		return false;
	}
	cancelFun(e){
		this.setState({modelVisable:false})
		setTimeout(()=>{
			this.props.cancelFun&&this.props.cancelFun(false);
		},1000)
		this.pauseEvent(e);
	}
	handerMask(e){
		if(e.target && e.target.className.indexOf('q-model-wrap')>-1){
			this.setState({modelVisable:false})
			setTimeout(()=>{
				this.props.cancelFun&&this.props.cancelFun(false);
			},1000)
		}
		this.pauseEvent(e);
	}
	okFun(e){
		this.setState({modelVisable:false})
		setTimeout(()=>{
			this.props.okFun&&this.props.okFun();
		},1000)
		this.pauseEvent(e);
	}
	render(){
		const {cancelText,okText,title,children}=this.props;
		const {modelVisable}=this.state;
		// console.log('model props:',this.props)
		return(
			<div className={cs('q-model',modelVisable?'open':'close')}>
				<div className={cs('q-model-mask',modelVisable?'open':'close')} ></div>
				<div className={cs('q-model-wrap',modelVisable?'open':'close')} onClick={e=>this.handerMask(e)}>
					<div className={cs('q-model-content',modelVisable?'open':'close')}>
						<div className="q-model-header">
							<span onClick={e=>this.cancelFun(e)} className="-left">{cancelText}</span>
							{title&&title}
							<span onClick={e=>this.okFun(e)}  className="-right">{okText}</span>
						</div>
						<div className="q-model-body">
							{children && children}
						</div>
					</div>
				</div>
			</div>
		)
	}
}
Model.defaultProps={
  	cancelText: '取消',
	  okText:'确定',
	  modelVisable:false,
}
export default Model