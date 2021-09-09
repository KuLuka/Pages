import React from 'react';
import Checkout from './../../components/Checkout';
import CateBanner from '../../components/CateBanner';

const Cart = () => {
    return (
        <div>
            <CateBanner h1={'Korpa'} className={'korpa-banner'} />
            <Checkout />
        </div>
    )
}

export default Cart;