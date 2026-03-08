
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination,Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { motion } from 'framer-motion';

const sliderData = [
  {
    title: 'Riverbank Tree Plantation',
    description: 'Help us plant trees along the riverbank to prevent erosion and promote environmental awareness.',
    image: 'https://i.postimg.cc/K4XvttRm/community2-Copy-Copy.jpg',
    textColor: 'text-pink-500',
  },
  {
    title: 'Park Cleanup Drive',
    description: 'Join us to clean and beautify the local park for the community. This initiative aims to create a clean, safe space for families.',
    image: 'https://i.postimg.cc/NGK67Y5n/community4-Copy-Copy.jpg',
    textColor: 'text-yellow-400',
  },
  {
    title: 'Weekend School for Street Children',
    description: 'Be a weekend hero by teaching basic literacy and numeracy to street children. No teaching experience needed.',
    image: 'https://i.postimg.cc/63ZthyRc/Screenshot-2025-07-28-090245.png',
    textColor: 'text-green-400',
  },
  {
    title: 'Slum Area Food Distribution',
    description: 'Distribute food packages and hygiene products to underprivileged families in slum areas.',
    image: 'https://i.postimg.cc/pybqCZ9d/Screenshot-2025-07-29-205207.png',
    textColor: 'text-pink-400',
  }
];

const BannerSlider = () => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: -50 }} 
      animate={{ opacity: 1, y: 0 }}
      transition={{
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }}
      className="px-4 w-full max-w-5xl mx-auto my-6 md:mt-10 md:mb-20"
    >
      <div className="bg-gray-900 rounded-3xl overflow-hidden shadow-2xl">
        <Swiper
           modules={[Pagination,Autoplay]}
        // modules={[ Navigation, Autoplay]}
        pagination={{ clickable: true }}
          className="swiper-pagination-custom"
        // navigation
        autoplay={{ delay: 4000 }}
        spaceBetween={10}
        slidesPerView={1}
        // loop={true}
        >
          {sliderData.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center gap-16 p-6 md:p-12 lg:p-16 ">
                
               
                <div className="w-full flex-1 ">
                  <img
                    src={slide.image}
                    alt={slide.title}
                    className="w-full h-52 sm:h-64 md:h-80 lg:h-96 object-cover rounded-2xl shadow-lg border border-gray-800"
                  />
                </div>

                
                <div className="w-full flex-1 space-y-4 md:space-y-6 text-center md:text-left ">
                  <h2 className={`text-3xl sm:text-4xl lg:text-5xl font-extrabold leading-tight ${slide.textColor}`}>
                    {slide.title}
                  </h2>
                  <p className="text-sm sm:text-base md:text-lg text-gray-300 max-w-lg mx-auto md:mx-0">
                    {slide.description}
                  </p>
                  <div className="pt-2">
                    <button className="bg-white text-black font-semibold px-8 py-3 rounded-full hover:bg-gray-200 hover:scale-105 transition-all duration-300">
                      Explore Now
                    </button>
                  </div>
                </div>

              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

    </motion.div>
  );
};

export default BannerSlider;


