import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { AdmissionHeroData } from '../../constant/data'

export default function Admission() {
    return (
        <>
            <Header />
            <AnnouncementHero hero={AdmissionHeroData} />

            <ReadyToTransform />
            <GetInTouch />
            <Footer />
        </>
    )
}
