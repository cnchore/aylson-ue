import React,{Component} from 'react'
import './recipes';
import {hashHistory,Link} from 'react-router';
import cs from 'classnames';

class Recipes extends Component{
	constructor(props) {
	  super(props);
	
	  this.state = {
			
	  };

	}
	
  toggle(e,field){
		e.preventDefault();
		e.stopPropagation();
		// hashHistory.push('/recipes/detail?animation=righttoleft&code='+field)
		this.props.toggleRecipesDetail(true,field)
  }
  
	render(){
		// const { } =this.state;
		// const {location} =this.props;
		// let animation=location && location.query && location.query.animation?location.query.animation:'';
		
		return (
			<section className={cs('recipes')} style={this.props.style}
				>
				<div className="q-state"></div>
				<header>
					健康食谱
					<span onClick={e=>this.props.toggleRecipes(false)} className="q-button-prev-white"></span>
				</header>
				<div className="page">
					<div className="q-list" onClick={e=>this.toggle(e,'xhsm')}>
						<div className="q-list-content">
							<img src={require('./images/xhsm.jpg')}  alt="西红柿鸡汤面"/>
							<div className="q-list-title">西红柿鸡汤面</div>
							<div className="q-list-desc">
								<span>面条</span>
								<span>煮</span>
								<span>早餐食谱</span>
							</div>
						</div>
					</div>

					<div className="q-list" onClick={e=>this.toggle(e,'xgb')}>
						<div className="q-list-content">
							<img src={require('./images/xgb.png')}  alt="香菇卤肉包子"/>
							<div className="q-list-title">香菇卤肉包子</div>
							<div className="q-list-desc">
								<span>包子</span>
								<span>蒸</span>
								<span>蒸箱食谱</span>
							</div>
						</div>
					</div>

					<div className="q-list" onClick={e=>this.toggle(e,'nndd')}>
						<div className="q-list-content">
							<img src={require('./images/nndd.jpg')}  alt="牛奶炖蛋"/>
							<div className="q-list-title">牛奶炖蛋</div>
							<div className="q-list-desc">
								<span>蛋类</span>
								<span>蒸</span>
								<span>晚餐食谱</span>
							</div>
							<span className="ponly">秘制</span>
						</div>
					</div>

					<div className="q-list" onClick={e=>this.toggle(e,'syysz')}>
						<div className="q-list-content">
							<img src={require('./images/syysz.jpeg')}  alt="山药养生粥"/>
							<div className="q-list-title">山药养生粥</div>
							<div className="q-list-desc">
								<span>粥</span>
								<span>煮</span>
								<span>养生食谱</span>
							</div>
						</div>
					</div>

					<div className="q-list" onClick={e=>this.toggle(e,'jcjdb')}>
						<div className="q-list-content">
							<img src={require('./images/jcjdb.jpg')}  alt="韭菜鸡蛋煎饼"/>
							<div className="q-list-title">韭菜鸡蛋煎饼</div>
							<div className="q-list-desc">
								<span>饼</span>
								<span>煎</span>
								<span>早餐食谱</span>
							</div>
						</div>
					</div>
					<div className="q-list" onClick={e=>this.toggle(e,'yjhxz')}>
						<div className="q-list-content">
							<img src={require('./images/yjhxz.jpeg')}  alt="什锦海鲜粥"/>
							<div className="q-list-title">什锦海鲜粥</div>
							<div className="q-list-desc">
								<span>粥</span>
								<span>煲</span>
								<span>早餐食谱</span>
							</div>
							<span className="ponly">秘制</span>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default Recipes