import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PaymentIcon } from 'react-svg-credit-card-payment-icons';


export default function Footer() {
    return (
        <footer className="bg-white w-full">

            <section className="max-w-[2800px] mx-auto">
            {/* Top */}
            <div className="xl:px-20 px-8 md:px-10 py-10">
                <div className="flex flex-col xl:flex-row gap-10 items-center xl:justify-start xl:gap-66 text-left">

                    {/* Logo + text */}
                    <div className="w-full flex flex-col xl:w-5xl xl:items-start">
                        <img src="/Logo.png" alt="Bellhopt" className="w-36 mb-4" />
                        <p className="text-sm text-gray-600 leading-relaxed "> 
                            Our food delivery service for short-term rentals helps stock your
                            fridge with fresh, locally sourced groceries before you arrive.
                            Browse our selection online and enjoy the convenience of having a
                            full fridge waiting for you when you arrive, so you can focus on
                            enjoying your trip.
                        </p>
                    </div>

                    {/* Links + Help */}
                    <div className="w-full flex gap-[30%] md:gap-30 xl:gap-66">

                        <div>
                            <h4 className="font-semibold mb-6">Links</h4>
                            <ul className="space-y-5 text-sm text-gray-700 **:font-crimson! ">
                                <li>Become a Partner</li>
                                <li>Rentals</li>
                                <li>My Cart</li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="font-semibold mb-6">Help</h4>
                            <ul className="space-y-5 text-sm text-gray-700 **:font-crimson!">
                                <li>Contact Us</li>
                                <li>Privacy Policy</li>
                                <li>Payments</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>


            {/* Copyright + Card + Social Icons */}
            <div className="lex flex-col items-center md:flex-row md:flex xl:flex-row border-t md:border-b border-gray-200 md:justify-between md:px-10">

                {/* Copyright */}
                <div className="text-center py-6 xl:text-start">
                    <p className="text-xs text-gray-700">
                        © 2023 Bellhopt LLC. All rights reserved
                    </p>
                </div>

                {/* Cards */}
                <div className="hidden md:flex md:items-center md:gap-5 md:visible ">
                    <PaymentIcon type="Visa" format="logo" width={50} className="md:w-15"/>
                    <PaymentIcon type="Amex" format="logo" width={50} className="md:w-15" />
                    <PaymentIcon type="MastercardIcon" format="logo" width={50} className="md:w-15"/>
                    
                    </div>


                {/* Social icons */}
                <div>
                    <div className="flex justify-center gap-4 py-6">
                        {[FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter].map((Icon, i) => (
                            <div
                                key={i}
                                className="w-10 h-10 flex items-center justify-center rounded-full bg-red-500 text-white"
                            >
                                <Icon size={16} />
                            </div>
                        ))}
                    </div>
                </div>

            </div>
            </section>

        </footer>
    );
}