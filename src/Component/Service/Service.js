import React from 'react';
import ict from '../../images/help.jpg'
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const Service = () => {
    return (
        <div>
            <Navbar/>
            <br />
            <br />
            <h1>Our Service</h1>
            <hr class="dotted-hr"/>

            <div className="all-service">
                <div className="row">
                    <div className="service-card col-4">
                        <div className="card">
                            <div className="card-icon">
                                <img src={ict} alt=""/>
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
                                <img src={ict} alt=""/>
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
                                <img src={ict} alt=""/>
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
                                <img src={ict} alt=""/>
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
                                <img src={ict} alt=""/>
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
                                <img src={ict} alt=""/>
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
                                <img src={ict} alt=""/>
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
                                <img src={ict} alt=""/>
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
                                <img src={ict} alt=""/>
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
            </div> 

           
            <Footer/>
        </div>
    );
};

export default Service;