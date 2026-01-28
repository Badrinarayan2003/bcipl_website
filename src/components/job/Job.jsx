import React from 'react'
import JobCollapse from '../jobCollapse/JobCollapse'

export default function Job() {


    const jobFile = [
        {
            title: "Operation Manager",
            location: "Kolkata",
            experience: "Varies by role",
            education: "Relevant technical degree",
            responsibilities: [
                "Strategic Planning & Execution",
                "Operational Excellence & Process Design",
                "Sales Growth & Business Development",
                "Data-Driven Decision Making",
                "Team Leadership & Performance Management",
                "CRM, Reporting & Automation Systems",
                "Stakeholder Engagement & Client Retention",
            ],
            skills: [
                "Leadership & Team Management", " Operations Strategy & Process Optimization", "Sales Planning & Revenue Growth", " CRM & Automation Tools", " Market Expansion & Partnerships"
            ],
            link: "https://www.linkedin.com/company/bci-professional-learning/jobs/"
        }

    ]

    return (
        <section className="py-20 px-6 bg-background dark:bg-slate-900">
            <div className="max-w-5xl mx-auto space-y-12">

                <div className="text-center space-y-4">
                    <h2 className="text-3xl sm:text-4xl font-bold dark:text-white">
                        Job Openings
                    </h2>
                    <p className="text-muted-foreground dark:text-slate-300 max-w-2xl mx-auto">
                        Explore current opportunities across technology, infrastructure, engineering & operations.
                    </p>
                </div>

                {/* JOB LIST */}
                <div className="space-y-4">

                    {jobFile.map((job, index) => (
                        <JobCollapse key={index} job={job} />
                    ))}

                </div>

            </div>
        </section>
    )
}
