import { useState, useRef } from "react";

function JobCollapse({ job }) {
    const [open, setOpen] = useState(false);
    const contentRef = useRef(null);

    return (
        <div className="border border-primary/20 dark:border-slate-700 rounded-xl shadow-md bg-white/40 dark:bg-slate-800/40 backdrop-blur-lg p-5 cursor-pointer">

            <button
                onClick={() => setOpen(!open)}
                className="w-full flex cursor-pointer justify-between items-center text-left"
            >
                <h3 className="text-xl font-semibold dark:text-white">{job.title}</h3>

                <span className="text-primary text-2xl transition-transform duration-300"
                    style={{ transform: open ? "rotate(180deg)" : "rotate(0deg)" }}>
                    ▾
                </span>
            </button>

            {/* Smooth Expand/Collapse Wrapper */}
            <div
                ref={contentRef}
                style={{
                    maxHeight: open ? `${contentRef.current?.scrollHeight}px` : "0px"
                }}
                className="overflow-hidden transition-all duration-500 ease-in-out cursor-pointer"
            >
                <div className="pt-4 space-y-3 text-sm dark:text-slate-300">

                    <p><strong>Location:</strong> {job.location}</p>
                    <p><strong>Experience:</strong> {job.experience}</p>
                    <p><strong>Education:</strong> {job.education}</p>

                    {/* Responsibilities */}
                    <div>
                        <strong>Roles & Responsibilities:</strong>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            {job.responsibilities.map((r, i) => (
                                <li key={i}>{r}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Skills */}
                    <div>
                        <strong>Required Technical Skills:</strong>
                        <ul className="list-disc ml-5 mt-2 space-y-1">
                            {job.skills.map((s, i) => (
                                <li key={i}>{s}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Button */}
                    <button className="mt-4 px-6 py-2 bg-primary text-white rounded-lg font-semibold hover:bg-primary/90 transition cursor-pointer"
                        onClick={() => window.open(job.link, "_blank")}
                    >
                        Apply Now
                    </button>

                </div>
            </div>

        </div>
    );
}
export default JobCollapse;