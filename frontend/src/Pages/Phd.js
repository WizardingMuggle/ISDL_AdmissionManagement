import React from 'react'
import InstituteGlance from '../Components/Arpit/InstituteGlance'
import Footer from '../Components/chirag/Footer'
import CommonBanner from '../Components/chirag/CommonBanner'
import ProgPhd from '../Components/chirag/ProgPhd'
import PhdHighlight from '../Components/chirag/PhdHighlight'
import GoToTop from '../Components/chirag/GoToTop'
import PhdStart from '../Components/chirag/PhdStart'

const Phd = () => {
    return (
        <div>
            <CommonBanner />
            <PhdStart />
            <ProgPhd />
            <PhdHighlight />
            <InstituteGlance />
            <GoToTop />
            <Footer />
        </div>
    )
}

export default Phd;