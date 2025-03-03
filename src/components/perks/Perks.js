import React from 'react';
import perkImg1 from './perks-img-1.png'
import perkImg2 from './perks-img-2.png'
import perkImg3 from './perks-img-3.png'
import perkImg4 from './perks-img-4.png'
// import Swiper core and required modules
import SwiperCore, {Pagination, A11y, Autoplay } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

// install Swiper modules
SwiperCore.use([Pagination, A11y, Autoplay]);

const Perks = () => {
  return (
    <div id='perks' className="perks-section">
      <div className='container-xxl px-xxl-0 px-3'>
        <div className='border-cont py-5'>
            <Swiper
                pagination={{ clickable: true }}
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{ autoplay: true, delay: 10000 }}
                breakpoints={{
                // when window width is >= 0px
                0: {
                    slidesPerView: 1,
                },
                }}
            >
                <SwiperSlide>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                    <div className="left mb-md-0 mb-4 px-lg-5 px-3">
                        <h1 className='mb-3'>Perks of ownership</h1>
                        <p>With different characters available to you, each with their own story, you can be assured that every NFT in New Legion is absolutely rare and unique. Your NFT is one of a kind, just like you.</p>
                    </div>
                    </div>
                    <div className="col-md-6 col-12 text-center img-container">
                        <img src={perkImg1} alt="" />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                    <div className="left mb-md-0 mb-4 px-lg-5 px-3">
                        <h1 className='mb-3'>Perks of ownership</h1>
                        <p>Immerse yourself into New Life Legion’s enthusiastic and engaging community and delve deep into its lore, share your thoughts, and portray your never-ending adventure with your fellow legionnaires!</p>
                    </div>
                    </div>
                    <div className="col-md-6 col-12 text-center img-container">
                        <img src={perkImg2} alt="" />
                    </div>
                </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                        <div className="left mb-md-0 mb-4 px-lg-5 px-3">
                        <h1 className='mb-3'>Perks of ownership</h1>
                        <p>Since we all love a strong, connected community, we introduce partnerships with projects where you can get white-listed for any upcoming events and even get exclusive opportunities to collaborate with various other blue-chip projects.</p>
                        </div>
                    </div>
                    <div className="col-md-6 col-12 text-center img-container">
                        <img src={perkImg3} alt="" />
                    </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="row align-items-center">
                    <div className="col-md-6 col-12">
                    <div className="left mb-md-0 mb-4 px-lg-5 px-3">
                        <h1 className='mb-3'>Perks of ownership</h1>
                        <p>Gain access to exclusive content from the private channels along with exclusive information and disclosures. </p>
                    </div>
                    </div>
                    <div className="col-md-6 col-12 text-center img-container">
                        <img src={perkImg4} alt="" />
                    </div>
                </div>  
                </SwiperSlide>
            </Swiper>
        </div>       
    </div>
    </div>
  )
}

export default Perks