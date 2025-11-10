import React from 'react';
// Using Lucid React icons for a cleaner, modern look
import { Truck, RefreshCw, Lock } from 'lucide-react'; 

const FeatureBar = () => {
  const features = [
    {
      icon: Truck, // Lucide icon component
      title: 'Global Delivery',
      details: 'Free delivery on your first order and all orders over ₦50,000.',
    },
    {
      icon: RefreshCw, // Lucide icon component
      title: 'Hassle-Free Returns',
      details: '30-Day Money Back Guarantee for easy, stress-free returns.',
    },
    {
      icon: Lock, // Lucide icon component
      title: 'Secure Payments',
      details: 'We use 256-bit encryption for 100% secure payment protection.',
    },
  ];

  return (
    <section className="bg-red-400 py-3 md:py-16 ">
      <div className="container mx-auto px-4">
        
        {/* Responsive Grid: Stacks on mobile, 3 columns on desktop */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
          {features.map((feature, index) => (
            
            <div 
              key={index} 
              className="group flex flex-col items-center text-center p-6 sm:p-8 bg-gray-50 rounded-2xl transition duration-500 
                         shadow-sm hover:shadow-xl hover:ring-4 hover:ring-indigo-100/50"
            >
              
              {/* Icon Container: Large, vibrant, and changing on hover */}
              <div className="p-2 bg-indigo-50 rounded-full mb-2 md:mb-6 
                            group-hover:bg-indigo-600 transition duration-300">
                <feature.icon 
                  className="w-8 h-8 text-indigo-600 group-hover:text-white transition duration-300" 
                  aria-hidden="true" 
                />
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {feature.title}
              </h3>
              
              {/* Details */}
              <p className="text-sm text-gray-600 max-w-xs">
                {feature.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureBar;