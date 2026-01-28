import React from "react";
import {
    Briefcase,
    Video,
    Network,
    Sparkles,
    BookOpenCheck,
    UserCheck,
} from "lucide-react";
import { whyImg } from "../../assets/assets";


const features = [
    {
        title: "Practical Training",
        desc: "Real projects and simulations mirroring actual banking, insurance, and trading desks",
        icon: <Briefcase size={20} />,
    },
    {
        title: "Live Classes, Anytime",
        desc: "Attend live interactive sessions and access recordings whenever you want",
        icon: <Video size={20} />,
    },
    {
        title: "Industry Networking",
        desc: "Connect with industry professionals, mentors, and hiring partners",
        icon: <Network size={20} />,
    },
    {
        title: "Soft Skills Development",
        desc: "Improve communication, confidence, and workplace professionalism",
        icon: <Sparkles size={20} />,
    },
    {
        title: "Industry-Aligned Curriculum",
        desc: "Courses designed to match current banking, finance, and fintech demands",
        icon: <BookOpenCheck size={20} />,
    },
    {
        title: "Expert Faculty",
        desc: "Learn directly from experienced professionals and domain experts",
        icon: <UserCheck size={20} />,
    },
];


export default function WhyChooseBCIPL() {
    return (
        <section className="w-full py-16 px-4">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-3xl lg:text-4xl font-bold text-black">
                        Why Choose BCIPL
                    </h2>
                    <p className="mt-2 text-gray-600">
                        Everything you need to succeed in banking, finance, and fintech
                    </p>

                    <div className="mt-8 flex flex-col gap-4">
                        {features.map((item, i) => (
                            <div
                                key={i}
                                className="group flex items-start gap-4 p-5 rounded-2xl border bg-white border-gray-200 transition-all duration-300 hover:text-white hover:border-transparent hover:shadow-lg gbg"
                            >
                                <div
                                    className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-secondary text-white transition-all duration-300 group-hover:bg-white/80 group-hover:text-blue-600"
                                >
                                    {item.icon}
                                </div>

                                <div>
                                    <h4 className="font-semibold">{item.title}</h4>
                                    {item.desc && (
                                        <p className="mt-1 text-sm text-gray-600 transition-colors duration-300 group-hover:text-white/90">

                                            {item.desc}
                                        </p>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT IMAGE */}
                <div className="flex justify-center">
                    <div className="relative">
                        <img
                            src={whyImg}
                            alt="Students"
                            className="rounded-3xl max-h-[620px] object-cover"
                        />


                    </div>
                </div>

            </div>
        </section>
    );
}


























// import React from "react";
// import {
//     Briefcase,
//     Video,
//     Network,
//     Sparkles,
//     BookOpenCheck,
//     UserCheck,
// } from "lucide-react";
// import { whyImg } from "../../assets/assets";


// // const features = [
// //     {
// //         title: "Practical Training",
// //         desc: "Real projects and simulations mirroring actual banking, insurance, and trading desks",
// //         icon: <Briefcase size={20} />,
// //         active: true,
// //     },
// //     {
// //         title: "Live Classes, Anytime",
// //         icon: <Video size={20} />,
// //     },
// //     {
// //         title: "Industry Networking",
// //         icon: <Network size={20} />,
// //     },
// //     {
// //         title: "Soft Skills Development",
// //         icon: <Sparkles size={20} />,
// //     },
// //     {
// //         title: "Industry-Aligned Curriculum",
// //         icon: <BookOpenCheck size={20} />,
// //     },
// //     {
// //         title: "Expert Faculty",
// //         icon: <UserCheck size={20} />,
// //     },
// // ];

// const features = [
//     {
//         title: "Practical Training",
//         desc: "Real projects and simulations mirroring actual banking, insurance, and trading desks",
//         icon: <Briefcase size={20} />,
//     },
//     {
//         title: "Live Classes, Anytime",
//         desc: "Attend live interactive sessions and access recordings whenever you want",
//         icon: <Video size={20} />,
//     },
//     {
//         title: "Industry Networking",
//         desc: "Connect with industry professionals, mentors, and hiring partners",
//         icon: <Network size={20} />,
//     },
//     {
//         title: "Soft Skills Development",
//         desc: "Improve communication, confidence, and workplace professionalism",
//         icon: <Sparkles size={20} />,
//     },
//     {
//         title: "Industry-Aligned Curriculum",
//         desc: "Courses designed to match current banking, finance, and fintech demands",
//         icon: <BookOpenCheck size={20} />,
//     },
//     {
//         title: "Expert Faculty",
//         desc: "Learn directly from experienced professionals and domain experts",
//         icon: <UserCheck size={20} />,
//     },
// ];


// export default function WhyChooseBCIPL() {
//     return (
//         <section className="w-full py-16 px-4">
//             <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">

//                 {/* LEFT CONTENT */}
//                 <div>
//                     <h2 className="text-3xl lg:text-4xl font-bold text-black">
//                         Why Choose BCIPL
//                     </h2>
//                     <p className="mt-2 text-gray-600">
//                         Everything you need to succeed in banking, finance, and fintech
//                     </p>

//                     <div className="mt-8 flex flex-col gap-4">
//                         {features.map((item, i) => (
//                             <div
//                                 key={i}
//                                 className={`flex items-start gap-4 p-4 rounded-2xl border transition-all ${item.active
//                                     ? "bg-bcipl-blue text-white border-transparent py-9 shadow"
//                                     : "bg-white border-gray-200 hover:border-primary hover:shadow"
//                                     }`}

//                             >
//                                 <div
//                                     className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${item.active ? "bg-white/60" : "bg-secondary text-white"
//                                         }`}
//                                 >
//                                     {item.icon}
//                                 </div>

//                                 <div>
//                                     <h4 className="font-semibold">{item.title}</h4>
//                                     {item.desc && (
//                                         <p
//                                             className={`mt-1 text-sm ${item.active ? "text-white/90" : "text-gray-600"
//                                                 }`}
//                                         >
//                                             {item.desc}
//                                         </p>
//                                     )}
//                                 </div>
//                             </div>
//                         ))}
//                     </div>
//                 </div>

//                 {/* RIGHT IMAGE */}
//                 <div className="flex justify-center">
//                     <div className="relative">
//                         <img
//                             src={whyImg}
//                             alt="Students"
//                             className="rounded-3xl max-h-[620px] object-cover"
//                         />


//                     </div>
//                 </div>

//             </div>
//         </section>
//     );
// }
