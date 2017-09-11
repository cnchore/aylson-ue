import React,{Component} from 'react'
import './kitchen'
class Kitchen extends Component{
	render(){
		return (
			<section className="kitchen">
				<header>
					厨房
				</header>
				<div className="page">
					<div className="light">
						<div className="tips">
							<span className="point"></span>
							<span className="content">灯</span>
						</div>
					</div>
					<div className="window">
						<div className="left"></div>
						<div className="frame"></div>
						<div className="right"></div>
						<div className="tips">
							<span className="point"></span>
							<span className="content">电动窗</span>
						</div>
					</div>
					<div className="fan">
						<div className="tips">
							<span className="point"></span>
							<span className="content">抽风机</span>
						</div>
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
						<div className="machine">
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
						<div className="icon btn-fridge">冰箱</div>
						<div className="icon btn-light">主灯</div>
						<div className="icon btn-smoke-machine">抽烟机</div>
						<div className="icon btn-fan">抽风机</div>
						<div className="icon btn-air-blower">送风机</div>
						<div className="icon btn-light-belt">灯带</div>
						<div className="icon btn-win">电动窗</div>
						<div className="icon btn-recipes">健康食谱</div>
					</div>
				</div>
			</section>
		)
	}
}
export default Kitchen