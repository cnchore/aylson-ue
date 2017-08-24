import React,{Component} from 'react'
import png1 from './images/1.png'
import png2 from './images/2.png'
import png4 from './images/4.png'
import './door'

class Door extends Component{
	render(){
		return (
			<section className="index">
				<header>
					设备体验专区
				</header>
				<div className="page">
					<div className="top">
						<p>开启门锁进入我的家</p>
						<p>更多智能家居一窥全貌</p>
					</div>
					<div className="main">
						<div className="left">
							<div className="top"></div>
							<div className="bottom"></div>
						</div>
						<div className="center">
							<div className="door">
								<div className="tool">
									<i></i>
									<i></i>
									<i></i>
								</div>
								<div className="equipment">
									<div className="l-t">
										<img src={png1} alt="密码锁" className="q-img look" />
										<img src={png2} alt="门铃" className="q-img bell" />
									</div>
									<div className="l-b">
										<img src={png4} alt="指纹识别" className="q-img finger-mark" />
										<div className="tips">
											<span className="point"></span>
											<span className="content">按下指纹解锁</span>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="right">
							<div className="top"></div>
							<div className="bottom"></div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default Door