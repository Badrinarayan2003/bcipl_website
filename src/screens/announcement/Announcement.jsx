import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import { announcementHeroData, latestAnnouncementsData } from '../../constant/data'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import LatestAnnouncements from '../../components/latestAnnouncements/LatestAnnouncements'

export default function Announcement() {
    return (
        <>
            <Header />
            <AnnouncementHero hero={announcementHeroData} />
            <LatestAnnouncements data={latestAnnouncementsData} />
            <ReadyToTransform />
            <GetInTouch />
            <Footer />
        </>
    )
}
