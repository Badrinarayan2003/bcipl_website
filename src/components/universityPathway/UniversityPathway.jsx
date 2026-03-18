import React from "react";
import { h1, h2, h3, h4 } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

export default function UniversityPathway() {

    const navigate = useNavigate()

    return (
        <section className="py-16 bg-[#f7fbff]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">

                    {/* LEFT CARD */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:col-span-3">

                        <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                            Your official pathway to Mangalayatan University
                        </h3>

                        <p className="text-gray-600 text-md leading-relaxed mb-6">
                            As the official admission partner of Mangalayatan University, BCIPL offers
                            end-to-end support — from application assistance and document verification
                            to interview preparation and scholarship guidance. We also showcase
                            Mangalayatan University’s hiring partner advertisements to promote placement
                            opportunities for our graduates.
                        </p>

                        {/* Buttons */}
                        <div className="flex flex-wrap gap-4 mb-8">
                            <button className="bg-primary hover:bg-primary-700 transition text-white px-6 py-2.5 rounded-lg cursor-pointer text-sm font-semibold"
                                onClick={() => navigate("/contact")}
                            >
                                Apply Now
                            </button>

                            <button className="border border-primary text-primary transition px-6 py-2.5 cursor-pointer rounded-lg text-sm font-semibold">
                                Request Counselling
                            </button>
                        </div>

                        {/* Features */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                            <div>
                                <h4 className="font-semibold text-sm text-[#0f172a] mb-1">
                                    Admission Guidance
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Personalized counseling, eligibility checks and application tracking.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm text-[#0f172a] mb-1">
                                    Scholarship & Finance
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Assistance with scholarships, fee structures and student loans.
                                </p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-sm text-[#0f172a] mb-1">
                                    Placements & Hiring
                                </h4>
                                <p className="text-sm text-gray-600">
                                    Showcase of hiring partners and industry-ready training for students.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* RIGHT CARD */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 lg:col-span-2">

                        <h3 className="text-xl font-bold text-[#0f172a] mb-3">
                            Mangalayatan University — Hiring Partners (Advertisement)
                        </h3>

                        <p className="text-gray-600 text-sm leading-relaxed mb-6">
                            We promote the university’s hiring partners as advertisement banners to
                            highlight placement pathways available to students. Below are featured
                            hiring partners — displayed here to support student visibility and employer
                            outreach.
                        </p>

                        {/* Logos Grid */}
                        <div className="grid grid-cols-2 gap-6 mb-6">
                            {[h1, h2, h3, h4].map((item) => (
                                <div
                                    key={item}
                                    className="border border-primary rounded-xl h-24 flex items-center justify-center text-sm text-gray-400"
                                >
                                    <img
                                        src={item}
                                        alt={item}
                                        className="w-40 h-20 object-contain mx-auto"
                                    />
                                </div>
                            ))}
                        </div>

                        <p className="text-xs text-gray-500">
                            Want your company featured?{" "}
                            <span className="text-primary font-semibold cursor-pointer hover:underline">
                                Contact us
                            </span>{" "}
                            to become a hiring partner and reach skilled BCIPL alumni and Mangalayatan
                            University students.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}
