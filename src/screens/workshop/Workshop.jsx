import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { workshopHeroData } from '../../constant/data'
import WorkshopSection from '../../components/workshopSection/WorkshopSection'

export default function Workshop() {
    return (
        <>
            <Header />
            <AnnouncementHero hero={workshopHeroData} />

            <WorkshopSection />

            <ReadyToTransform />
            <GetInTouch />
            <Footer />
        </>
    )
}
