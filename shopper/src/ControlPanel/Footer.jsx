import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook } from '@awesome.me/kit-KIT_CODE/icons';
import { faAllergies } from '@fortawesome/free-solid-svg-icons'

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
                    <div><FontAwesomeIcon icon={faAllergies} />Facebook</div>
                    <div>Pinterest</div>
                    <div>Twitter</div>
                    <div>Instagram</div>
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
