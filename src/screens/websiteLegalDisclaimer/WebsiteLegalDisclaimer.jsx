import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { disclemerHeroData, policyHeroData } from '../../constant/data'
import PolicySection from '../../components/policySection/PolicySection'
import LegalDisclaimer from '../../components/legalDisclaimer/LegalDisclaimer'

export default function WebsiteLegalDisclaimer() {
    return (
        <>
            <Header />
            <AnnouncementHero hero={disclemerHeroData} />
            <LegalDisclaimer />
            <ReadyToTransform />
            <Footer />
        </>
    )
}
