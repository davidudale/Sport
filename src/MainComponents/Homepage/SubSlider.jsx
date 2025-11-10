import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'; // Added for arrows on desktop
import 'swiper/css/autoplay'; // Added for autoplay functionality

// Import required modules
import { Pagination, Navigation, Autoplay } from 'swiper/modules'; // Added Navigation and Autoplay

// Attractive Image Data (using reliable Unsplash CDN links)
const subSliderItems = [
  {
    id: 1,
    src: 'https://images.unsplash.com/photo-1660926655155-8b1f8f9079f5?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    title: 'Pro Soccer Ball',
    description: 'Elevate your game with superior grip and flight.',
    price: '₦49.99',
    link: '/product/soccer-ball'
  },
  {
    id: 2,
    src: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?fit=crop&w=600&h=400&q=80',
    title: 'Performance Running Shoes',
    description: 'Lightweight design for ultimate speed and comfort.',
    price: '₦129.00',
    link: '/product/running-shoes'
  },
  {
    id: 3,
    src: 'https://plus.unsplash.com/premium_photo-1671466192305-8d0d6b0115e4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
    title: 'Elite Basketball',
    description: 'Perfect bounce and feel for indoor or outdoor courts.',
    price: '₦39.99',
    link: '/product/basketball'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1590093105704-fddd246ab64f?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=860',
    title: 'Ergonomic Bike Helmet',
    description: 'Stay safe with advanced ventilation and fit system.',
    price: '₦79.50',
    link: '/product/bike-helmet'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1622163642998-1ea32b0bbc67?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=735',
    title: 'Professional Tennis Racket',
    description: 'Precision and power for every serve and volley.',
    price: '₦150.00',
    link: '/product/tennis-racket'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1575094375693-a04255f1c4f4?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870',
    title: 'Durable Gym Bag',
    description: 'Spacious compartments for all your workout essentials.',
    price: '₦55.00',
    link: '/product/gym-bag'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1746796751590-a8c0f15d4900?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=774',
    title: 'Yoga Mat Pro',
    description: 'Non-slip surface for perfect balance and comfort.',
    price: '₦30.00',
    link: '/product/yoga-mat'
  },
  {
    id: 8,
    src: 'https://plus.unsplash.com/premium_photo-1668418188837-d40b734ed6d2?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=687',
    title: 'Wireless Sports Earbuds',
    description: 'Sweat-proof, secure fit for uninterrupted music.',
    price: '₦89.99',
    link: '/product/earbuds'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1648313021325-d81f28d57824?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=387',
    title: 'Hydration Bottle',
    description: 'Keep your fluids cold for hours during intense activity.',
    price: '₦22.00',
    link: '/product/bottle'
  },
];

const SubSlider = () => {
  return (
    <div className="container mx-auto px-4 py-4 lg:py-4">
      <h2 className="text-3xl font-bold text-gray-800 mb-3 text-center">Featured Products</h2>
      <Swiper
        // Responsive breakpoints for slidesPerView
        slidesPerView={1.2} // Show 1.2 slides on very small screens for a peek at the next
        spaceBetween={20}
        breakpoints={{
          640: { // sm breakpoint
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: { // md breakpoint
            slidesPerView: 3,
            spaceBetween: 30,
          },
          1024: { // lg breakpoint
            slidesPerView: 4,
            spaceBetween: 30,
          },
          1280: { // xl breakpoint
            slidesPerView: 5, // Show 5 on very large screens
            spaceBetween: 30,
          },
        }}
        autoplay={{ // Optional: Autoplay for continuous scrolling
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true} // Enable navigation arrows
        loop={true} // Loop the slides
        modules={[Autoplay, Pagination, Navigation]} // Load necessary modules
        className="mySwiper !pb-10" // Added padding-bottom for pagination dots
      >
        {subSliderItems.map((item) => (
          <SwiperSlide key={item.id}>
            <div className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
              <img
                src={item.src}
                alt={item.title}
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold text-gray-800 mb-1 line-clamp-1">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2 line-clamp-2">{item.description}</p>
                <p className="text-xl font-bold text-indigo-600 mb-3">{item.price}</p>
                <a 
                  href={item.link} 
                  className="inline-block bg-indigo-600 text-white text-sm font-medium px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                  View Product
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SubSlider;