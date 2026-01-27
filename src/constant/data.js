import { ancBanner1, ancbn, avatar1, avatar2, avatar3, avatar4, avatar5, avatar6, cc1, cc2, cc3, cc4, cc5, cc6, contactHero, courseAbout1, courseBanner1, p1, p2, p3, terms } from "../assets/assets";

export const courses = [
    // ========================= BANKING =========================
    {
        slug: "banking-next-career-program",

        enrollment: {
            titlePrefix: "Course:",
        },

        hero: {
            title: "Banking Next Career Program",
            subtitle: "Master modern banking operations, compliance, KYC, and customer service essentials.",
            durations: ["BASIC 1 Month", "ADVANCE 3 Months", "PRO 4 Months"],
            image: courseBanner1,
        },

        aboutSection: {
            title: "About This Course",
            description:
                "This program prepares you for modern banking job roles such as branch operations, customer support, KYC assistance, and compliance tasks. The course includes practical modules, banking software exposure, and hands-on workflow training to prepare you for entry-level and mid-level banking roles.",
            image: courseAbout1,

            whoShouldEnroll:
                "Students, commerce graduates, beginners, and job seekers who want to build a stable career in the banking and financial services industry.",

            whatYouWillGain:
                "Practical experience in banking workflows, customer service, compliance, account opening, KYC operations, and interview preparation for bank job roles.",

            idealCareerPaths: [
                "Banking Assistant",
                "KYC / AML Analyst",
                "Customer Service Executive",
                "Branch Operations Executive",
            ],
        },

        coreValuesSection: {
            title: "What You Will Learn In Banking Next Career Program",
            cards: [
                { icon: cc1, title: "Retail Banking & Branch Operations", description: "Day-to-day branch operations and workflows." },
                { icon: cc2, title: "KYC / AML / Compliance", description: "Scenario-based compliance and documentation training." },
                { icon: cc3, title: "Customer Service Excellence", description: "Professional communication and service handling." },
                { icon: cc4, title: "Banking Software & Practical Modules", description: "Hands-on training on banking systems." },
                { icon: cc5, title: "Account Opening & Documentation", description: "Forms, verification and procedures." },
                { icon: cc6, title: "Interview & Job Preparation", description: "Mock interviews and placement preparation." },
            ],
        },
    },

    // ========================= MUTUAL FUND =========================
    {
        slug: "mutual-fund-career-program",
        enrollment: {
            titlePrefix: "Course:",
        },

        hero: {
            title: "Mutual Fund Career Program",
            subtitle: "Learn fund types, SIP strategies, risk profiling, and AMFI-ready advisory skills.",
            durations: ["BASIC 1 Month", "ADVANCE 3 Months", "PRO 4 Months"],
            image: courseBanner1,
        },

        aboutSection: {
            title: "About This Course",
            description:
                "This course is ideal for those who want to start a career in mutual fund advisory, SIP management, and wealth planning. You will learn investment strategies, risk profiling, fund categorization, and client portfolio building.",
            image: courseAbout1,

            whoShouldEnroll:
                "Students, finance aspirants, relationship manager candidates, and beginners looking to enter the wealth management industry.",

            whatYouWillGain:
                "Deep knowledge of mutual fund categories, SIP strategies, client handling, AMFI exam preparation, and real-world wealth advisory workflows.",

            idealCareerPaths: [
                "Mutual Fund Advisor",
                "Wealth Management Executive",
                "Relationship Manager",
                "SIP Portfolio Manager",
            ],
        },

        coreValuesSection: {
            title: "What You Will Learn In Mutual Fund Career Program",
            cards: [
                { icon: cc1, title: "Mutual Fund Basics", description: "Understanding fund structures and categories." },
                { icon: cc2, title: "SIP & Lumpsum Strategies", description: "Investment planning techniques." },
                { icon: cc3, title: "Risk Profiling", description: "Client risk assessment and planning." },
                { icon: cc4, title: "Portfolio Management", description: "Diversified portfolio building." },
                { icon: cc5, title: "AMFI / ARN Preparation", description: "Certification and exam guidance." },
                { icon: cc6, title: "Client Advisory Skills", description: "Professional client communication skills." },
            ],
        },
    },

    // ========================= INSURANCE =========================
    {
        slug: "insurance-xpert-career-program",
        enrollment: {
            titlePrefix: "Course:",
        },

        hero: {
            title: "Insurance Xpert Career Program",
            subtitle: "Build expertise in life, health, motor, and corporate insurance advisory.",
            durations: ["BASIC 1 Month", "ADVANCE 3 Months", "PRO 4 Months"],
            image: courseBanner1,
        },

        aboutSection: {
            title: "About This Course",
            description:
                "This program builds a strong foundation in life, health, motor, and corporate insurance. It covers claims, underwriting, compliance, and professional client advisory processes.",
            image: courseAbout1,

            whoShouldEnroll:
                "Students, job seekers, and aspiring advisors who want to build a career in the insurance industry.",

            whatYouWillGain:
                "Strong product knowledge, claims handling skills, corporate insurance exposure, and IRDAI-oriented training.",

            idealCareerPaths: [
                "Insurance Advisor",
                "Claims Assistant",
                "Underwriting Support",
                "Corporate Insurance Coordinator",
            ],
        },

        coreValuesSection: {
            title: "What You Will Learn In Insurance Xpert Career Program",
            cards: [
                { icon: cc1, title: "Life & Health Insurance", description: "Policies, benefits, and coverage planning." },
                { icon: cc2, title: "Motor & Corporate Insurance", description: "Vehicle and corporate policies." },
                { icon: cc3, title: "Claims Process", description: "Claims documentation and settlement flow." },
                { icon: cc4, title: "Underwriting Basics", description: "Risk assessment fundamentals." },
                { icon: cc5, title: "Client Advisory", description: "Professional sales and advisory skills." },
                { icon: cc6, title: "IRDAI Preparation", description: "Certification and regulatory training." },
            ],
        },
    },

    // ========================= GST & TAX =========================
    {
        slug: "gst-tax-career-program",

        hero: {
            title: "G.S.T & TAX Career Program",
            subtitle: "Get hands-on with GST filing, TDS, taxation rules, and CA office workflows.",
            durations: ["BASIC 1 Month", "ADVANCE 3 Months", "PRO 4 Months"],
            image: courseBanner1,
        },

        aboutSection: {
            title: "About This Course",
            description:
                "This course prepares you for practical accounting and taxation work including GST filing, TDS, income tax returns, and CA office workflows.",
            image: courseAbout1,

            whoShouldEnroll:
                "Commerce students, accounting beginners, job seekers, and CA aspirants.",

            whatYouWillGain:
                "Hands-on experience with GST portals, taxation tools, accounting software, and real office workflows.",

            idealCareerPaths: [
                "GST Return Preparer",
                "Junior Accountant",
                "Tax Assistant",
                "CA Office Executive",
            ],
        },

        coreValuesSection: {
            title: "What You Will Learn In GST & TAX Career Program",
            cards: [
                { icon: cc1, title: "GST Filing", description: "Returns, portals, and compliance." },
                { icon: cc2, title: "TDS & Income Tax", description: "Deductions and tax calculations." },
                { icon: cc3, title: "CA Office Workflow", description: "Real office working methods." },
                { icon: cc4, title: "Accounting Software", description: "Practical tool usage." },
                { icon: cc5, title: "Invoice & Billing", description: "Invoice management and records." },
                { icon: cc6, title: "Tax Planning Basics", description: "Fundamental planning techniques." },
            ],
        },
    },

    // ========================= TRADING =========================
    {
        slug: "trade-xpert-career-program",

        hero: {
            title: "Trade Xpert Career Program",
            subtitle: "Understand trading basics, technical analysis, and live market execution models.",
            durations: ["BASIC 1 Month", "ADVANCE 3 Months", "PRO 4 Months"],
            image: courseBanner1,
        },

        aboutSection: {
            title: "About This Course",
            description:
                "This course focuses on market basics, chart reading, indicators, trading psychology, and real market execution strategies.",
            image: courseAbout1,

            whoShouldEnroll:
                "Beginners, students, and aspiring traders who want to trade professionally.",

            whatYouWillGain:
                "Strong chart reading skills, indicator mastery, discipline, and live trading practice.",

            idealCareerPaths: [
                "Trading Analyst",
                "Equity Dealer",
                "Technical Analyst Intern",
                "Market Research Assistant",
            ],
        },

        coreValuesSection: {
            title: "What You Will Learn In Trade Xpert Career Program",
            cards: [
                { icon: cc1, title: "Market Basics", description: "How markets function." },
                { icon: cc2, title: "Technical Analysis", description: "Indicators and patterns." },
                { icon: cc3, title: "Chart Reading", description: "Candlesticks and price action." },
                { icon: cc4, title: "Trading Psychology", description: "Discipline and mindset." },
                { icon: cc5, title: "Risk Management", description: "Capital protection strategies." },
                { icon: cc6, title: "Live Market Practice", description: "Real execution training." },
            ],
        },
    },
];






export const announcementHeroData = {
    title: "Announcements",
    subtitle: "Your career upgrade starts NOW! BCIPL is launching its next batch with supercharged training, hands-on projects, and placement-focused learning in Banking, Finance & Stock Market fields. If you dream of a high-growth career, this is YOUR moment. Limited seats • High-demand programs • Expert trainers Admissions now OPEN!",
    image: ancBanner1,
};
export const contactHeroData = {
    title: "Enroll Now & Begin Your Banking & Finance Career",
    subtitle: "Secure your seat in India’s leading BFSI Career Programs - Upgrade, Upskill, and Uplift your future.",
    image: contactHero,
};
export const termsHeroData = {
    title: "Terms & Conditions",
    subtitle: "Please read the Terms & Conditions carefully before using BCIPL’s Website, services, online learning platform, or enrolling for any program.",
    image: terms,
};






export const latestAnnouncementsData = {
    title: "Latest Announcements",
    subtitle: "Everything you need to succeed in banking, finance, and fintech",

    image: ancbn,

    items: [
        {
            title: "Admission open for 2026 Session",
            description:
                "Admissions for the 2026 academic session are now open. Interested students can apply through the BCIPL Admission Portal by filling out the online application form. Please ensure all required documents are uploaded and details are submitted accurately to complete your registration process.",
            icon: p3
        },
        {
            title: "New LMS Login Walkthrough Available",
            description:
                "A step-by-step LMS Login Walkthrough PDF is now available on the website. Use this guide to understand secure access to your notes and learning material.",
            icon: p2
        },
        {
            title: "About Notices & Announcements",
            description:
                "Communication is a key part of our student support system. BCIPL provides daily updates through LMS, SMS, email, and WhatsApp to ensure students stay informed about course details, syllabus updates, important dates, and academic activities.",
            icon: p1
        },
    ],
};






export const successStoriesData = {
    title: "Success Stories",
    subtitle: "What our learners say about the BCTFL experience",

    items: [
        {
            name: "Ronny",
            avatar: avatar1,
            rating: 5,
            text: "BCIPL offers hands-on, industry-focused training with very supportive faculty. The concepts are explained in a simple and practical way, which really helped build my confidence. The learning environment is excellent.",
        },
        {
            name: "Vivek Singh",
            avatar: avatar2,
            rating: 5,
            text: "As a struggling job seeker, I was completely confused and unsure about my career path. BCIPL gave me the right direction, practical skills, and the confidence I was missing.",
        },
        {
            name: "Shreya Patel",
            avatar: avatar3,
            rating: 5,
            text: "After struggling for a long time as a job seeker, BCIPL truly changed my life. The practical training and constant support helped me develop real, usable skills and regain my confidence.",
        },
        {
            name: "Shreya Patel",
            avatar: avatar4,
            rating: 5,
            text: "Krishnakoli Ma’am suggested the Mutual Fund course, and it honestly changed my path. With her guidance, practical training, and full support from BCIPL, I gained clarity and confidence.",
        },
        {
            name: "Anya Desai",
            avatar: avatar5,
            rating: 5,
            text: "The faculty and mentorship at BCIPL are truly the best in Kolkata. The way they teach with real-life practical examples makes a huge difference. It honestly feels like they care.",
        },
        {
            name: "Vivek Singh",
            avatar: avatar6,
            rating: 5,
            text: "Payel Ma’am supported me at every step and always motivated me. He was very helpful and kind. With the training at BCIPL, I slowly gained my confidence and skills.",
        },
    ],
};
