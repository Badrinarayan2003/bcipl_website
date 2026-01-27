import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import FAQSection from '../../components/fAQSection/FAQSection'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { contactHeroData, successStoriesData } from '../../constant/data'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import SuccessStoriesContact from '../../components/successStoriesContact/SuccessStoriesContact'

export default function Contact() {
    return (
        <>
            <Header />

            <AnnouncementHero hero={contactHeroData} />

            <GetInTouch />

            <SuccessStoriesContact data={successStoriesData} />

            <FAQSection />
            <Footer />
        </>
    )
}
