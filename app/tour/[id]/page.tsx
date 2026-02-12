// app/tour/[id]/page.tsx
'use client';

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  Info, 
  Map, 
  Calendar, 
  Image as ImageIcon, 
  Star, 
  MapPin, 
  Clock, 
  Users,
  Check,
  X,
  Plane,
  Coffee,
  Home,
  UserCircle
} from 'lucide-react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

// --- Types ---
interface TourData {
  id: number;
  slug: string;
  title: string;
  location: string;
  price: string;
  rating: number;
  reviews: string;
  description: string;
  heroImage: string;
  destination: string;
  departure: string;
  departureTime: string;
  returnTime: string;
  dressCode: string;
  notIncluded: string[];
  included: string[];
  gallery: string[];
}

// --- Mock Data ---
const toursData: Record<string, TourData> = {
  switzerland: {
    id: 1,
    slug: "switzerland",
    title: "Switzerland",
    location: "Zurich, Switzerland",
    price: "1,000",
    rating: 5,
    reviews: "2.3k review",
    description: "Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem. At praesentium voluptatem aut libero nisi. Et eligendi sint ab cumque veritatis aut provident aliquam. Aut aspernatur consequuntur eum quaerat distinctio ut inventore aliquid et quasi.",
    heroImage: "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=1920&auto=format&fit=crop",
    destination: "Zurich, Switzerland",
    departure: "Main Square, New York",
    departureTime: "Approximately 08:10 AM",
    returnTime: "Approximately 07:20 PM",
    dressCode: "Casual, comfortable and light",
    notIncluded: ["Gallery Ticket", "Lunch"],
    included: ["5 Star Accommodations", "Airport Transfer", "Breakfast", "Personal Guide"],
    gallery: [
      "https://images.unsplash.com/photo-1530122037265-a5f1f91d3b99?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527668752968-14dc70a27c95?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1501785888041-af3ef285b470?q=80&w=400&auto=format&fit=crop",
    ]
  },
  amazon: {
    id: 2,
    slug: "amazon",
    title: "Amazon",
    location: "Manaus, Brazil",
    price: "1,223",
    rating: 5,
    reviews: "1.8k review",
    description: "Experience the world's largest rainforest. Discover exotic wildlife, navigate the mighty Amazon River, and immerse yourself in indigenous cultures.",
    heroImage: "https://images.unsplash.com/photo-1591382386627-349b692688ff?q=80&w=1920&auto=format&fit=crop",
    destination: "Manaus, Brazil",
    departure: "Rio de Janeiro Airport",
    departureTime: "Approximately 06:00 AM",
    returnTime: "Approximately 08:00 PM",
    dressCode: "Light cotton, long sleeves, hat",
    notIncluded: ["Alcoholic Beverages", "Personal Expenses"],
    included: ["Jungle Lodge", "Boat Tours", "Meals", "English Guide"],
    gallery: [
      "https://images.unsplash.com/photo-1591382386627-349b692688ff?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516934024742-b461fba47600?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1587595431973-160d0d94add1?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1564349683136-77e08dba1ef7?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1559827260-dc66d52bef19?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1500534623283-312aade485b7?q=80&w=400&auto=format&fit=crop",
    ]
  },
  giza: {
    id: 3,
    slug: "giza",
    title: "Giza",
    location: "Cairo, Egypt",
    price: "1,200",
    rating: 5,
    reviews: "3.1k review",
    description: "Walk in the footsteps of pharaohs at the Great Pyramids of Giza. Explore ancient tombs, the Sphinx, and the rich history of ancient Egypt.",
    heroImage: "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=1920&auto=format&fit=crop",
    destination: "Cairo, Egypt",
    departure: "Cairo International Airport",
    departureTime: "Approximately 09:00 AM",
    returnTime: "Approximately 06:00 PM",
    dressCode: "Modest, comfortable walking shoes",
    notIncluded: ["Camera Fees", "Tips"],
    included: ["Hotel Pickup", "Entrance Fees", "Lunch", "Expert Guide"],
    gallery: [
      "https://images.unsplash.com/photo-1568322445389-f64ac2515020?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1539650116455-251d9a063595?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1572252009286-268acec5ca0a?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542401886-65d6c61db217?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1503177119275-0aa32b3a9368?q=80&w=400&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1553913861-c0fddf2619ee?q=80&w=400&auto=format&fit=crop",
    ]
  }
};

// --- Booking Form Component ---
const BookingForm = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      confirmEmail: "",
      phone: "",
      date: "",
      tickets: "",
      message: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      email: Yup.string().email("Invalid email").required("Email is required"),
      confirmEmail: Yup.string()
        .oneOf([Yup.ref("email")], "Emails must match")
        .required("Confirm email is required"),
      phone: Yup.string().required("Phone is required"),
      date: Yup.string().required("Date is required"),
      tickets: Yup.number().min(1, "At least 1 ticket").required("Required"),
    }),
    onSubmit: (values, { setSubmitting, resetForm }) => {
      setTimeout(() => {
        alert("Booking submitted successfully!");
        resetForm();
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-2xl font-bold text-[#181E4B] mb-2 text-center">Book This Tour</h3>
      <p className="text-xs text-gray-500 mb-6 text-center leading-relaxed">
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? Quo quidem neque iste expedita est dolo.
      </p>

      <form onSubmit={formik.handleSubmit} className="space-y-3">
        {[
          { name: "name", placeholder: "Name", type: "text" },
          { name: "email", placeholder: "Email", type: "email" },
          { name: "confirmEmail", placeholder: "Confirm Email", type: "email" },
          { name: "phone", placeholder: "Phone", type: "tel" },
          { name: "date", placeholder: "dd-mm-yy", type: "text" },
          { name: "tickets", placeholder: "Number of ticket", type: "number" },
        ].map((field) => (
          <div key={field.name}>
            <input
              {...field}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              value={formik.values[field.name as keyof typeof formik.values]}
              className={`w-full px-3 py-2.5 text-sm border ${
                formik.touched[field.name as keyof typeof formik.touched] && 
                formik.errors[field.name as keyof typeof formik.errors]
                  ? "border-red-300" 
                  : "border-gray-200"
              } focus:outline-none focus:border-[#DF6951] text-gray-700 placeholder-gray-400`}
            />
          </div>
        ))}
        
        <textarea
          name="message"
          placeholder="Message"
          rows={3}
          onChange={formik.handleChange}
          value={formik.values.message}
          className="w-full px-3 py-2.5 text-sm border border-gray-200 focus:outline-none focus:border-[#DF6951] text-gray-700 placeholder-gray-400 resize-none"
        />

        <div className="flex gap-2 pt-2">
          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 py-2.5 bg-[#DF6951] text-white text-sm font-medium rounded hover:bg-[#c95842] transition"
          >
            Check Availability
          </motion.button>
        </div>
        
        <motion.button
          type="submit"
          disabled={formik.isSubmitting}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="w-full py-2.5 bg-[#DF6951] text-white text-sm font-medium rounded hover:bg-[#c95842] transition disabled:opacity-50"
        >
          {formik.isSubmitting ? "Booking..." : "Book Now"}
        </motion.button>
      </form>
    </div>
  );
};

// --- Main Page Component ---
export default function TourDetailPage() {
  const params = useParams();
  const tourId = params.id as string;
  const tour = toursData[tourId];

  const [activeTab, setActiveTab] = useState<'information' | 'tourplan' | 'location' | 'gallery'>('information');

  if (!tour) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-600">Tour not found</p>
      </div>
    );
  }

  const tabs = [
    { id: 'information', label: 'Information', icon: Info },
    { id: 'tourplan', label: 'Tour Plan', icon: Calendar },
    { id: 'location', label: 'Location', icon: Map },
    { id: 'gallery', label: 'Gallery', icon: ImageIcon },
  ] as const;

  return (
    <div className="min-h-screen bg-white font-sans">
      {/* Hero Section */}
      <div className="relative h-[50vh] md:h-[60vh] overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${tour.heroImage})` }}
        />
        <div className="absolute inset-0 bg-black/30" />
        
        {/* Hero Content */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center text-white text-center px-4">
          <span className="text-xs tracking-[0.3em] uppercase mb-2">Explore</span>
          <h1 className="text-5xl md:text-7xl font-serif italic">Landscapes</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 -mt-16 relative z-20">
        {/* Tabs Navigation */}
        <div className="bg-white rounded-t-lg shadow-sm">
          <div className="flex border-b">
            {tabs.map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 flex items-center justify-center gap-2 py-4 text-sm font-medium transition-colors ${
                    activeTab === tab.id 
                      ? 'text-[#181E4B] border-b-2 border-[#DF6951]' 
                      : 'text-gray-500 hover:text-gray-700'
                  }`}
                >
                  <Icon size={16} />
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Content Grid */}
        <div className="bg-white rounded-b-lg shadow-lg p-6 md:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Content */}
            <div className="lg:col-span-2">
              {activeTab === 'information' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  {/* Header */}
                  <div className="flex flex-wrap items-start justify-between gap-4">
                    <div>
                      <h2 className="text-3xl font-bold text-[#181E4B]">{tour.title}</h2>
                      <div className="flex items-center gap-4 mt-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} size={16} className="fill-[#F1C40F] text-[#F1C40F]" />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">({tour.reviews})</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-2xl font-bold text-[#DF6951]">{tour.price} $</span>
                      <span className="text-sm text-gray-500 block">/ Per Couple</span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 text-sm leading-relaxed">{tour.description}</p>

                  {/* Details Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4">
                    {[
                      { label: 'Destination', value: tour.destination, icon: MapPin },
                      { label: 'Departure', value: tour.departure, icon: Plane },
                      { label: 'Departure Time', value: tour.departureTime, icon: Clock },
                      { label: 'Return Time', value: tour.returnTime, icon: Clock },
                      { label: 'Dress Code', value: tour.dressCode, icon: UserCircle },
                    ].map((item) => (
                      <div key={item.label} className="flex items-start gap-3">
                        <span className="text-[#DF6951] text-xs font-bold uppercase w-24 shrink-0">
                          {item.label}
                        </span>
                        <span className="text-gray-600 text-sm">: {item.value}</span>
                      </div>
                    ))}
                  </div>

                  {/* Included/Not Included */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
                    <div>
                      <h4 className="text-[#DF6951] text-xs font-bold uppercase mb-3">Not Included</h4>
                      <ul className="space-y-2">
                        {tour.notIncluded.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                            <X size={14} className="text-red-400" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-[#DF6951] text-xs font-bold uppercase mb-3">Included</h4>
                      <ul className="space-y-2">
                        {tour.included.map((item) => (
                          <li key={item} className="flex items-center gap-2 text-sm text-gray-600">
                            <Check size={14} className="text-green-500" />
                            {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

              {activeTab === 'gallery' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-[#181E4B]">From our gallery</h3>
                  <p className="text-sm text-gray-600">
                    Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto aut magni nesciunt? 
                    Quo quidem neque iste expedita est dolor similique ut quasi maxime ut deserunt autem.
                  </p>
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                    {tour.gallery.map((img, idx) => (
                      <motion.div
                        key={idx}
                        whileHover={{ scale: 1.05 }}
                        className="aspect-square overflow-hidden rounded-lg"
                      >
                        <img src={img} alt={`Gallery ${idx + 1}`} className="w-full h-full object-cover" />
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'tourplan' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-[#181E4B]">Tour Plan</h3>
                  <div className="space-y-4">
                    {[1, 2, 3, 4, 5].map((day) => (
                      <div key={day} className="flex gap-4 p-4 bg-gray-50 rounded-lg">
                        <div className="w-12 h-12 bg-[#DF6951] text-white rounded-full flex items-center justify-center font-bold shrink-0">
                          {day}
                        </div>
                        <div>
                          <h4 className="font-bold text-[#181E4B]">Day {day}: Exploration</h4>
                          <p className="text-sm text-gray-600 mt-1">
                            Detailed itinerary for day {day} of your amazing journey through {tour.title}.
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {activeTab === 'location' && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <h3 className="text-2xl font-bold text-[#181E4B]">Location</h3>
                  <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <Map size={48} className="mx-auto text-gray-400 mb-2" />
                      <p className="text-gray-500">Map view of {tour.location}</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Right Sidebar - Booking Form */}
            <div className="lg:col-span-1">
              <div className="sticky top-8">
                <BookingForm />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Spacing for footer */}
      <div className="h-20" />
    </div>
  );
}