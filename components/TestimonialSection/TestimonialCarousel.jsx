"use client"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules'; 
import 'swiper/css'; 
import 'swiper/css/pagination';
import './testimonial.css';
import TestimonialCard from './TestimonialCard';

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <Swiper
      slidesPerView={1} 
      centeredSlides={true} 
      initialSlide={1} 
      spaceBetween={30} 
      pagination={{
        clickable: true,
      }}
      modules={[Pagination]}
      className="testimonial-swiper"
      breakpoints={{ 
        1080: {
          slidesPerView: 1.73, // Adjust this value for larger screens
          spaceBetween: 30,
        },
      }}
    >
      {testimonials?.map((testimonial, index) => (
        <SwiperSlide key={index}>
          <TestimonialCard testimonial={testimonial}/> 
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default TestimonialCarousel;
