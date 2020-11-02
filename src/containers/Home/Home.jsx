import React from 'react';
import './Home.scss'; 
import image1 from '../../images/9.png'; // Tell webpack this JS file uses this image

console.log(image1)

const Home = ()=>{
    return (
        <div className="centered" >
            <div className="boldtext">
                Welcome to Dental Care dentists
            </div>
            <div>
                The Complete Smile’s First Class Experience
            </div>
            <div className="globalcontent">
                <div className="maintext">
                    <div>
                        At the Complete Smile in Twickenham we are dedicated to providing the highest quality of dental care to our valued clients in a caring, relaxed and friendly atmosphere.
                    </div>
                    <div>
                        Our dedicated and experienced team understand that each patient is an individual with different concerns and wishes. We aim to listen and provide our clients with a bespoke service comprising excellent standards of dental care that will both match and exceed your expectations.
                    </div>
                    <div>
                        Our dedicated and experienced team understand that each patient is an individual with different concerns and wishes. We aim to listen and provide our clients with a bespoke service comprising excellent standards of dental care that will both match and exceed your expectations.
                    </div>
                    <div>
                        Our dedicated and experienced team understand that each patient is an individual with different concerns and wishes. We aim to listen and provide our clients with a bespoke service comprising excellent standards of dental care that will both match and exceed your expectations.
                    </div>
                </div>
                <img src={image1} alt="smile" className="mainimage" />
            </div>

           

            <div className="services">
                <div>
                    Cleanning
                </div>
                <div>
                    Implants
                </div>
                <div>
                    Cosmetics
                </div>

            </div>
            <div className="addres">
                <div>
                Our Address
                </div>
                <div>
                    1 Oriel Court, 106 The Green, Twickenham, Middlesex, TW2 5AG
                    info@thecompletesmile.co.uk \ Tel: 0208 090 0040
                </div>
            </div>
        </div>
        
    );
};

export default Home