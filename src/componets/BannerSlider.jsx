import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const sliderData = [
  {
    title: 'Riverbank Tree Plantation',
    description:
      'Help us plant trees along the riverbank to prevent erosion and promote environmental awareness..',
    image: 'https://i.postimg.cc/K4XvttRm/community2-Copy-Copy.jpg',
    textColor: 'text-pink-500',
  },
  {
    title: 'Park Cleanup Drive',
    description:
      'Join us to clean and beautify the local park for the community. This initiative aims to promote environmental awareness and create a clean, safe space for children and families. Volunteers will help with trash collection, planting trees, and painting benches.',
    image: 'https://i.postimg.cc/NGK67Y5n/community4-Copy-Copy.jpg',
    textColor: 'text-yellow-400',
  },
  {
    title: 'Weekend School for Street Children',
    description:
      'Be a weekend hero by teaching basic literacy and numeracy to street children. No teaching experience needed, just patience and compassion',
    image: 'https://i.postimg.cc/63ZthyRc/Screenshot-2025-07-28-090245.png',
    textColor: 'text-green-400',
  },
  {
    title: 'Slum Area Food Distribution',
    description:
      'Distribute food packages and hygiene products to underprivileged families in slum areas',
    image: 'https://i.postimg.cc/VLG08ct8/Screenshot-2025-07-27-211252-Copy.png',
    textColor: 'text-green-400',
  }
];

const BannerSlider = () => {
  return (
    <div className="max-w-6xl mx-auto bg-gray-900 my-10 rounded-lg ">
      <Swiper
        modules={[Pagination]}
        // modules={[ Navigation, Autoplay]}
        pagination={{ clickable: true }}
          className="swiper-pagination-custom"
        // navigation
        // autoplay={{ delay: 4000 }}
        spaceBetween={10}
        slidesPerView={1}
        // loop={true}
      >
        {sliderData.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className=" flex flex-col-reverse md:flex-row items-center gap-8 py-10 px-10">
              {/* Text Side */}
              <div className="flex-1 space-y-5">
                <h2 className={`text-4xl md:text-5xl font-bold ${slide.textColor}`}>
                  {slide.title}
                </h2>
                <p className="text-lg text-gray-300">{slide.description}</p>
                <button className="mt-4 bg-white text-black px-6 py-2 rounded hover:bg-gray-200 transition">
                  Explore Now
                </button>
              </div>

              {/* Image Side */}
              <div className="flex-1">
                <img
                  src={slide.image}
                  alt="Slide"
                  className="w-full h-72 md:h-96 object-cover rounded-lg shadow-lg"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default BannerSlider;
