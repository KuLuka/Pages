import React from 'react';
import './style.scss'
import CateBanner from './../../components/CateBanner';


const Finansiranje = () => {
    return (
        <>
            <CateBanner className='finance-banner' h1={'Finansiranje'} p={'Obnovite poljoprivrednu mehanizaciju'} />
            <div className="finans max-width">
                <h1>Finansiranje</h1>
                <div className="content">
                    <p><span className='kupci'><i>Poštovani kupci,</i></span></p>
                    <p>Iskoristite šansu da pod veoma povoljnim uslovima obnovite Vašu poljoprivrednu mehanizaciju.</p>
                    <p><span className='traktori-title'>Celokupan asortiman naših proizvoda možete kupiti sa rokom otplate od 3 godine i dinarskom kamatnom stopom od 6% na godišnjem nivou.</span></p>
                    <p>Ovaj način subvencionisanog finansiranja se odvija u saradnji sa Ministarstvom poljoprivrede i sledećih banaka:</p>
                    <ul>
                        <li> - ProCredit banka</li>
                        <li> - Banca Intesa</li>
                        <li> - Komercijalna banka</li>
                    </ul>

                    <p className='small'><span className='traktori-title'>Za dodatne informacije obratite se telefonom na broj 035/312-391.</span></p>
                </div>
            </div>
        </>
    )
}


export default Finansiranje;