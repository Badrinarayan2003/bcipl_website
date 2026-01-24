import React from 'react'
import AboutBanner from '../../components/aboutBanner/AboutBanner'
import Header from '../../components/header/Header'
import WhoWeAre from '../../components/whoWeAre/WhoWeAre'
import CoreValues from '../../components/coreValues/CoreValues'
import JourneyTimeline from '../../components/journeyTimeline/JourneyTimeline'
import Achievements from '../../components/achievements/Achievements'
import FAQSection from '../../components/fAQSection/FAQSection'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import Footer from '../../components/footer/Footer'

export default function About() {
  return (
    <>
      <Header />
      <AboutBanner />
      <WhoWeAre />
      <CoreValues />
      {/* <JourneyTimeline /> */}
      <Achievements />
      <FAQSection />
      <GetInTouch />
      <Footer />
    </>
  )
}
