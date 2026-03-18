import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { accreditationsHeroData } from '../../constant/data'
import UniversityPathway from '../../components/universityPathway/UniversityPathway'
import HiringAdFlow from '../../components/hiringAdFlow/HiringAdFlow'

export default function Accreditation() {
    return (
        <>
            <Header />
            <AnnouncementHero hero={accreditationsHeroData} />

            <UniversityPathway />
            <HiringAdFlow />
            <ReadyToTransform />
            <GetInTouch />
            <Footer />
        </>
    )
}
