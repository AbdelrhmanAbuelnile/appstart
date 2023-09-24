import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import {  Pagination, Navigation, Autoplay } from 'swiper/modules';

import AppleIcon from '@mui/icons-material/Apple';
import AndroidIcon from '@mui/icons-material/Android';


import '../../footer.css'

function ProjectCard({screen, text}){

    const screen2 = 'betybetk wireframe2';

    const slide = screen.map((item) => (
        <SwiperSlide key={item.image}>
          <img 
            src={item.image} 
            alt={item.alt}
            className='max-w-[250px] mx-auto'
          />
        </SwiperSlide>
      ));

    return(
        <div
                className={
                    `flex flex-col
                    ${ screen[1].alt === screen2 ? 'md:flex-row' : 'md:flex-row-reverse' } 
                    justify-center md:justify-between items-center
                    gap-10 py-8 px-2 lg:mb-12 lg:px-20`
                }
            >
                <div className="flex flex-col items-center lg:items-start justify-center gap-10">
                    <h1 className='text-primary text-3xl font-semibold'>{text.title}</h1>
                    <p className='text-[#4f4f4f] text-2xl font-medium text-center lg:text-start max-w-[290px] md:max-w-[500px]'>
                        {text.description}
                    </p>
                    <div className='flex flex-row justify-center items-center gap-10'>
                        <AppleIcon fontSize='large'   className='text-primary hover:text-[#A2AAAD] duration-300'/>
                        <AndroidIcon fontSize='large' className='text-primary hover:text-[#3DDC84] duration-300'/>
                    </div>
                </div>
                <div>
                    <Swiper
                        navigation={true}
                        modules={[ Navigation, Pagination, Autoplay]}
                        slidesPerView={1}
                        spaceBetween={10}
                        loop={true}
                        autoplay={{
                            delay: 3500,
                            disableOnInteraction: false,
                        }}
                        pagination={{ clickable: true }}
                        
                        className="flex flex-row justify-between items-center max-w-[350px] md:max-w-[500px] lg:py-10"
                    >
                        {slide}
                    </Swiper>
                </div>
            </div>
    )
    
}

export default ProjectCard;