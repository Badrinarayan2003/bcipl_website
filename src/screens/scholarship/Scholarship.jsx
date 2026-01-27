import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { schoolarshipHeroData } from '../../constant/data'
import ScholarshipTable from '../../components/scholarshipTable/ScholarshipTable'

export default function Scholarship() {
    return (
        <>
            <Header />

            <AnnouncementHero hero={schoolarshipHeroData} />

            <ScholarshipTable />

            <ReadyToTransform />
            <Footer />
        </>
    )
}
