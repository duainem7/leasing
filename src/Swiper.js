import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Keyboard, EffectCards, Thumbs } from 'swiper/modules';
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
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import 'swiper/css/keyboard';
import 'swiper/css/effect-cards';
import 'swiper/css/thumbs';
 function Swipe(){
  return (
    <Swiper
    modules={[Navigation, Pagination, A11y, Keyboard, EffectCards, Thumbs]}
        style={{width: '63vw', height: '65vh', marginBottom: '35px'}}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      effect='cards'
      thumbs
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide><Image src={image_one} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_two} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_three} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_four} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_five} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_six} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_seven} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_eight} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_nine} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_ten} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_eleven} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_twelve} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_thirteen} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_fourteen} fluid/></SwiperSlide>
      <SwiperSlide><Image src={image_fifteen} fluid/></SwiperSlide>
    
      
    </Swiper>
  );
};


export default Swipe