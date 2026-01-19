import React from 'react'
import Header from '../../components/header/Header'
import HeroSection from '../../components/heroSection/HeroSection'
import HiringPartners from '../../components/hiringPartners/HiringPartners'
import StatsSection from '../../components/statsSection/StatsSection'
import AboutSection from '../../components/aboutSection/AboutSection'
import WhyDifferent from '../../components/whyDifferent/WhyDifferent'
import StudentJourney from '../../components/studentJourney/StudentJourney'
import WhyChooseBCIPL from '../../components/whyChooseBCIPL/WhyChooseBCIPL'
import ExpertsSlider from '../../components/expertsSlider/ExpertsSlider'
import SuccessStories from '../../components/successStories/SuccessStories'
import CourseOfferingsSlider from '../../components/courseOfferingsSlider/CourseOfferingsSlider'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import Footer from '../../components/footer/Footer'



export default function Home() {
    return (
        <>
            <Header />
            <HeroSection />
            <HiringPartners />
            <StatsSection />
            <AboutSection />
            <WhyDifferent />
            <StudentJourney />
            <WhyChooseBCIPL />
            <ExpertsSlider />
            <SuccessStories />
            <CourseOfferingsSlider />
            <ReadyToTransform />
            <GetInTouch />
            <Footer/>
        </>
    )
}
