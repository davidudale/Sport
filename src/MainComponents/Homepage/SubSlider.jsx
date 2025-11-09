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
    src: 'https://images.unsplash.com/photo-1579952723402-951590214a60?fit=crop&w=600&h=400&q=80',
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
    src: 'https://images.unsplash.com/photo-1574347719655-b461f89315d1?fit=crop&w=600&h=400&q=80',
    title: 'Elite Basketball',
    description: 'Perfect bounce and feel for indoor or outdoor courts.',
    price: '₦39.99',
    link: '/product/basketball'
  },
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1552670737-02390a8a706b?fit=crop&w=600&h=400&q=80',
    title: 'Ergonomic Bike Helmet',
    description: 'Stay safe with advanced ventilation and fit system.',
    price: '₦79.50',
    link: '/product/bike-helmet'
  },
  {
    id: 5,
    src: 'https://images.unsplash.com/photo-1546862590-e07593c72b25?fit=crop&w=600&h=400&q=80',
    title: 'Professional Tennis Racket',
    description: 'Precision and power for every serve and volley.',
    price: '₦150.00',
    link: '/product/tennis-racket'
  },
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1521412643770-128a3952d43e?fit=crop&w=600&h=400&q=80',
    title: 'Durable Gym Bag',
    description: 'Spacious compartments for all your workout essentials.',
    price: '₦55.00',
    link: '/product/gym-bag'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1543851502-3932cf472ccf?fit=crop&w=600&h=400&q=80',
    title: 'Yoga Mat Pro',
    description: 'Non-slip surface for perfect balance and comfort.',
    price: '₦30.00',
    link: '/product/yoga-mat'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1606787944431-155c06d64993?fit=crop&w=600&h=400&q=80',
    title: 'Wireless Sports Earbuds',
    description: 'Sweat-proof, secure fit for uninterrupted music.',
    price: '₦89.99',
    link: '/product/earbuds'
  },
  {
    id: 9,
    src: 'https://images.unsplash.com/photo-1517649763962-0c623063e269?fit=crop&w=600&h=400&q=80',
    title: 'Hydration Bottle',
    description: 'Keep your fluids cold for hours during intense activity.',
    price: '₦22.00',
    link: '/product/bottle'
  },
];

const SubSlider = () => {
  return (
    <div className="container mx-auto px-4 py-8 lg:py-12">
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">Featured Products</h2>
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