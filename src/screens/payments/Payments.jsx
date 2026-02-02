import React from 'react'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import GetInTouch from '../../components/getInTouch/GetInTouch'
import ReadyToTransform from '../../components/readyToTransform/ReadyToTransform'
import AnnouncementHero from '../../components/announcementHero/AnnouncementHero'
import { paymentHeroData } from '../../constant/data'
import BCIPLPaymentDetails from '../../components/bCIPLPaymentDetails/BCIPLPaymentDetails'

export default function Payments() {
    return (
        <>
            <Header />
            <AnnouncementHero hero={paymentHeroData} />
            <BCIPLPaymentDetails />

            <ReadyToTransform />
            <GetInTouch />
            <Footer />
        </>
    )
}
