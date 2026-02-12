'use client'
import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Users, MapPin, Star, ArrowRight } from 'lucide-react';

interface TourPackage {
  id: number;
  slug: string;
  image: string;
  flag: string;
  duration: string;
  people: string;
  title: string;
  location: string;
  rating: number;
  currentPrice: string;
  oldPrice: string;
  description: string;
}

const trendingPackages: TourPackage[] = [
  {
    id: 1,
    slug: "switzerland",
    image: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=800&auto=format&fit=crop",
    flag: "https://flagcdn.com/ch.svg",
    duration: "8 Days",
    people: "25 People Going",
    title: "Switzerland",
    location: "Europe",
    rating: 5,
    currentPrice: "1,000",
    oldPrice: "1,200",
    description: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi...",
  },
  {
    id: 2,
    slug: "amazon",
    image: "https://images.unsplash.com/photo-1591382386627-349b692688ff?q=80&w=800&auto=format&fit=crop",
    flag: "https://flagcdn.com/br.svg",
    duration: "8 Days",
    people: "30 People Going",
    title: "Amazon",
    location: "Brazil",
    rating: 5,
    currentPrice: "1,223",
    oldPrice: "1,200",
    description: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi...",
  },
  {
    id: 3,
    slug: "giza",
    image: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=800&auto=format&fit=crop",
    flag: "https://flagcdn.com/eg.svg",
    duration: "8 Days",
    people: "155 People Going",
    title: "Giza",
    location: "Egypt",
    rating: 5,
    currentPrice: "1,200",
    oldPrice: "1,200",
    description: "Nam exercitationem commodi et ducimus quia in dolore animi sit mollitia amet id quod eligendi...",
  },
];

const PackageCard = ({ pkg, index }: { pkg: TourPackage; index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.2 }}
      className="group relative flex flex-col bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 overflow-hidden"
    >
      {/* Image Container */}
      <div className="relative h-64 overflow-hidden">
        <motion.img
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.4 }}
          src={pkg.image}
          alt={pkg.title}
          className="w-full h-full object-cover"
        />
        {/* Flag Badge */}
        <div className="absolute bottom-4 left-4 w-12 h-12 rounded-full bg-white shadow-lg flex items-center justify-center p-1 border-2 border-white z-10">
          <img src={pkg.flag} alt="flag" className="w-full h-full rounded-full object-cover" />
        </div>
      </div>

      {/* Content Body */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="flex items-center gap-4 text-xs text-gray-500 mb-3 font-medium">
          <div className="flex items-center gap-1">
            <Calendar size={14} className="text-[#DF6951]" />
            <span>{pkg.duration}</span>
          </div>
          <div className="flex items-center gap-1">
            <Users size={14} className="text-[#DF6951]" />
            <span>{pkg.people}</span>
          </div>
        </div>

        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-[#181E4B] group-hover:text-[#DF6951] transition-colors">
            {pkg.title}
          </h3>
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={14} className={i < pkg.rating ? "fill-[#F1C40F] text-[#F1C40F]" : "text-gray-300"} />
            ))}
          </div>
        </div>

        <div className="flex items-center gap-1 text-sm text-gray-500 mb-4">
          <MapPin size={14} />
          <span>{pkg.location}</span>
        </div>

        <div className="flex items-baseline gap-3 mb-4">
          <span className="text-2xl font-bold text-[#DF6951]">${pkg.currentPrice}</span>
          <span className="text-sm text-gray-400 line-through decoration-gray-400">${pkg.oldPrice}</span>
        </div>

        <p className="text-sm text-gray-500 leading-relaxed mb-6 line-clamp-3">
          {pkg.description}
        </p>

        <div className="mt-auto">
          <Link href={`/tour/${pkg.slug}`}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-3 px-6 rounded-lg bg-[#DF6951] text-white font-semibold text-sm shadow-md hover:bg-[#c95842] transition-colors flex items-center justify-center gap-2 group/btn"
            >
              Explore Now
              <ArrowRight size={16} className="group-hover/btn:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const TrendingSection = () => {
  return (
    <section className="py-20 px-4 md:px-8 bg-[#FEFCFB] font-sans">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-[#DF6951] font-bold tracking-widest text-sm uppercase mb-2 block">Trendy</span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#181E4B] font-serif">
            Our Trending Tour <br className="hidden md:block" /> Packages
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trendingPackages.map((pkg, index) => (
            <PackageCard key={pkg.id} pkg={pkg} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrendingSection;