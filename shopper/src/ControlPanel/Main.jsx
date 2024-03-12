
import LandscapeTheme from "../images/LandscapeTheme.png";
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, A11y } from 'swiper/modules';
import SliderImages from './SliderImages';
import right_arrow from '../images/right arrow.png';
import { top_seller_list } from '../util';
import { landscape_list } from '../util';
import { landscape_list2 } from '../util';
import become_buyer from '../images/become_buyer_image.png';
import become_seller from '../images/become_seller_image.png';
import visual_electronics from '../images/visual_electronics.png';
import cactus from '../images/cactus.png';

import 'swiper/css';
import 'swiper/css/navigation';
// import 'swiper/css/pagination';

export default function Main() {

  return (
    <main>
      <div>
        <div className="relative">
          <div className="h-[600px] w-full">
            <img src={LandscapeTheme} alt="Landscape Theme" className="h-[600px] w-full" />
            <div className="absol-center  w-3/4  text-center text-white">
              <p className="text-5xl font-normal">We have dream to connect wholesalers to independent Customers</p>
              <button className="shopper-bgcolor mt-7 w-32 h-12 rounded-md font-semibold">Explore</button>
            </div>
            <div className="absolute w-[95%] left-2/4 -translate-x-1/2 -translate-y-1/4 bg-white px-8 py-5 shadow-[0_2px_7px_0px_rgba(181,181,181,.5)] rounded-md h-[350px]" >
              <Swiper
                modules={[Navigation, A11y]}
                spaceBetween={50}
                slidesPerView={3}
                navigation={true}
                // pagination={{ clickable: true }}
                // scrollbar={{ draggable: true }}
                onSlideChange={() => console.log('slide change')}
                onSwiper={(swiper) => console.log(swiper)}
                className="mySwiper"
              >
                {
                  SliderImages.map((v, i) => {
                    return (
                      <SwiperSlide key={`swipperSlider-${i}`}>
                        <div className="flex flex-col">
                          <img src={v.img} key={`slider-${i}`} alt={v.title} className="w-[250px] h-[250px]" />
                          <p className="mt-3">{v.title}</p>
                        </div>
                      </SwiperSlide>
                    )
                  })
                }
              </Swiper>
            </div>
          </div>
        </div>
        <div className="mt-[330px] w-[95%] flex flex-col items-center text-left mx-auto">
          <div className="shopper-color text-3xl w-full mb-5">Top Seller</div>
          <div className="flex gap-x-12 w-full">
            {
              top_seller_list.map((v, i) => {
                return (
                  <div className="border-[#E0E0E0] border pt-7 pb-5 flex-1" key={i}>
                    <img src={v.img} alt={v.title} className="h-[250px] w-full" />
                    <div className="flex justify-between p-5 pb-0 gap-x-2 w-full">
                      <div>
                        <div className="text-[#757575] text-sm">
                          {v.seller}
                        </div>
                        <div className="max-w-[97%] text-ellipsis whitespace-nowrap overflow-hidden text-base">
                          {v.title}
                        </div>
                        <div className="shopper-color text-lg">
                          {v.price}
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img src={right_arrow} className="w-[14px] h-[24px]" alt="right_arrow" />
                      </div>
                    </div>
                  </div>
                )
              })
            }
          </div>
          <div className="text-[#757575] mt-5">
                  Explore More >
          </div>
        </div>
        <div className="w-[95%] flex text-left mx-auto mt-24 gap-x-12">
            <div className="flex-1">
              <div className="shopper-color text-3xl">Why Become Buyer?</div>
              <div className="text-base mt-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam feliultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
              <button className="shopper-bgcolor text-base w-[150px] mt-5 rounded-md h-10 text-white">Apply to Buy</button>
            </div>
            <div className="flex-1 flex justify-center">
              <img src={become_buyer} alt="Become Buyer" className="h-[200px]"/>
            </div>
        </div>
        <div className="w-[90%] flex text-left mx-auto mt-24 gap-x-12">
          <div className="flex-1 flex justify-center">
            <img src={become_seller} alt="Become Seller" className="h-[200px]"/>
          </div>
          <div className="flex-1">
              <div className="shopper-color text-3xl">Why Become Seller?</div>
              <div className="text-base mt-6">Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam feliultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.</div>
              <button className="shopper-bgcolor text-base w-[150px] mt-5 rounded-md h-10 text-white">Apply to Sell</button>
            </div>
        </div>
        <div className="w-[95%] flex text-left mx-auto mt-24 gap-x-12">
            <div className="flex-1">
                <div className="mb-12">
                    <div className="border-[#E0E0E0] border pb-5 flex-1">
                    <img src={visual_electronics} alt="visual electronics" className="h-[250px] w-full" />
                    <div className="flex justify-between p-5 pb-0 gap-x-2 w-full">
                      <div>
                        <div className="text-[#757575] text-sm">
                          Cobalt Union
                        </div>
                        <div className="max-w-[97%] text-ellipsis whitespace-nowrap overflow-hidden text-base">
                          visual electronics
                        </div>
                        <div className="shopper-color text-lg">
                          $125.00
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img src={right_arrow} className="w-[14px] h-[24px]" alt="right_arrow" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-x-12 gap-y-12 w-full grid-cols-2">
                {
                  landscape_list.map((v, i) => {
                    return (
                      <div className="border-[#E0E0E0] border pb-5 flex-1" key={i}>
                        <img src={v.img} alt={v.title} className="h-[250px] w-full" />
                        <div className="flex justify-between p-5 pb-0 gap-x-2 w-full border-t border-[#E0E0E0]">
                          <div>
                            <div className="text-[#757575] text-sm">
                              {v.seller}
                            </div>
                            <div className="max-w-[97%] text-ellipsis whitespace-nowrap overflow-hidden text-base">
                              {v.title}
                            </div>
                            <div className="shopper-color text-lg">
                              {v.price}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <img src={right_arrow} className="w-[14px] h-[24px]" alt="right_arrow" />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
            
            </div>
            <div  className="flex-1">
                <div className="grid gap-x-12 gap-y-12 w-full grid-cols-2">
                {
                  landscape_list2.map((v, i) => {
                    return (
                      <div className="border-[#E0E0E0] border pb-5 flex-1" key={i}>
                        <img src={v.img} alt={v.title} className="h-[250px] w-full" />
                        <div className="flex justify-between p-5 pb-0 gap-x-2 w-full border-t border-[#E0E0E0]">
                          <div>
                            <div className="text-[#757575] text-sm">
                              {v.seller}
                            </div>
                            <div className="max-w-[97%] text-ellipsis whitespace-nowrap overflow-hidden text-base">
                              {v.title}
                            </div>
                            <div className="shopper-color text-lg">
                              {v.price}
                            </div>
                          </div>
                          <div className="flex items-center">
                            <img src={right_arrow} className="w-[14px] h-[24px]" alt="right_arrow" />
                          </div>
                        </div>
                      </div>
                    )
                  })
                }
              </div>
              <div className="mt-12">
                    <div className="border-[#E0E0E0] border pb-5 flex-1">
                    <img src={cactus} alt="cactus" className="h-[250px] w-full" />
                    <div className="flex justify-between p-5 pb-0 gap-x-2 w-full">
                      <div>
                        <div className="text-[#757575] text-sm">
                          Cobalt Union
                        </div>
                        <div className="max-w-[97%] text-ellipsis whitespace-nowrap overflow-hidden text-base">
                        cactus
                        </div>
                        <div className="shopper-color text-lg">
                          $125.00
                        </div>
                      </div>
                      <div className="flex items-center">
                        <img src={right_arrow} className="w-[14px] h-[24px]" alt="right_arrow" />
                      </div>
                    </div>
                  </div>
                </div>
            </div>
        </div>
      </div>
    </main>
  )
}
