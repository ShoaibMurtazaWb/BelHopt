import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { PaymentIcon } from "react-svg-credit-card-payment-icons";

export default function Footer() {
    return (
        <footer className="bg-white w-full mt-20 border-t border-gray-200">
            <section className="max-w-700 mx-auto">

                {/* TOP SECTION */}
                <div className="px-25 py-10">
                    <div className="grid grid-cols-1 xl:grid-cols-[1.4fr_1fr_1fr] gap-16 items-center">

                        {/* Logo + Text */}
                        <div className="max-w-xl">
                            <img src="/Logo.png" alt="Bellhopt" className="w-36 mb-4" />
                            <p className="text-sm text-gray-500 leading-relaxed">
                                Our food delivery service for short-term rentals helps stock your
                                fridge with fresh, locally sourced groceries before you arrive.
                                Browse our selection online and enjoy the convenience of having a
                                full fridge waiting for you when you arrive, so you can focus on
                                enjoying your trip.
                            </p>
                        </div>

                        {/* Links */}
                        <div>
                            <h4 className="font-semibold mb-6">Links</h4>
                            <ul className="space-y-4 text-[13px] text-gray-700">
                                <li className="hover:text-red-500 cursor-pointer">Become a Partner</li>
                                <li className="hover:text-red-500 cursor-pointer">Rentals</li>
                                <li className="hover:text-red-500 cursor-pointer">My Cart</li>
                            </ul>
                        </div>

                        {/* Help */}
                        <div>
                            <h4 className="font-semibold mb-6">Help</h4>
                            <ul className="space-y-4 text-[13px] text-gray-700">
                                <li className="hover:text-red-500 cursor-pointer">Contact Us</li>
                                <li className="hover:text-red-500 cursor-pointer">Privacy Policy</li>
                                <li className="hover:text-red-500 cursor-pointer">Payments</li>
                            </ul>
                        </div>

                    </div>
                </div>

                {/* BOTTOM BAR */}
                <div className="border-t border-gray-200 px-25">
                    <div className="flex flex-col md:flex-row items-center justify-between py-6 gap-6">

                        {/* Copyright */}
                        <p className="text-xs text-gray-500">
                            © 2023 Bellhopt LLC. All rights reserved
                        </p>

                        {/* Payment Icons */}
                        <div className="hidden md:flex items-center gap-15">
                            <PaymentIcon type="Visa" format="logo" width={42} className="hover:cursor-pointer "/>
                            <PaymentIcon type="Amex" format="logo" width={42} />
                            <PaymentIcon type="MastercardIcon" format="logo" width={42} />
                        </div>

                        {/* Social Icons */}
                        <div className="flex gap-3">
                            {[FaFacebookF, FaLinkedinIn, FaInstagram, FaTwitter].map((Icon, i) => (
                                <div
                                    key={i}
                                    className="w-9 h-9 flex items-center justify-center rounded-full bg-red-500 text-white hover:opacity-90 cursor-pointer"
                                >
                                    <Icon size={14} />
                                </div>
                            ))}
                        </div>

                    </div>
                </div>

            </section>
        </footer>
    );
}
