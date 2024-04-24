import React from 'react';
import { IconContext } from  "react-icons";
import { FaFacebook, FaInstagram, FaPinterest, FaTwitter  } from "react-icons/fa";

export default function Footer() {
  return (
    <>
    <div className='mt-16 w-[95%] mx-auto pb-4'>
        <div className="flex border-[#C6C6C5] border-b pb-8 justify-center gap-x-20">
            <div className="flex flex-col gap-x-3">
                <div className='font-bold mb-2'>How We Help</div>
                <div>
                    <div>Retailers</div>
                    <div>Interiors Designers</div>
                    <div>Product Designers</div>
                    <div>Wholesalers / Importers</div>
                    <div>Artisans</div>
                </div>
            </div>
            <div className="flex flex-col gap-x-3">
                <div className='font-bold  mb-2'>Get to Know Us</div>
                <div>
                    <div>About</div>
                    <div>Policies</div>
                    <div>Careers</div>
                    <div>Press</div>
                </div>
            </div>
            <div className="flex flex-col gap-x-3">
                <div className='font-bold  mb-2'>Join the Community</div>
                <div>
                    <div>Upcoming Events</div>
                    <div>Become a Buyer</div>
                    <div>Become a Seller</div>
                </div>
            </div>
            <div className="flex flex-col gap-x-3">
                <div className='font-bold  mb-2'>Follow Us</div>
                <div>
                <IconContext.Provider value={{ className: "shopper-color" }}>
                    <div className='flex gap-x-1 items-center'><FaFacebook />Facebook</div>
                    <div className='flex gap-x-1 items-center'><FaPinterest />Pinterest</div>
                    <div className='flex gap-x-1 items-center'><FaTwitter />Twitter</div>
                    <div className='flex gap-x-1 items-center'><FaInstagram />Instagram</div>
                </IconContext.Provider>
                </div>
            </div>
        </div>
        <div className='flex justify-center gap-x-3 text-[#878786] mt-4'>
            <div>© 2016 Uimint.com</div>
            <div>Terms & Conditions</div>
            <div>Privacy</div>
        </div>
        </div>
    </>
  )
}
