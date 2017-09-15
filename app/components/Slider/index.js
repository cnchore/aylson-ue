import React,{Component} from 'react';
import './slider';
import cs from 'classnames';
class Slider extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
	  	value:0,
	  	step:1,
	  	min:0,
	  	max:100,
	  	startPosition:0,
	  	sliderLength:0,
	  	sliderStart:0,
	  	upperBound:0,
			handleSize:0,
	  	startValue:props.defaultValue,
	  };
	}
	puseEvent(e){
		e.stopPropagation&&e.stopPropagation();
		e.preventDefault&&e.preventDefault();
		return false;
	}
	stopPropagation(e){
		e.stopPropagation && e.stopPropagation();
		return false;
	}
	_handleResize(){
		let slider = this.refs.slider;
    let handle =this.refs.sliderbtn;
    let rect = slider.getBoundingClientRect();
    let size = 'clientWidth';

    let sliderMax = rect['right'];
    let sliderMin = rect['left'];

    this.setState({
      upperBound: slider[size] - handle[size],
      sliderLength: Math.abs(sliderMax - sliderMin - 17),
      handleSize: handle[size],
      sliderStart: sliderMin,
    });
	}
	_getValueFromPosition(position) {
		var _state=this.state;
    var diffValue = position / (_state.sliderLength) * (_state.max - _state.min);
    // console.log('diffValue:',diffValue)
    return this._trimAlignValue(_state.startValue+diffValue);
  }
  _trimAlignValue(val, props) {
  	return this._alignValue(this._trimValue(val, props), props);
  }

  _trimValue(val, props) {
  	props = props || this.state;

  	if (val <= props.min) val = props.min;
  	if (val >= props.max) val = props.max;

  	return val;
  }
  _alignValue(val, props) {
  	props = props || this.state;

  	var valModStep = (val - props.min) % props.step;
  	var alignValue = val - valModStep;

  	if (Math.abs(valModStep) * 2 >= props.step) {
  		alignValue += (valModStep > 0) ? props.step : (-props.step);
  	}

  	return parseFloat(alignValue.toFixed(5));
  }
  _calcOffsetFromPosition(position) {
    var pixelOffset = position - this.state.sliderStart;
    // pixelOffset -= (this.state.handleSize / 2);
    return pixelOffset;
  }
  _calcValue(offset) {
  	var _state=this.state;
    var ratio = offset / _state.upperBound;
    return ratio * (_state.max - _state.min) + _state.min;
  }
	_move(endPosition){
		// this.hasMoved=true;
		let state=this.state;
		let props=this.props;
		let startPosition=state.startPosition;
		let diffPosition=endPosition-startPosition;
		let newvalue=this._getValueFromPosition(diffPosition);
		// console.log('endPosition:',newvalue)
		// console.log('move:',newvalue)
		this.setState({value:newvalue});

		props.onChange && props.onChange(this._getNewValue(newvalue));	
	}
	handerEnd(e){
		this.setState({startValue:this.setState.value})
		this.stopPropagation(e);
	}
	handerMove(e){
		if (e.touches.length > 1) return;
		let endPosition=e.touches[0].pageX;
		// console.log('endPosition:',endPosition)
		this.stopPropagation(e);
		this._move(endPosition);
	}
	handerStart(e){
		// this.hasMoved=false;
		let startPosition=e.touches[0].pageX;
		// console.log('startPosition:',startPosition)
		this.setState({startPosition,startValue:this.state.value})
		this.stopPropagation(e);
	}
	handleClick(e){
		// this.setState({startValue:0})
		let endPosition=e['pageX'];
		let valueAtPos = this._trimAlignValue(this._calcValue(this._calcOffsetFromPosition(endPosition)));
		// console.log('click:',e['pageX'],valueAtPos)
		this.puseEvent(e);
		// this._move(endPosition,this.state.value)
		this.setState({value:valueAtPos});
		this.props.onChange && this.props.onChange(this._getNewValue(valueAtPos));	
	}
	_getNewValue(position){
		let props=this.props;
		let minValue=props.minValue;
		let maxValue=props.maxValue;
		if(position===0){
			return minValue;
		}
		return (props.minValue + (maxValue - minValue) / 100 * position).toFixed(props.fixed);

	}
	_initValueAndStep(){
		let props=this.props,value=0,step=0;
		if(props.minValue>0 && props.maxValue-props.minValue===0)
			return {value,step}
		if(props.minValue>=props.maxValue)
			return {value,step}
		step=props.step * 100 / ( props.maxValue - props.minValue );
		value=Math.abs(props.defaultValue - props.minValue)/ ( props.maxValue - props.minValue ) * 100;
		return {value,step}
	}
	componentDidMount() {
		this.setState(this._initValueAndStep());
    this._handleResize();
  }
	render(){
		const {value} =this.state;
		return(
			<div className="q-slider" ref="slider"
				onClick={e=>this.handleClick(e)}
			>
				<div className="q-slider-progress" style={{width:`${value}%`}}
					onClick={e=>this.handleClick(e)}
				>
					<span className="q-slider-btn" ref="sliderbtn"
						onTouchStart={e=>this.handerStart(e)}
						onTouchMove={e=>this.handerMove(e)}
						onTouchEnd={e=>this.handerEnd(e)}
					>	
					</span>
				</div>
			</div>
		)
	}
}
Slider.defaultProps = {
  defaultValue: 0,
  step:1,
  fixed:0,
  minValue:-10,
  maxValue:10,
}
export default Slider