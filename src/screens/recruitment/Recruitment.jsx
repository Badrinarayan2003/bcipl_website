import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { recruitmentsHeroData } from '../../constant/data'
import Job from '../../components/job/Job'
import Placement from '../../components/placement/Placement'

export default function Recruitment() {
    return (
        <>
            <Header />
            <AnnouncementHero hero={recruitmentsHeroData} />

            <Job />
            <Placement />

            <ReadyToTransform />
            <GetInTouch />
            <Footer />
        </>
    )
}
