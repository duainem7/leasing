import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'react-bootstrap/Image';
import image_one from './images/im1.jpg'
import image_two from './images/im2.jpg'
import image_three from './images/im3.jpg'
import image_four from './images/im4.jpg'
import image_five from './images/im5.jpg'
import image_six from './images/im6.jpg'
import image_seven from './images/im7.jpg'
import image_eight from './images/im8.jpg'
import image_nine from './images/im9.jpg'
import image_ten from './images/im10.jpg'
import image_eleven from './images/im11.jpg'
import image_twelve from './images/im12.jpg'
import image_thirteen from './images/im13.jpg'
import image_fourteen from './images/im14.jpg'
import image_fifteen from './images/im15.jpg'


// Import Swiper styles
import 'swiper/css';

 function Swipe(){
  return (
    <Swiper
        style={{width: '70vw', height: '80vh'}}
      spaceBetween={50}
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image src={image_one} /></SwiperSlide>
      <SwiperSlide><Image src={image_two} /></SwiperSlide>
      <SwiperSlide><Image src={image_three} /></SwiperSlide>
      <SwiperSlide><Image src={image_four} /></SwiperSlide>
      <SwiperSlide><Image src={image_five} /></SwiperSlide>
      <SwiperSlide><Image src={image_six} /></SwiperSlide>
      <SwiperSlide><Image src={image_seven} /></SwiperSlide>
      <SwiperSlide><Image src={image_eight} /></SwiperSlide>
      <SwiperSlide><Image src={image_nine} /></SwiperSlide>
      <SwiperSlide><Image src={image_ten} /></SwiperSlide>
      <SwiperSlide><Image src={image_eleven} /></SwiperSlide>
      <SwiperSlide><Image src={image_twelve} /></SwiperSlide>
      <SwiperSlide><Image src={image_thirteen} /></SwiperSlide>
      <SwiperSlide><Image src={image_fourteen} /></SwiperSlide>
      <SwiperSlide><Image src={image_fifteen} /></SwiperSlide>
    
      
    </Swiper>
  );
};


export default Swipe