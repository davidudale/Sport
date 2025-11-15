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
    <section className="bg-red-400 py-2 mb-3 md:py-16 ">
     
    </section>
  );
};

export default FeatureBar;