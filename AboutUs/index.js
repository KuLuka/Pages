import React from 'react';
import './style.scss'

import { GoogleMap, withScriptjs, withGoogleMap, Marker } from 'react-google-maps';

const API_KEY = 'AIzaSyAbnxAi2SBJcNEhJvyt99qkxJz5FVeGoH0';

const Mapa = () => {
    return (
        <GoogleMap
            defaultZoom={8}
            defaultCenter={{ lat: 44.715514, lng: 20.365298 }}
        >



        </GoogleMap>
    )
}

const WrappedMap = withScriptjs(withGoogleMap(Mapa));


const AboutUs = () => {
    return (

        <>
            <div className='map-container'>
                <div style={{ width: '100%', height: '100%' }}>
                    <WrappedMap
                        googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${API_KEY}`}
                        loadingElement={<div style={{ height: '100%' }} />}
                        containerElement={<div style={{ height: '100%' }} />}
                        mapElement={<div style={{ height: '100%' }} />}
                    />
                </div>

            </div>


            <h1>Kontakt</h1>

            <div className='contact-info max-width'>
                <div className="box sv">
                    <h3>Jugometal Svilajnac</h3>
                    <p>
                        <i class="fas fa-map-marker-alt"></i> Kneza Miloša 81, 35210 Svilajnac
                    </p>
                    <p><i className="fas fa-phone"></i> Telefon: <a href="tel:+38135312391">035/312-391</a></p>
                    <p>Delovi: <a href="tel:+38135311137">035/311-137</a></p>
                    <p><i class="fas fa-fax"></i> Fax: 035/312-331</p>
                </div>
                <div className="box po">
                    <h3>Jugometal Požarevac</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Beogradski put 17/A, 12000 Požarevac </p>
                    <p><i className="fas fa-phone"></i> Telefon: <a href="tel:+38112665544">012/665-544</a></p>
                    <p><i class="fas fa-mobile-alt"></i> Mobilni: <a href="tel:+381631058762">063/105-87-62</a></p>
                </div>
                <div className="box te">
                    <h3>Jugometal Temerin</h3>
                    <p><i class="fas fa-map-marker-alt"></i> Novosadska 634, 21235 Temerin </p>
                    <p><i className="fas fa-phone"></i> Telefon: <a href="tel:+38121840038">021/840-038</a></p>
                    <p><i class="fas fa-fax"></i> Fax: 021/840-505</p>
                    <p><i class="fas fa-mobile-alt"></i> Mobilni: <a href="tel:+381631058705">063/10-58-705</a></p>
                </div>
            </div>

        </>
    )
}

export default AboutUs;