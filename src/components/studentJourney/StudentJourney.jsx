import React from "react";
import {
    centerImg,
    step1,
    step2,
    step3,
    step4,
    step5,
    step6,
} from "../../assets/assets";



// Reusable Card
function JourneyCard({ no, title, quote, img }) {
    return (
        <div className="relative bg-[#f7f9fc] rounded-3xl pl-6 pt-19 pb-10 pr-28 overflow-hidden shadow-sm">

            {/* Number Badge */}
            <div className="absolute -top-2 -left-2 w-16 h-16 bg-primary rounded-full flex items-center justify-center">
                <span className="text-white text-2xl font-bold relative top-2 left-2">
                    {no}.
                </span>
            </div>

            {/* Content */}
            <h3 className="text-lg md:text-xl font-bold text-black">
                {title}
            </h3>

            <p className="mt-1 text-gray-600 italic text-sm md:text-base">
                {quote}
            </p>

            {/* Right Image */}
            <img
                src={img}
                alt={title}
                className="absolute bottom-4 right-4 w-20 md:w-24 object-contain"
            />
        </div>
    );
}

export default function StudentJourney() {
    return (
        <section className="w-full py-16 px-4">
            <div className="max-w-7xl mx-auto">

                {/* Heading */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-bold text-black">
                        BCIPL Student Journey
                    </h2>
                    <p className="mt-3 text-gray-600 max-w-2xl mx-auto">
                        Premium learning experiences combining academic rigor with real-world industry applications
                    </p>
                </div>

                {/* Layout */}
                <div className="hidden lg:grid grid-cols-3 gap-10 items-center">

                    <div className="flex flex-col gap-8">
                        <JourneyCard no={1} title="Discovery & Counseling" quote='"Google Baba, Guide Me!"' img={step1} />
                        <JourneyCard no={3} title="Learning Phase" quote='"CAGR Finally Makes Sense!"' img={step3} />
                        <JourneyCard no={5} title="Exam & Certification" quote='"Easy Tha... Thoda."' img={step5} />
                    </div>

                    <div className="flex justify-center">
                        <img src={centerImg} alt="Student" className="rounded-3xl max-h-[520px] object-cover shadow-lg" />
                    </div>

                    <div className="flex flex-col gap-8">
                        <JourneyCard no={2} title="Admission & First-Day Vibes" quote='"Ma, I’m Doing Something Big!"' img={step2} />
                        <JourneyCard no={4} title="Practice & Confidence Boost" quote='"Sir, Now I’ll Explain!"' img={step4} />
                        <JourneyCard no={6} title="Placement & Alumni Life" quote='"BCIPL Changed Everything"' img={step6} />
                    </div>

                </div>

                <div className="lg:hidden flex flex-col gap-8">

                    <JourneyCard no={1} title="Discovery & Counseling" quote='"Google Baba, Guide Me!"' img={step1} />
                    <JourneyCard no={2} title="Admission & First-Day Vibes" quote='"Ma, I’m Doing Something Big!"' img={step2} />
                    <JourneyCard no={3} title="Learning Phase" quote='"CAGR Finally Makes Sense!"' img={step3} />

                    <img
                        src={centerImg}
                        alt="Student"
                        className="rounded-3xl max-h-[360px] object-cover shadow-lg mt-6"
                    />

                    <JourneyCard no={4} title="Practice & Confidence Boost" quote='"Sir, Now I’ll Explain!"' img={step4} />
                    <JourneyCard no={5} title="Exam & Certification" quote='"Easy Tha... Thoda."' img={step5} />
                    <JourneyCard no={6} title="Placement & Alumni Life" quote='"BCIPL Changed Everything"' img={step6} />


                </div>





            </div>
        </section>
    );
}