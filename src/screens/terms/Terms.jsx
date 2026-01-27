import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { termsHeroData } from '../../constant/data'
import TermSection from '../../components/termSection/TermSection'

export default function Terms() {
    return (
        <>
            <Header />
            <AnnouncementHero hero={termsHeroData} />
<TermSection/>
            <ReadyToTransform />
            <Footer />
        </>
    )
}
