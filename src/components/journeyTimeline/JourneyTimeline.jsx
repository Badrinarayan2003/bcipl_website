import React, { useEffect, useRef } from "react";

export default function JourneyTimelineExact() {
  const svgRef = useRef(null);

  useEffect(() => {
    const paths = svgRef.current.querySelectorAll(".pipe");
    paths.forEach((path) => {
      const len = path.getTotalLength();
      path.style.strokeDasharray = len;
      path.style.strokeDashoffset = len;
      path.getBoundingClientRect();
      path.style.transition = "stroke-dashoffset 1.8s ease";
      path.style.strokeDashoffset = "0";
    });
  }, []);

  return (
    <section className="w-full bg-white py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative">

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-16">
          Our Journey So Far
        </h2>

        {/* RIGHT YEAR RULER */}
        <div className="hidden md:block absolute right-0 top-40 text-sm text-gray-600">
          <div className="flex items-start gap-3">
            <div className="h-[520px] w-[2px] bg-orange-200"></div>
            <div className="flex flex-col justify-between h-[520px]">
              <div className="text-orange-500 font-semibold flex items-center gap-2">
                2002 <span className="w-2 h-2 border-2 border-orange-500 rounded-full"></span>
              </div>
              <div>2010</div>
              <div>2020</div>
              <div>2025</div>
            </div>
          </div>
        </div>

        {/* SVG TIMELINE */}
        <div className="hidden md:block relative">
          <svg
            ref={svgRef}
            viewBox="0 0 800 1200"
            className="w-full h-auto"
            fill="none"
          >
            {/* === TRIPLE PIPES === */}
            {[
              "M400 120 C700 120,700 300,400 300 C100 300,100 500,400 500 C700 500,700 700,400 700 C100 700,100 900,400 900",
              "M380 120 C680 120,680 300,380 300 C120 300,120 500,380 500 C680 500,680 700,380 700 C120 700,120 900,380 900",
              "M420 120 C720 120,720 300,420 300 C80 300,80 500,420 500 C720 500,720 700,420 700 C80 700,80 900,420 900",
            ].map((d, i) => (
              <path
                key={i}
                d={d}
                className="pipe"
                stroke="#FFE2D3"
                strokeWidth="6"
                strokeLinecap="round"
              />
            ))}

            {/* === NODES === */}

            {/* 2002 (Hollow) */}
            <circle cx="400" cy="120" r="42" fill="white" stroke="#FF6A2A" strokeWidth="4" />
            <text x="400" y="126" textAnchor="middle" fontSize="16" fill="#FF6A2A" fontWeight="700">2002</text>

            {/* 2010 (Filled) */}
            <circle cx="400" cy="300" r="42" fill="#FF6A2A" />
            <text x="400" y="306" textAnchor="middle" fontSize="16" fill="white" fontWeight="700">2010</text>

            {/* 2020 (Filled) */}
            <circle cx="400" cy="500" r="42" fill="#FF6A2A" />
            <text x="400" y="506" textAnchor="middle" fontSize="16" fill="white" fontWeight="700">2020</text>

            {/* 2025 (Filled) */}
            <circle cx="400" cy="900" r="42" fill="#FF6A2A" />
            <text x="400" y="906" textAnchor="middle" fontSize="16" fill="white" fontWeight="700">2025</text>

            {/* Faded empty nodes */}
            <circle cx="400" cy="700" r="42" fill="white" stroke="#FFE2D3" strokeWidth="4" />
          </svg>

          {/* === TEXT BLOCKS === */}

          {/* 2002 */}
          <div className="absolute left-0 top-[40px] max-w-xs">
            <h4 className="text-orange-500 font-semibold mb-1">Humble Beginnings</h4>
            <p className="text-gray-600 text-sm">
              Started with a mission to provide affordable education for financially weak students.
            </p>
          </div>

          {/* 2010 */}
          <div className="absolute right-[120px] top-[260px] max-w-xs">
            <h4 className="font-semibold mb-1">Expansion</h4>
            <p className="text-gray-600 text-sm">
              Introduced Banking, Finance & Insurance programs with real-world trainers.
            </p>
          </div>

          {/* 2020 */}
          <div className="absolute left-0 top-[470px] max-w-xs">
            <h4 className="font-semibold mb-1">Digital Transformation</h4>
            <p className="text-gray-600 text-sm">
              Adapted online learning models and scaled training across India.
            </p>
          </div>

          {/* 2025 */}
          <div className="absolute right-[120px] top-[860px] max-w-xs">
            <h4 className="font-semibold mb-1">1178+ Students Trained</h4>
            <p className="text-gray-600 text-sm">
              Became a trusted brand in finance skilling and placement success.
            </p>
          </div>
        </div>

        {/* MOBILE FALLBACK */}
        <div className="md:hidden border-l-2 border-orange-300 pl-6 space-y-10">
          {[
            ["2002", "Humble Beginnings"],
            ["2010", "Expansion"],
            ["2020", "Digital Transformation"],
            ["2025", "1178+ Students Trained"],
          ].map((i) => (
            <div key={i[0]} className="relative">
              <div className="absolute -left-[38px] w-10 h-10 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold">
                {i[0]}
              </div>
              <div className="font-semibold">{i[1]}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}





















// import React, { useEffect, useRef } from "react";

// const milestones = [
//     {
//         year: "2002",
//         title: "Humble Beginnings",
//         desc: "Started with a mission to provide affordable education for financially weak students.",
//     },
//     {
//         year: "2010",
//         title: "Expansion",
//         desc: "Introduced Banking, Finance & Insurance programs with real-world trainers.",
//     },
//     {
//         year: "2020",
//         title: "Digital Transformation",
//         desc: "Adopted online learning models and scaled training across India.",
//     },
//     {
//         year: "2025",
//         title: "1178+ Students Trained",
//         desc: "Became a trusted brand in finance skilling and placement success.",
//     },
// ];

// export default function JourneyTimeline() {
//     const itemsRef = useRef([]);

//     useEffect(() => {
//         const observer = new IntersectionObserver(
//             (entries) => {
//                 entries.forEach((entry) => {
//                     if (entry.isIntersecting) {
//                         entry.target.classList.add("opacity-100", "translate-y-0");
//                     }
//                 });
//             },
//             { threshold: 0.2 }
//         );

//         itemsRef.current.forEach((el) => el && observer.observe(el));

//         return () => observer.disconnect();
//     }, []);

//     return (
//         <section className="w-full bg-white py-20">
//             <div className="max-w-6xl mx-auto px-6">

//                 {/* Heading */}
//                 <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-center mb-20">
//                     Our Journey So Far
//                 </h2>

//                 {/* Timeline Wrapper */}
//                 <div className="relative">

//                     {/* Vertical guide line (for mobile) */}
//                     <div className="absolute left-1/2 top-0 bottom-0 w-[2px] bg-orange-200 md:hidden"></div>

//                     <div className="flex flex-col gap-24">

//                         {milestones.map((item, index) => (
//                             <div
//                                 key={index}
//                                 ref={(el) => (itemsRef.current[index] = el)}
//                                 className={`relative flex flex-col md:flex-row items-center opacity-0 translate-y-12 transition-all duration-700 ease-out ${index % 2 === 0 ? "md:flex-row-reverse" : ""
//                                     }`}
//                             >
//                                 {/* Text */}
//                                 <div className="w-full md:w-1/2 px-6">
//                                     <h4 className="text-orange-500 font-semibold mb-2">
//                                         {item.title}
//                                     </h4>
//                                     <p className="text-gray-600 text-sm leading-relaxed max-w-sm">
//                                         {item.desc}
//                                     </p>
//                                 </div>

//                                 {/* Center Node */}
//                                 <div className="relative z-10 flex items-center justify-center w-24 h-24 shrink-0">

//                                     {/* Outer ring */}
//                                     <div className="absolute w-24 h-24 rounded-full border-4 border-orange-200"></div>

//                                     {/* Inner circle */}
//                                     <div className="w-16 h-16 rounded-full bg-orange-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
//                                         {item.year}
//                                     </div>
//                                 </div>

//                                 {/* Spacer */}
//                                 <div className="w-full md:w-1/2 px-6"></div>

//                             </div>
//                         ))}
//                     </div>

//                 </div>

//                 {/* Right Year Scale (Desktop Only) */}
//                 <div className="hidden md:block absolute right-20 top-[200px] text-sm text-gray-500 space-y-16">
//                     <div className="text-orange-500 font-semibold">2002</div>
//                     <div>2010</div>
//                     <div>2020</div>
//                     <div>2025</div>
//                 </div>

//             </div>
//         </section>
//     );
// }
