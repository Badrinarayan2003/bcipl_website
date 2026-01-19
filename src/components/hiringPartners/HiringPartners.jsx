import React from "react";
import {
    h1,
    h2,
    h3,
    h4,
} from "../../assets/assets";

const partners = [
    h1,
    h2,
    h3,
    h4,
];

export default function HiringPartners() {
    return (
        <section className="w-full bg-white py-6 md:py-12 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid lg:grid-cols-4 gap-8 items-center">

                    {/* LEFT TEXT */}
                    <div className="lg:col-span-1">
                        <h3 className="text-2xl font-bold text-black">
                            Hiring Partners
                        </h3>
                        <p className="mt-2 text-gray-600 text-sm max-w-xs">
                            Trusted by India's leading banks, NBFCs, and financial institutions.
                        </p>
                    </div>

                    {/* RIGHT SLIDER */}
                    <div className="lg:col-span-3 overflow-hidden relative marquee-container">

                        <div className="group">
                            <div className="flex gap-12 items-center w-max animate-marquee marquee-track">


                                {/* Duplicate logos for infinite loop */}
                                {[...partners, ...partners].map((logo, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center justify-center min-w-[160px]"
                                    >
                                        <img
                                            src={logo}
                                            alt="Partner"
                                            className="max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition"
                                        />
                                    </div>
                                ))}

                            </div>
                        </div>
                    </div>

                </div>
            </div>

            {/* Custom animation */}
            <style>
                {`
  @keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
  }

  .animate-marquee {
    animation: marquee 10s linear infinite;
  }

  /* PAUSE ON HOVER */
  .marquee-container:hover .marquee-track {
    animation-play-state: paused;
  }
`}
            </style>

        </section>
    );
}