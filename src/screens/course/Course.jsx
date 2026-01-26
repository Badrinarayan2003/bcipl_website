import React from "react";
import { useParams } from "react-router-dom";

import Header from "../../components/header/Header";
import CourseHero from "../../components/courseHero/CourseHero";
import { courses } from "../../constant/data";
import CourseAbout from "../../components/courseAbout/CourseAbout";
import CourseCoreValuesSection from "../../components/courseCoreValuesSection/CourseCoreValuesSection";
import FAQSection from "../../components/fAQSection/FAQSection";
import ReadyToTransform from "../../components/readyToTransform/ReadyToTransform";
import Footer from "../../components/footer/Footer";
import CourseEnrollment from "../../components/courseEnrollment/CourseEnrollment";

export default function Course() {
    const { slug } = useParams();

    const course = courses.find(c => c.slug === slug);

    if (!course) {
        return (
            <div className="py-40 text-center text-3xl font-bold text-red-600">
                Course Not Found
            </div>
        );
    }

    return (
        <>
            <Header />

            <CourseHero hero={course.hero} />

            <CourseAbout about={course.aboutSection} />

            <CourseCoreValuesSection data={course.coreValuesSection} />

            <FAQSection />

            <ReadyToTransform />

            <CourseEnrollment course={course} />
            <Footer />
        </>
    );
}
