import { useState } from "react";

/* ---------------- SCHOLARSHIP DATA ---------------- */
const scholarshipData = [
    ["Single Mother Support Scholarship", "Only child of a single mother", "10%", "Full duration program, tuition fee only"],
    ["Orphan (No Parental) Support Scholarship", "Students without both parents / under guardian care", "20%", "Full duration program, tuition fee only"],
    ["EWS / BPL Card Scholarship", "Valid EWS or BPL certificate", "20%", "Full duration program, tuition fee only"],
    ["War Martyrs' / Widows Scholarship", "Children & widows of war martyrs", "20%", "Full duration program, tuition fee only"],
    ["Army & Agniveer / Force Personnel", "Serving candidates under Agnipath / armed forces", "20%", "Full duration program, tuition fee only"],
    ["SC / ST Category Scholarship", "Students belonging to SC/ST or backward categories", "15%", "Full duration program, tuition fee only"],
    ["Staff Ward Scholarship", "Children of BCIPL faculty & staff", "25%", "Full duration program or while in service"],
    ["Merit-Based Scholarship (1)", "90%+ in 12th (UG) or Graduation (PG)", "20%", "1st year, tuition fee only"],
    ["Merit-Based Scholarship (2)", "75%–89.9% in 12th/graduation", "10%", "1st year, tuition fee only"],
];

/* ---------------- COMPONENT ---------------- */
export default function ScholarshipTable() {
    const [page, setPage] = useState(1);
    const itemsPerPage = 5;

    const startIndex = (page - 1) * itemsPerPage;
    const selectedRows = scholarshipData.slice(startIndex, startIndex + itemsPerPage);
    const totalPages = Math.ceil(scholarshipData.length / itemsPerPage);

    return (
        <section className="py-24 bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950">
            <div className="max-w-7xl mx-auto px-6">

                {/* Header */}
                <div className="text-center mb-14">
                    <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">
                        BCIPL Scholarship Programs
                    </h2>
                    <p className="text-slate-600 dark:text-slate-400 mt-3 max-w-2xl mx-auto">
                        Explore our scholarship categories designed to support students from all backgrounds.
                    </p>
                </div>

                {/* Table Card */}
                <div className="relative overflow-hidden rounded-3xl border border-primary/20 dark:border-slate-700 bg-white/70 dark:bg-slate-900/60 backdrop-blur-xl shadow-2xl">

                    {/* Glow Effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-transparent to-primary/10 pointer-events-none"></div>

                    <div className="relative overflow-x-auto">
                        <table className="w-full text-left text-sm">

                            {/* Table Head */}
                            <thead className="bg-primary/10 dark:bg-primary/20 border-b border-primary/20 dark:border-slate-700">
                                <tr>
                                    <th className="p-5 font-semibold text-primary dark:text-white">Scholarship Category</th>
                                    <th className="p-5 font-semibold text-primary dark:text-white">Eligibility</th>
                                    <th className="p-5 font-semibold text-primary dark:text-white">Scholarship</th>
                                    <th className="p-5 font-semibold text-primary dark:text-white">Applicability</th>
                                </tr>
                            </thead>

                            {/* Table Body */}
                            <tbody className="divide-y divide-primary/10 dark:divide-slate-700 bg-white">
                                {selectedRows.map((row, i) => (
                                    <tr
                                        key={i}
                                        className="hover:bg-primary/5 dark:hover:bg-white/5 transition"
                                    >
                                        <td className="p-5 font-medium text-slate-800 dark:text-white">
                                            {row[0]}
                                        </td>
                                        <td className="p-5 text-slate-600 dark:text-slate-300">
                                            {row[1]}
                                        </td>
                                        <td className="p-5">
                                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary font-semibold text-sm">
                                                {row[2]}
                                            </span>
                                        </td>
                                        <td className="p-5 text-slate-600 dark:text-slate-300">
                                            {row[3]}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>

                        </table>
                    </div>
                </div>

                {/* Pagination */}
                <div className="flex justify-end items-center mt-8 gap-4">

                    <button
                        disabled={page === 1}
                        onClick={() => setPage(page - 1)}
                        className={`px-5 py-2 rounded-xl border border-primary/30 bg-primary/10 text-primary font-medium shadow hover:scale-105 transition
                        ${page === 1 ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                        ← Previous
                    </button>

                    <span className="text-primary dark:text-white font-semibold">
                        Page {page} of {totalPages}
                    </span>

                    <button
                        disabled={page === totalPages}
                        onClick={() => setPage(page + 1)}
                        className={`px-5 py-2 rounded-xl border border-primary/30 bg-primary/10 text-primary font-medium shadow hover:scale-105 transition
                        ${page === totalPages ? "opacity-40 cursor-not-allowed" : "cursor-pointer"}`}
                    >
                        Next →
                    </button>

                </div>

            </div>
        </section>
    );
}
