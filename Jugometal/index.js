import React from 'react';
import './style.scss'

import CateBanner from '../../components/CateBanner';



const Jugometal = () => {
    return (
        <>
            <CateBanner className='about-us-banner' h1={'Jugometal'} p={'O Nama'} />
            <div class="o-nama max-width">

                <h1>Jugometal</h1>
                <div class="content">
                    <p>Preduzeće <span className='jugo-title'>Jugometal d.o.o. Svilajnac</span> osnovano je 1990. godine. Višegodišnji rad, saradnja sa
                        poljoprivrednicima, poslovnost i posvećenost potrebama kupaca, doprineli su da <span className='jugo-title'>Jugometal postane lider u
                            prodaji poljoprivredne mehenizacije.</span></p>
                    <p>Naš prodajni program sačinjavaju traktori inostranih proizvođača <span className='traktori-title'>YTO, Solis, Zetor, Ursus, Belarus,
                        Mahindra, IMT, John Deere, Carraro. </span></p>

                    <p>Takođe, zastupamo i prodajemo proizvode domaćih proizvođača
                        priključnih mašina <span className='traktori-title'>FPM Agromehanika iz Boljevca, Morava, Majevica, i dr.</span> kao i proizvode renomiranih
                        firmi iz okruženja  <span className='traktori-title'>SIP Šempeter, INO Brežice, Gorenc Slovenija, Agromehanika Kranj Slovenija, ME-GA iz
                            Hrvatske, Čelmak iz Turske </span> i mnogi drugi.</p>
                    <p>Osim prodaje , <span className='underline'>naša firma obavlja i usluge servisiranja</span>, zahvaljujuci odlično organizovanoj servisnoj
                        službi, opremljenoj originalnim rezervnim delovima.</p>
                </div>
            </div>
        </>
    )
}


export default Jugometal;