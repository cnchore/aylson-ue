import React,{Component} from 'react'
import Swiper from 'swiper-r'
import Door from '../Door';
import Room from '../Room';

class SwiperPage extends Component{
    render(){
        var config = {
            pagination: '.swiper-pagination',
            paginationClickable: true,
            slidesPerView: 1,
            spaceBetween: 0,
            scrollbar:null,
            nextButton: null,
            prevButton: '.swiper-button-prev',
            
        };
		return (
    	   <div id="demo-slides-per-view" className="demo-wrapper">
                <Swiper swiperConfig={ config }>
                    <Door className="swiper-slide"></Door>
                    <Room className="swiper-slide"></Room>
                    <div className="swiper-slide">Slide 3</div>
                </Swiper>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
            </div>
		)
	}
}
export default SwiperPage