'use client'
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';

// --- Types ---

interface Testimonial {
  id: number;
  image: string;
  quote: string;
  name: string;
  role: string;
}

// --- Data ---

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop",
    quote: "Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.",
    name: "Christine Beckam",
    role: "Designer"
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop",
    quote: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos.",
    name: "Michael Chen",
    role: "Travel Blogger"
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop",
    quote: "Vel officiis dolor ea illo aut eligendi ullam non laudantium magnam et recusandae molestiae sit iure unde aut voluptate quaerat. Id sunt provident quo possimus impedit vel doloremque obcaecati qui ullam consectetur et ipsum omnis.",
    name: "Sarah Johnson",
    role: "Photographer"
  }
];

// --- Components ---

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 px-4 md:px-8 bg-[#FEFCFB] font-sans overflow-hidden relative">
      {/* Decorative Background Elements */}
      
      {/* Seashell - Top Left */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="absolute top-10 left-10 md:left-20 w-24 h-24 md:w-32 md:h-32 opacity-80"
      >
        <img 
          src="https://images.unsplash.com/photo-1551244072-5d12893278ab?q=80&w=200&auto=format&fit=crop" 
          alt="Seashell"
          className="w-full h-full object-contain drop-shadow-lg"
        />
      </motion.div>

      {/* Polaroid Photos - Top Right */}
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="absolute top-10 right-10 md:right-20 w-32 h-40 md:w-40 md:h-48"
      >
        <div className="relative transform rotate-6 hover:rotate-0 transition-transform duration-300">
          <div className="bg-white p-2 pb-8 shadow-xl rounded-sm">
            <img 
              src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=300&auto=format&fit=crop" 
              alt="Travel memory"
              className="w-full h-28 md:h-36 object-cover"
            />
          </div>
        </div>
      </motion.div>

      {/* Travel Items - Bottom Left */}
      <motion.div 
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="absolute bottom-10 left-5 md:left-10 w-40 h-32 md:w-48 md:h-40"
      >
        <img 
          src="https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=400&auto=format&fit=crop" 
          alt="Travel items"
          className="w-full h-full object-contain drop-shadow-lg transform -rotate-12"
        />
      </motion.div>

      {/* Main Content Container */}
      <div className="max-w-4xl mx-auto relative z-10">
        
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-[#DF6951] font-bold tracking-widest text-sm uppercase mb-2 block">
            Promotion
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B] font-serif">
            See What Our Clients Say <br className="hidden md:block" /> About Us
          </h2>
        </motion.div>

        {/* Testimonial Card */}
        <div className="relative">
          {/* Navigation Arrows */}
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={prevTestimonial}
            className="absolute left-0 md:-left-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#181E4B] text-white flex items-center justify-center shadow-lg hover:bg-[#DF6951] transition-colors z-20"
          >
            <ChevronLeft size={24} />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={nextTestimonial}
            className="absolute right-0 md:-right-16 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-[#181E4B] text-white flex items-center justify-center shadow-lg hover:bg-[#DF6951] transition-colors z-20"
          >
            <ChevronRight size={24} />
          </motion.button>

          {/* Testimonial Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTestimonial.id}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.4 }}
              className="text-center px-8 md:px-16"
            >
              {/* Avatar */}
              <div className="relative inline-block mb-6">
                <div className="w-20 h-20 md:w-24 md:h-24 rounded-full overflow-hidden border-4 border-white shadow-lg mx-auto">
                  <img 
                    src={currentTestimonial.image} 
                    alt={currentTestimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Decorative ring */}
                <div className="absolute inset-0 rounded-full border-2 border-[#DF6951] transform scale-110 opacity-50"></div>
              </div>

              {/* Quote */}
              <div className="relative mb-6">
                <Quote className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 text-[#DF6951] opacity-30" />
                <p className="text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto italic">
                  {currentTestimonial.quote}
                </p>
              </div>

              {/* Author Info */}
              <div>
                <h4 className="text-[#181E4B] font-bold text-lg">
                  {currentTestimonial.name}
                </h4>
                <span className="text-[#DF6951] text-sm font-medium">
                  - {currentTestimonial.role}
                </span>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex 
                    ? 'w-8 bg-[#DF6951]' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;