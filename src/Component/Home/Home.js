import React from 'react';
import help1 from '../../images/help.jpg';
import help2 from '../../images/dan money.jpg';
import help3 from '../../images/Give some (2).png';
import help4 from '../../images/helo baby.jpeg';
import help5 from '../../images/help bannar2.png';
import help6 from '../../images/help money.jpg';
import help7 from '../../images/help poor man.jpg';
import help8 from '../../images/help poor1.jpg';
import help9 from '../../images/money box.jpeg';
import Footer from '../Footer/Footer';
import Carosule from './Carosule/Carosule';
import Header from './Header/Header';
import Navbar from './Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <Navbar />
            <br />
            <Carosule />
            <Header />
            <h1>Our Service</h1>
            <hr class="dotted-hr" />

            <div className="all-service">
                <div className="row">
                    <div className="service-card col-4">
                        <div className="card">
                            <div className="card-icon">
                                <img src={help1} alt="" />
                            </div>
                            <div className="card-header">
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <div className="card-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus in recusandae libero corporis error sapiente ullam ducimus nesciunt dignissimos deserunt tempore saepe culpa aliquid deleniti ut, iure excepturi molestiae?</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card col-4">
                        <div className="card">
                            <div className="card-icon">
                                <img src={help2} alt="" />
                            </div>
                            <div className="card-header">
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <div className="card-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus in recusandae libero corporis error sapiente ullam ducimus nesciunt dignissimos deserunt tempore saepe culpa aliquid deleniti ut, iure excepturi molestiae?</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card col-4">
                        <div className="card">
                            <div className="card-icon">
                                <img src={help3} alt="" />
                            </div>
                            <div className="card-header">
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <div className="card-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus in recusandae libero corporis error sapiente ullam ducimus nesciunt dignissimos deserunt tempore saepe culpa aliquid deleniti ut, iure excepturi molestiae?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="service-card col-4">
                        <div className="card">
                            <div className="card-icon">
                                <img src={help4} alt="" />
                            </div>
                            <div className="card-header">
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <div className="card-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus in recusandae libero corporis error sapiente ullam ducimus nesciunt dignissimos deserunt tempore saepe culpa aliquid deleniti ut, iure excepturi molestiae?</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card col-4">
                        <div className="card">
                            <div className="card-icon">
                                <img src={help5} alt="" />
                            </div>
                            <div className="card-header">
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <div className="card-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus in recusandae libero corporis error sapiente ullam ducimus nesciunt dignissimos deserunt tempore saepe culpa aliquid deleniti ut, iure excepturi molestiae?</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card col-4">
                        <div className="card">
                            <div className="card-icon">
                                <img src={help6} alt="" />
                            </div>
                            <div className="card-header">
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <div className="card-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus in recusandae libero corporis error sapiente ullam ducimus nesciunt dignissimos deserunt tempore saepe culpa aliquid deleniti ut, iure excepturi molestiae?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="service-card col-4">
                        <div className="card">
                            <div className="card-icon">
                                <img src={help7} alt="" />
                            </div>
                            <div className="card-header">
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <div className="card-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus in recusandae libero corporis error sapiente ullam ducimus nesciunt dignissimos deserunt tempore saepe culpa aliquid deleniti ut, iure excepturi molestiae?</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card col-4">
                        <div className="card">
                            <div className="card-icon">
                                <img src={help8} alt="" />
                            </div>
                            <div className="card-header">
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <div className="card-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus in recusandae libero corporis error sapiente ullam ducimus nesciunt dignissimos deserunt tempore saepe culpa aliquid deleniti ut, iure excepturi molestiae?</p>
                            </div>
                        </div>
                    </div>
                    <div className="service-card col-4">
                        <div className="card">
                            <div className="card-icon">
                                <img src={help9} alt="" />
                            </div>
                            <div className="card-header">
                                <h2>Lorem, ipsum dolor.</h2>
                            </div>
                            <div className="card-desc">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis repellendus in recusandae libero corporis error sapiente ullam ducimus nesciunt dignissimos deserunt tempore saepe culpa aliquid deleniti ut, iure excepturi molestiae?</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="btn-style">
                <a href="/service">
                    <button> more see</button>
                </a>
            </div>
            </div>

           


            <Footer />
        </div>
    );
};

export default Home;