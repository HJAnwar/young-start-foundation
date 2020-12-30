import React from 'react';
import img1 from '../../../images/help bannar2.png';
import img2 from '../../../images/help-bannar.png';
import img3 from '../../../images/Give some (2).png';


const Carosule = () => {
    return (
        <div className='carousel-width' >
            <section class="carousel" aria-label="Gallery">
                <ol class="carousel__viewport">
                    <li id="carousel__slide1"
                        tabindex="0"
                        class="carousel__slide">
                        <div class="carousel__snapper">
                            <a href="#carousel__slide4"
                                class="carousel__prev">Go to last slide</a>
                            <img class="carousel_img" src={img1} alt=""/>

                            <a href="#carousel__slide2"
                                class="carousel__next">Go to next slide</a>
                        </div>
                    </li>
                    <li id="carousel__slide2"
                        tabindex="0"
                        class="carousel__slide">
                        <div class="carousel__snapper">
                            <a href="#carousel__slide1"
                                class="carousel__prev">Go to previous slide</a>
                             <img class="carousel_img" src={img2} alt=""/>
                            <a href="#carousel__slide3"
                                class="carousel__next">Go to next slide</a>
                        </div>
                    </li>
                    <li id="carousel__slide3"
                        tabindex="0"
                        class="carousel__slide">
                        <div class="carousel__snapper">
                            <a href="#carousel__slide2"
                                class="carousel__prev">Go to previous slide</a>
                             <img class="carousel_img" src={img3} alt=""/>
                            <a href="#carousel__slide4"
                                class="carousel__next">Go to next slide</a>
                        </div>
                    </li>
                    <li id="carousel__slide4"
                        tabindex="0"
                        class="carousel__slide">
                        <div class="carousel__snapper">
                            <a href="#carousel__slide3"
                                class="carousel__prev">Go to previous slide</a>
                             <img class="carousel_img"  src={img1} alt=""/>
                            <a href="#carousel__slide1"
                                class="carousel__next">Go to first slide</a>
                        </div>
                    </li>
                </ol>
                <aside class="carousel__navigation">
                    <ol class="carousel__navigation-list">
                        <li class="carousel__navigation-item">
                            <a href="#carousel__slide1"
                                class="carousel__navigation-button">Go to slide 1</a>
                        </li>
                        <li class="carousel__navigation-item">
                            <a href="#carousel__slide2"
                                class="carousel__navigation-button">Go to slide 2</a>
                        </li>
                        <li class="carousel__navigation-item">
                            <a href="#carousel__slide3"
                                class="carousel__navigation-button">Go to slide 3</a>
                        </li>
                        <li class="carousel__navigation-item">
                            <a href="#carousel__slide4"
                                class="carousel__navigation-button">Go to slide 4</a>
                        </li>
                    </ol>
                </aside>
            </section>
        </div>
    );
};

export default Carosule;