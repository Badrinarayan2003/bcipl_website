import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { faqHeroData } from '../../constant/data'
import FAQSection from '../../components/fAQSection/FAQSection'

export default function Faq() {
    return (
        <>
            <Header />
            <AnnouncementHero hero={faqHeroData} />
            <FAQSection />
            <ReadyToTransform />
            <Footer />
        </>
    )
}
