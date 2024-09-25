// About.js

// import React from 'react';

// const About = () => {
//     return <div>About us</div>;
// };

// export default About;



import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
// import 'swiper/swiper-bundle.min.css';
// import 'swiper/swiper.min.css';

// Import Swiper modules from 'swiper/modules'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// Import Swiper CSS
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const SwiperComponent = () => {
  return (
    <Swiper
      modules={[Autoplay, Pagination, Navigation]}
      spaceBetween={30}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 2000,
        disableOnInteraction: false,
      }}
      speed={600} // Transition duration in milliseconds
      style={{ transitionTimingFunction: 'linear' }} // Linear transition
      pagination={{ clickable: true }}
      navigation={true}
    >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
