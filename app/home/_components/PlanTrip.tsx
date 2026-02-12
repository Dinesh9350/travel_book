'use client'
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { motion } from "framer-motion";

// Validation Schema
const validationSchema = Yup.object({
  name: Yup.string()
    .required("Name is required")
    .min(2, "Name must be at least 2 characters"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .required("Phone number is required")
    .matches(/^[0-9+\-\s()]*$/, "Invalid phone number"),
  pickupLocation: Yup.string()
    .required("Pickup location is required"),
  dropLocation: Yup.string()
    .required("Drop location is required")
    .notOneOf([Yup.ref("pickupLocation")], "Drop location must be different from pickup"),
});

const PlanTrip: React.FC = () => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      pickupLocation: "",
      dropLocation: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Simulate API call
      setTimeout(() => {
        alert("Trip booked successfully!\n\n" + JSON.stringify(values, null, 2));
        resetForm();
        setSubmitting(false);
      }, 1000);
    },
  });

  return (
    <div className="flex flex-col bg-[#EDEDED] p-6 sm:p-8 rounded-sm w-full max-w-md mx-auto">
      {/* Heading */}
      <h2 className="text-2xl sm:text-3xl text-center font-bold mb-2 text-[#181E4B]">
        Plan Your Trip
      </h2>

      {/* Text */}
      <p className="text-sm text-gray-700 mb-6 text-center leading-relaxed">
        Ex optio sequi et quos praesentium in nostrum labore nam rerum iusto
        aut magni nesciunt? Quo quidem neque iste expedita est dolo.
      </p>

      {/* Form */}
      <form onSubmit={formik.handleSubmit} className="flex flex-col gap-4">
        {/* Name Field */}
        <div>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.name}
            className={`w-full px-4 h-12 bg-white border ${
              formik.touched.name && formik.errors.name
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#DF6951]"
            } placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors text-gray-900`}
          />
          {formik.touched.name && formik.errors.name && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {formik.errors.name}
            </motion.p>
          )}
        </div>

        {/* Email Field */}
        <div>
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
            className={`w-full px-4 h-12 bg-white border ${
              formik.touched.email && formik.errors.email
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#DF6951]"
            } placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors text-gray-900`}
          />
          {formik.touched.email && formik.errors.email && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {formik.errors.email}
            </motion.p>
          )}
        </div>

        {/* Phone Field */}
        <div>
          <input
            type="tel"
            name="phone"
            placeholder="Phone number"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.phone}
            className={`w-full px-4 h-12 bg-white border ${
              formik.touched.phone && formik.errors.phone
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#DF6951]"
            } placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors text-gray-900`}
          />
          {formik.touched.phone && formik.errors.phone && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {formik.errors.phone}
            </motion.p>
          )}
        </div>

        {/* Pickup Location Field */}
        <div>
          <input
            type="text"
            name="pickupLocation"
            placeholder="Pickup location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.pickupLocation}
            className={`w-full px-4 h-12 bg-white border ${
              formik.touched.pickupLocation && formik.errors.pickupLocation
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#DF6951]"
            } placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors text-gray-900`}
          />
          {formik.touched.pickupLocation && formik.errors.pickupLocation && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {formik.errors.pickupLocation}
            </motion.p>
          )}
        </div>

        {/* Drop Location Field */}
        <div>
          <input
            type="text"
            name="dropLocation"
            placeholder="Drop location"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.dropLocation}
            className={`w-full px-4 h-12 bg-white border ${
              formik.touched.dropLocation && formik.errors.dropLocation
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#DF6951]"
            } placeholder-gray-400 focus:outline-none focus:ring-2 transition-colors text-gray-900`}
          />
          {formik.touched.dropLocation && formik.errors.dropLocation && (
            <motion.p
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-red-500 text-xs mt-1"
            >
              {formik.errors.dropLocation}
            </motion.p>
          )}
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={formik.isSubmitting}
          whileHover={{ scale: formik.isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: formik.isSubmitting ? 1 : 0.98 }}
          className={`mt-2 px-6 py-3 font-semibold rounded-md transition cursor-pointer ${
            formik.isSubmitting
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#DF6951] hover:bg-[#c95842] text-white"
          }`}
        >
          {formik.isSubmitting ? "Booking..." : "Book Now"}
        </motion.button>
      </form>
    </div>
  );
};

export default PlanTrip;