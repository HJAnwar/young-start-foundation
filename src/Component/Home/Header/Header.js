import React from 'react';
import './Header.css'
import weather from '../../../images/Y-S-F.jpg';
;



const Header = () => {
    return (
        <div>
            
            <div class="profile">
                <img class="top-weather-icon" src={weather} alt="top weather icon" />
                <div class="profile-desc">
                    <h1> Well come  <br />To<br /> young star foundation</h1>
                    <p>This foundation has been created to create a beautiful youth society. Where there will be no injustice, no crime, no poverty, no helplessness. There will be only peace and tranquility</p>
                </div>
                <img class="bottom-weather-icon" src={weather} alt="bottom weather icon" />
            </div>
        </div>
    );
};

export default Header;