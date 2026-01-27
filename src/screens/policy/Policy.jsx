import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { policyHeroData } from '../../constant/data'
import PolicySection from '../../components/policySection/PolicySection'

export default function Policy() {
    return (
        <>
            <Header />
            <AnnouncementHero hero={policyHeroData} />
            <PolicySection />
            <ReadyToTransform />
            <Footer />
        </>
    )
}
