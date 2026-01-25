import React from "react";
import { Check, CheckCircle } from "lucide-react";
import { missionImg, pathImg, visionImg } from "../../assets/assets";

export default function CourseAbout({ about }) {
    if (!about) return null;

    return (
        <section className="py-10 px-6 bg-white">
            <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

                {/* LEFT CONTENT */}
                <div>

                    {/* TITLE */}
                    <h2 className="text-3xl sm:text-4xl font-bold text-black mb-4">
                        {about.title}
                    </h2>

                    {/* DESCRIPTION */}
                    <p className="text-gray-600 mb-8 leading-relaxed text-sm">
                        {about.description}
                    </p>

                    {/* WHO SHOULD ENROLL */}
                    <div className="flex gap-4 mb-6">
                        <div className="w-14 h-14 flex items-center justify-center shrink-0">
                            <img src={visionImg} alt="Mission" className="w-12 h-12 object-contain" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">Who Should Enroll?</h4>
                            <p className="text-gray-600 text-sm mt-1">
                                {about.whoShouldEnroll}
                            </p>
                        </div>
                    </div>

                    {/* WHAT YOU WILL GAIN */}
                    <div className="flex gap-4 mb-6">
                        <div className="w-14 h-14 flex items-center justify-center shrink-0">
                            <img src={missionImg} alt="Vision" className="w-12 h-12 object-contain" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg">What You Will Gain</h4>
                            <p className="text-gray-600 text-sm mt-1">
                                {about.whatYouWillGain}
                            </p>
                        </div>
                    </div>

                    {/* CAREER PATHS */}
                    <div className="flex gap-4">
                        <div className="w-14 h-14 flex items-center justify-center shrink-0">
                            <img src={pathImg} alt="Vision" className="w-12 h-12 object-contain" />
                        </div>
                        <div>
                            <h4 className="font-semibold text-lg mb-2">Ideal Career Paths</h4>
                            <ul className="space-y-1">
                                {about.idealCareerPaths.map((path, i) => (
                                    <li key={i} className="flex items-center gap-2 text-gray-700 text-sm">
                                        <Check className="w-4 h-4 text-orange-600" />
                                        {path}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>

                </div>

                {/* RIGHT IMAGE */}
                <div className="relative">
                    <div className="rounded-2xl overflow-hidden">
                        <img
                            src={about.image}
                            alt={about.title}
                            className="w-full h-[500px] object-contain"
                        />
                    </div>
                </div>

            </div>
        </section>
    );
}
