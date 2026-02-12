'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Star } from 'lucide-react';

// --- Types ---

interface FeaturedDestination {
  id: number;
  image: string;
  duration: string;
  people: string;
  title: string;
  location: string;
  rating: number;
  price: string;
  description: string;
}

// --- Data ---

const featuredDestinations: FeaturedDestination[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
    duration: "8 Days",
    people: "25 People Going",
    title: "Switzerland",
    location: "Europe",
    rating: 5,
    price: "1,000",
    description: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
    duration: "8 Days",
    people: "25 People Going",
    title: "Switzerland",
    location: "Europe",
    rating: 5,
    price: "1,000",
    description: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi. Et labore harum non nobis ipsum eum molestias mollitia et corporis praesentium a laudantium internos."
  }
];

// --- Components ---

const StarRating = ({ count }: { count: number }) => (
  <div className="flex gap-0.5">
    {[...Array(5)].map((_, i) => (
      <Star
        key={i}
        size={16}
        className={`${i < count ? "fill-[#F1C40F] text-[#F1C40F]" : "text-gray-300"}`}
      />
    ))}
  </div>
);

const DestinationCard = ({ destination, index }: { destination: FeaturedDestination; index: number }) => {
  const isEven = index % 2 === 0;
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-8 lg:gap-16 items-center`}
    >
      {/* Image Section */}
      <div className="w-full lg:w-1/2">
        <motion.div 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.4 }}
          className="relative overflow-hidden rounded-2xl shadow-2xl"
        >
          <img 
            src={destination.image} 
            alt={destination.title}
            className="w-full h-[300px] md:h-[400px] lg:h-[450px] object-cover"
          />
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
        </motion.div>
      </div>

      {/* Content Section */}
      <div className="w-full lg:w-1/2 space-y-4">
        {/* Meta Info */}
        <div className="flex items-center gap-6 text-sm text-gray-500 font-medium">
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-gray-400" />
            <span>{destination.duration}</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={16} className="text-gray-400" />
            <span>{destination.people}</span>
          </div>
        </div>

        {/* Title & Rating */}
        <div className="flex items-center gap-4">
          <h3 className="text-3xl md:text-4xl font-bold text-[#181E4B]">
            {destination.title}
          </h3>
          <StarRating count={destination.rating} />
        </div>

        {/* Location */}
        <div className="flex items-center gap-2 text-gray-500">
          <MapPin size={18} className="text-[#DF6951]" />
          <span className="text-lg">{destination.location}</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold text-[#DF6951]">
            {destination.price} $
          </span>
          <div className="w-16 h-0.5 bg-gray-300"></div>
        </div>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-sm md:text-base max-w-lg">
          {destination.description}
        </p>

        {/* CTA Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-4 px-8 py-3 bg-[#DF6951] text-white font-semibold rounded-lg shadow-lg hover:bg-[#c95842] transition-colors"
        >
          Explore Now
        </motion.button>
      </div>
    </motion.div>
  );
};

const FeaturedDestinationsSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 lg:px-16 bg-white font-sans">
      <div className="max-w-7xl mx-auto space-y-20">
        {featuredDestinations.map((destination, index) => (
          <DestinationCard 
            key={destination.id} 
            destination={destination} 
            index={index} 
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedDestinationsSection;