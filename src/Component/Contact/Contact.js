import React from 'react';
import Footer from '../Footer/Footer';
import Navbar from '../Home/Navbar/Navbar';

const Contact = () => {
    return (
        <div className="contactBgColor">
            <Navbar />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <div className="achievement-contact">
                {/* <div className="achievement col-4">
                    <h2>ACHIEVEMENTS</h2>
                    <hr class="dotted-hr" />
                    <p>1. 100% Tuition Waiver: Based on excellent academic result in Tampere university, Finland</p>
                    <p>2. Public Bank Scholarship: 40,000 TK, For scoring GPA 3.92/4.00 in B.Sc.</p>
                    <p>3. Silver Button from YouTube because of 100,000 Subscribers. Current Subscribers are more than 208,000.</p>
                    <p>4. IELTS 7 (Speaking-8.5, Listening-8, Writing-6, Reading-6) </p>
                </div> */}

                <div className="contact col-6" id="contact-me">
                    <h2>CONTACT ME</h2>
                    <hr class="dotted-hr" />
                    <form action="mailto:youngstarfoundation1@gmail.com" method="post" enctype="text/plain">
                        <p><input type="text" placeholder="Your Name" name="name" /></p>
                        <p><input type="email" placeholder="Your Email" name="email" /></p>
                        <textarea placeholder="Your Message Here" name="message" cols="30" rows="10"></textarea>
                        <button type="submit">SEND</button>
                        <button type="reset">RESET</button>
                    </form>
                </div>


                <div className="contact-links col-6" >
                    <h2>More Ways to Contact</h2>
                    <hr className="dotted-hr" />

                    <div className="media-buttons">
                        <button className="btn" onclick="window.open('http://www.youtube.com/c/anisulislamrubel')" class="btn request-callback"><i class="media-icon fa fa-youtube-play" style={{ color: "#c4302b" }} aria-hidden="true"></i></button>
                        <a href="https://www.facebook.com/groups/youngstarfoundation1" target="_blank"><button className="btn" class="btn request-callback"> <i class="fa fa-facebook" style={{ color: "#3b5998;" }} aria-hidden="true"> </i></button></a>
                        <a href="https://www.facebook.com/Young-Star-Foundation-177256863174680"><button className="btn" onclick="window.open('http://www.youtube.com/c/anisulislamrubel')" class="btn request-callback"><i class="fa fa-skype" style={{ color: "#3b5998;" }} aria-hidden="true"></i></button></a>
                        <button className="btn" onclick="window.open('https://www.linkedin.com/in/anisul-islam-515a7714a/')" class="btn request-callback"><i class="fa fa-linkedin" style={{ color: "#3b5998;" }} aria-hidden="true"></i></button>
                    </div>

                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Contact;