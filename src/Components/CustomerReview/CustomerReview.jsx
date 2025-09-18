import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { FaQuoteLeft } from "react-icons/fa";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const reviews = [
  {
    name: "John Smith",
    country: "United States",
    review:
      "The visa process was so easy and smooth. I got approval much faster than expected. Highly recommend this automated system!",
    photo: "https://i.pravatar.cc/100?img=11",
  },
  {
    name: "David Johnson",
    country: "United Kingdom",
    review:
      "I was worried about applying for my visa, but this platform made everything simple and stress-free.",
    photo: "https://i.pravatar.cc/100?img=12",
  },
  {
    name: "Amit Kumar",
    country: "India",
    review:
      "Amazing experience! The system guided me step by step and I got my visa without any hassle.",
    photo: "https://i.pravatar.cc/100?img=13",
  },
  {
    name: "Michael Lee",
    country: "Canada",
    review:
      "Very user-friendly and reliable. I’ll definitely use this again for future travels.",
    photo: "https://i.pravatar.cc/100?img=14",
  },
];

const CustomerReview = () => {
  return (
    <div className=" py-10 px-4">
         <h2 className="text-2xl md:text-5xl text-center font-bold mb-12 text-black dark:text-white">
            💬 Hear From Our <span className="text-teal-800 dark:text-teal-300">Happy</span> Customers
          </h2>
   
  
      <Swiper
        modules={[Pagination, Autoplay]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
        autoplay={{ delay: 6000 }}
        loop={true}
      >
        {reviews.map((review, idx) => (
          <SwiperSlide key={idx}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
              className="flex flex-col items-center bg-white border border-yellow-500 backdrop-blur-lg shadow-xl rounded-3xl p-10 text-center max-w-6xl mx-auto border border-gray-200"
            >
              <FaQuoteLeft className="text-[#1a3c4c] text-4xl mb-6 opacity-80" />
              <p className="text-lg text-gray-700 font-medium leading-relaxed mb-8 italic">
                “{review.review}”
              </p>
              <img
                src={review.photo}
                alt={review.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-[#1a3c4c] shadow-md mb-4"
              />
              <h3 className="font-semibold text-xl text-gray-900">
                {review.name}
              </h3>
              <p className="text-sm text-gray-500 tracking-wide">
                {review.country}
              </p>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default CustomerReview;
