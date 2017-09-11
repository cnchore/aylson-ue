import React,{Component} from 'react'
import Swiper from 'swiper-r'
// import Door from '../Door';
import Room from '../Room';
import Kitchen from '../Kitchen';
import {Link} from 'react-router';

class SwiperPage extends Component{
    constructor(props) {
      super(props);
    
      this.state = {
        activeIndex:0,
      };
    }
    render(){
        const {activeIndex,opacity} =this.state;
        var config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 1,
            spaceBetween: 0,
            scrollbar:null,
            nextButton: null,
            prevButton: '.swiper-button-prev',
            onSlideChangeEnd:(swiper)=>{
                this.setState({
                    activeIndex:swiper.activeIndex
                })
            }
        };
        
		return (
    	   <div id="demo-slides-per-view" className="demo-wrapper">
                <Swiper swiperConfig={ config }>
                    <Room className="swiper-slide"></Room>
                    <Kitchen className="swiper-slide"></Kitchen>
                </Swiper>
                <div className="swiper-pagination"></div>
                {
                    activeIndex===0?
                    <Link to="/" className="q-button-prev" ></Link>
                    :
                    <div className="swiper-button-prev"></div>
                }
            </div>
		)
	}
}
export default SwiperPage