import { cc1, cc2, cc3, cc4, cc5, cc6, courseAbout1, courseBanner1 } from "../assets/assets";

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