import React,{Component} from 'react'
import './room'
class Room extends Component{
	render(){
		return (
			<section className="room">
				<header>
					客厅
				</header>
				<div className="page">
					<div className="light">
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
						<div className="left-win"></div>
						<div className="right-win"></div>
					</div>
					<div className="curtains left">
						<div className="tips">
							<span className="point"></span>
							<span className="content">窗帘</span>
						</div>
					</div>
					<div className="curtains right"></div>
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
			</section>
		)
	}
}
export default Room