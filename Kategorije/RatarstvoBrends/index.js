import React from 'react';
import './../style.scss'
import { Link } from 'react-router-dom'
import CateBanner from '../../../components/CateBanner';
import { motion } from 'framer-motion';
import { pageAnimation } from '../../../animation';
import { useScroll } from '../../../components/UseScroll';

const RatarstvoBrends = () => {

    const [element, controls] = useScroll();

    return (
        <>
            <CateBanner h1={'Ratarstvo'} p={'Pogledajte našu ponudu ratarskih poljoprivrednih mašina'} className='ratarstvo-banner' />

            <motion.div initial='hidden' variants={pageAnimation} ref={element} animate={controls} className="six-grid-system">
                <div className="box">
                    <h2>Plugovi</h2>
                    <div className="box-brands">
                        <p>IMT</p>
                        <p>Agro Lemind</p>
                        <p>Bell Impex</p>
                    </div>
                    <Link to='/ratarstvo/plugovi'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Freze</h2>
                    <div className="box-brands">
                        <p>FPM</p>
                        <p>Minos Agri</p>
                        <p>Fužinar</p>
                    </div>
                    <Link to='/ratarstvo/traktorske-freze'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Tanjirače</h2>
                    <div className="box-brands">
                        <p>Gorenc</p>
                        <p>Ferocoop</p>
                        <p>Majevica</p>
                    </div>
                    <Link to='/ratarstvo/tanjirace'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Setvospremači</h2>
                    <div className="box-brands">
                        <p>Gorenc</p>
                        <p>Majevica</p>
                    </div>
                    <Link to='/ratarstvo/setvospremaci'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Žitne sejalice</h2>
                    <div className="box-brands">
                        <p>Majevica</p>
                    </div>
                    <Link to='/ratarstvo/sejalice'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Pneumatkse Sejalice</h2>
                    <div className="box-brands">
                        <p>Majevica</p>
                    </div>
                    <Link to='/ratarstvo/pneumatske-sejalice'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Prskalice</h2>
                    <div className="box-brands">
                        <p>Agromehanika Kranj</p>
                        <p>Morava Požarevac</p>
                    </div>
                    <Link to='/ratarstvo/prskalice'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Rasipači vešt.đubriva</h2>
                    <div className="box-brands">
                        <p>INO Brežice</p>
                        <p>Ferocoop</p>
                        <p>Minos Agri</p>
                    </div>
                    <Link to='/ratarstvo/rasipaci'>Detaljnije</Link>
                </div>

                <div className="box">
                    <h2>Berači</h2>
                    <div className="box-brands">
                        <p>Majevica</p>
                    </div>
                    <Link to='/ratarstvo/beraci'>Detaljnije</Link>
                </div>
            </motion.div>
        </>
    )
}

export default RatarstvoBrends;