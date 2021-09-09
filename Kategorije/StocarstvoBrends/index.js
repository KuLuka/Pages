import React from 'react';
import { Link } from 'react-router-dom'
import CateBanner from '../../../components/CateBanner';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../../animation';
import { useScroll } from '../../../components/UseScroll';

const StocarstvoBrends = () => {

    const [element, controls] = useScroll();


    return (
        <>
            <CateBanner h1={'Stočarstvo'} p={'Izaberite iz naše ponude mašina namenjene stočarstvu'} className='stocarstvo-banner' />

            <motion.div initial='hidden' variants={pageAnimation} ref={element} animate={controls} className="six-grid-system">
                <div className="box">
                    <h2>Kosačice</h2>
                    <div className="box-brands">
                        <p>FPM</p>
                        <p>SIP</p>
                        <p>Wirax</p>
                    </div>
                    <Link to='/stocarstvo/kosacice'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Rasturači sena</h2>
                    <div className="box-brands">
                        <p>SIP Šempeter</p>
                    </div>
                    <Link to='/stocarstvo/rasturaci-sena'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Sakupljaci sena</h2>
                    <div className="box-brands">
                        <p>SIP Šempeter</p>
                        <p>Tehnometal Ada</p>
                        <p>FPM</p>
                    </div>
                    <Link to='/stocarstvo/sakupljaci'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Balirke</h2>
                    <div className="box-brands">
                        <p>Ursus</p>
                    </div>
                    <Link to='/stocarstvo/balirke'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Motalice za bale</h2>
                    <div className="box-brands">
                        <p>Metal-Fach</p>
                    </div>
                    <Link to='/stocarstvo/motalice'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Hidr.utovarivač</h2>
                    <div className="box-brands ">
                        <p>Ferocoop</p>

                    </div>
                    <Link to='/stocarstvo/hirdaulicni-utovarivac-stajnjaka'>Detaljnije</Link>
                </div>

            </motion.div>
        </>
    )
}

export default StocarstvoBrends;