import React from 'react';
import { motion } from 'framer-motion';

const galleryImages = [
  {
    id: 1,
    url: "https://i.postimg.cc/3JQhTMcc/Screenshot-2025-08-03-162609.png",
    caption: "Food distribution in flood-affected area – June 2025"
  },
  {
    id: 2,
    url: "https://i.postimg.cc/tgVgRd9q/Screenshot-2025-08-03-151437.png",
    caption: "Teaching children in slum area – July 2025"
  },
  {
    id: 3,
    url: "https://i.postimg.cc/V6qLnYS2/Screenshot-2025-08-03-153749.png",
    caption: "Free medical camp in rural village – May 2025"
  },
  {
    id: 4,
    url: "https://i.postimg.cc/63Jp87Qd/Screenshot-2025-07-29-211408.png",
    caption: "Blanket donation during winter – Jan 2025"
  },
  {
    id: 5,
    url: "https://i.postimg.cc/D0zrMYKf/Screenshot-2025-08-03-160017.png",
    caption: "Community clean up for helping people – August 2025"
  },
  {
    id: 6,
    url: "https://i.postimg.cc/Dfcwzw3X/Screenshot-2025-08-03-153847.png",
    caption: "Street people for health care – February 2025"
  }
];


const TeamPhotoGallery = () => {
  return (
    <section className="w-11/12 md:w-10/12 mx-auto my-16">
      <motion.h2
        initial={{opacity:0,y:200}}
        whileInView={{opacity:1,y:0}}
       transition={{
        type:"spring",
        damping:50,
        duration:0.3}}
        className="text-4xl font-extrabold text-center mb-10 text-base-content"
      >
        Volunteer Moments Gallery
      </motion.h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {galleryImages.map((image) => (
          <motion.div
            key={image.id}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 2 }}
            // viewport={{ once: true }}
            className="relative overflow-hidden rounded-xl shadow-lg group"
          >
            <img
              src={image.url}
              alt={image.caption}
              className="w-full h-64 object-cover transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-60 text-white text-sm p-3 opacity-0 group-hover:opacity-100 transition duration-300">
              {image.caption}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default TeamPhotoGallery;
