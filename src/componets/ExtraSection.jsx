// import React from 'react';
// import image1 from '../assets/behance2.png'
// import image2 from '../assets/blogger2.png'
// import image3 from '../assets/disque1.png'
// import image4 from '../assets/logo1.png'
// import image5 from '../assets/mcon1.png'
// import image6 from '../assets/natuka1.png'
// import image7 from '../assets/runda1.png'
// import image8 from '../assets/walter1.png'
// import image9 from '../assets/wordpress.png'
// import Marquee from "react-fast-marquee";
// const ExtraSection = () => {
//     return (
//         <div>
//            <Marquee>
//             <img className='w-[100px] h-[100px]' src={image1} alt="" />
//             <img className='w-[100px] h-[100px]' src={image2} alt="" />
//             <img className='w-[100px] h-[100px]' src={image3} alt="" />
//             <img className='w-[100px] h-[100px]' src={image4} alt="" />
//             <img className='w-[100px] h-[100px]' src={image5} alt="" />
//             <img className='w-[100px] h-[100px]' src={image6} alt="" />
//             <img className='w-[100px] h-[100px]' src={image7} alt="" />
//             <img className='w-[100px] h-[100px]' src={image8} alt="" />
//             <img className='w-[100px] h-[100px]' src={image9} alt="" />

//            </Marquee>
//         </div>
//     );
// };

// export default ExtraSection;



import React from 'react';
import image1 from '../assets/behance2.png';
import image2 from '../assets/blogger2.png';
import image3 from '../assets/disque1.png';
import image4 from '../assets/logo1.png';
import image5 from '../assets/mcon1.png';
import image6 from '../assets/natuka1.png';
import image7 from '../assets/runda1.png';
import image8 from '../assets/walter1.png';
import image9 from '../assets/wordpress.png';
import Marquee from "react-fast-marquee";

const ExtraSection = () => {
    const images = [image1, image2, image3, image4, image5, image6, image7, image8, image9];

    return (
        <div className=" my-10 bg-base-100 pb-16 pt-8">
            <h2 className="text-3xl font-bold text-center text-base-content mb-20 ">Our Trusted Partners</h2>
            <Marquee pauseOnHover={true} speed={50} gradient={true}>
                {images.map((img, index) => (
                    <div key={index} className="mx-6">
                        <img
                            className="w-[100px] h-[50px] object-contain  hover:scale-110 transition-transform duration-300"
                            src={img}
                            alt={`Logo ${index + 1}`}
                        />
                    </div>
                ))}
            </Marquee>
        </div>
    );
};

export default ExtraSection;
