import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/autoplay'; // If you want autoplay

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules';

// Example Images (replace with your actual image paths or URLs)
const sliderImages = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photos/soccer-ballcleats-and-various-football-stuff-laid-on-wooden-floor-studio-shot-on-white-background-flat-lay-knolling-PeYwn2z2Dsk',
    alt: 'Football match in a stadium',
    caption: 'Experience the Thrill of the Game'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    alt: 'Pair of vibrant red running shoes',
    caption: 'Step Up Your Game with Our Latest Footwear'
  },
  {
    id: 3,
    src: 'https://images.unsplash.com/photo-1721339039111-9b2ab749ae08?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1031',
    alt: 'Basketball player mid-action',
    caption: 'Dunk into Our Basketball Collection'
  },
  {
    id: 4,
    src: 'https://plus.unsplash.com/premium_photo-1663039820698-8bcf99ad5b74?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=869',
    alt: 'Tennis racket and ball on a court',
    caption: 'Ace Your Style with Tennis Gear'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1625669371422-eab5505831b2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    alt: 'Cycling in nature',
    caption: 'Ride Further, Ride Stronger'
  },
  {
    id: 6,
    src: 'https://plus.unsplash.com/premium_photo-1664536967999-f75d4f4b95fb?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=871',
    alt: 'Gym workout equipment',
    caption: 'Achieve Your Fitness Goals'
  },
];

const SwiperSlider = () => {
  return (
    <div className="w-full relative overflow-hidden my-3 lg:my-1  shadow-xl">
      <Swiper
        spaceBetween={30} // Space between slides
        centeredSlides={true} // Center slides if there are fewer than view
        autoplay={{
          delay: 4500, // Time between slides in ms
          disableOnInteraction: false, // Keep autoplaying even after user interaction
        }}
        pagination={{
          clickable: true, // Allow clicking on pagination dots
        }}
        navigation={true} // Enable next/prev navigation arrows
        loop={true} // Loop through slides
        modules={[Autoplay, Pagination, Navigation]} // Load necessary modules
        className="mySwiper h-[250px] md:h-[400px] lg:h-[200px] xl:h-[300px]" // Responsive height
      >
        {sliderImages.map((image) => (
          <SwiperSlide key={image.id}>
            <div className="relative w-full h-full">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-full object-cover" // Ensure image covers the slide area
              />
              {/* Optional: Add an attractive overlay and caption */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent flex items-end justify-center text-center p-4">
                <h2 className="text-white text-xl md:text-3xl lg:text-4xl font-bold drop-shadow-lg leading-tight">
                  {image.caption}
                </h2>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperSlider;