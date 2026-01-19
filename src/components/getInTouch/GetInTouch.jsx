import React from "react";
import { ArrowUpRight } from "lucide-react";

export default function GetInTouch() {
    return (
        <section className="w-full py-20 px-4 bg-white">
            <div className="max-w-7xl mx-auto">

                <div className="grid lg:grid-cols-2 gap-12 items-center">

                    {/* LEFT: MAP */}
                    <div className="w-full h-[360px] md:h-[420px] rounded-3xl overflow-hidden shadow">
                        <iframe
                            title="BCIPL Location"
                            src="https://www.google.com/maps?q=Kolkata&output=embed"
                            className="w-full h-full border-0"
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* RIGHT: FORM */}
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-black">
                            Get in Touch
                        </h2>

                        <p className="text-gray-500 mt-2">
                            Have questions? Our team will get back to you.
                        </p>

                        <form className="mt-10 space-y-6">

                            {/* Input */}
                            <div>
                                <input
                                    type="text"
                                    placeholder="Your Name"
                                    className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Phone No"
                                    className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
                                />
                            </div>

                            <div>
                                <input
                                    type="email"
                                    placeholder="Email ID"
                                    className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
                                />
                            </div>

                            <div>
                                <input
                                    type="text"
                                    placeholder="Address"
                                    className="w-full border-b border-gray-400 focus:border-black outline-none py-3 text-sm"
                                />
                            </div>

                            {/* Button */}
                            <button
                                type="submit"
                                className="relative mt-8 w-full bg-secondary text-white py-3 rounded-full cursor-pointer font-semibold transition hover:opacity-90"
                            >
                                {/* Center Text */}
                                <span className="block text-center">
                                    Send Message
                                </span>

                                {/* Right Icon */}
                                <span
                                    className="
      absolute right-2 top-1/2 -translate-y-1/2
      bg-white text-black w-8 h-8 rounded-full
      flex items-center justify-center
    "
                                >
                                    <ArrowUpRight size={18} />
                                </span>
                            </button>


                        </form>
                    </div>

                </div>

            </div>
        </section>
    );
}
