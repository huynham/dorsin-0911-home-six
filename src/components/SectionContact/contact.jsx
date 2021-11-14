
import './contact.css';
import pay from '../../image/payment.png';

function Contact(){

    return (
        <section id="contact">
            <div className="contact">
                    <div className="contact-one">
                        <div className="contact-one-sub">
                            <div className="contact-one-sub-content">
                                <h1>GET IN TOUCH</h1>
                                <hr/>
                                <p>We thrive when coming up with innovative ideas but also understand that
                                    a smart concept should be supported with measurable results.</p>

                            </div>
                        </div>
                    </div>
                    <div className="contact-two">
                        <div className="contact-two-sub">
                            <div className="contact-two-sub-1">
                                <p>Office Address 1:</p>
                                <span>4461 Cedar Street Moro, AR 72368</span>
                                <p>Office Address 2:</p>
                                <span>2467 Swick Hill Street <br/>
                                            New Orleans, LA 70171</span>
                                <p>Working Hours:</p>
                                <span>9:00AM To 6:00PM</span>

                            </div>
                            <div className="contact-two-sub-2">
                                <input type="text" className="inp1" placeholder="Your Name *" />
                                <input type="text" className="inp2" placeholder="Your Email *" />
                                <input type="text" className="inp3" placeholder="Your Subject *" />
                                <textarea placeholder="Your Mess.." rows='4' className="text" ></textarea>
                                <button type="button">Send Messenger</button>
                        
                            </div>
                        </div>
                    </div>
                    <div className="contact-three">
                        <div className="contact-three-sub">
                            <div className="contact-three-sub-1">
                                <ul>
                                    <li><i class="fab fa-facebook"></i></li>
                                    <li><i class="fab fa-twitter-square"></i></li>
                                    <li><i class="fab fa-instagram"></i></li>
                                    <li><i class="fab fa-google-plus-g"></i></li>
                                    <li><i class="far fa-browser"></i></li>
                                </ul>

                            </div>
                            <div className="contact-three-sub-2">
                            <i class="fal fa-phone-alt"></i><span>+91 123 4556 789</span>
                                
                            </div>
                            <div className="contact-three-sub-3">
                            <i class="fal fa-envelope-open"></i><span>Support@info.com</span>
                            </div>
                        </div>
                    </div>
                    <div className="contact-four">
                        <div className="contact-four-sub">
                            <div className="contact-four-sub-1">
                            <h4>DORSIN</h4>
                                <ul>
                                    <li>Home</li>
                                    <li>About us</li>
                                    <li>Careers</li>
                                    <li>Contact us</li>                                   
                                </ul>

                            </div>
                            <div className="contact-four-sub-2">
                                <h4>Information</h4>
                                <ul>
                                    <li>Terms & Condition</li>
                                    <li>About us</li>
                                    <li>Jobs</li>
                                    <li>Bookmarks</li>                                   
                                </ul>
                            </div>
                            <div className="contact-four-sub-3">
                                <h4>Support</h4>
                                <ul>
                                    <li>FAQ</li>
                                    <li>Contact</li>
                                    <li>Disscusion</li>
                                    <li>Contact us</li>                                   
                                </ul>
                            </div>
                            <div className="contact-four-sub-4">
                                <h4>Subscribe</h4>
                                <p>In an ideal world this text wouldn’t exist, a client would acknowledge the importance of having web 
                                    copy before the design starts.</p>
                                <input type="text" placeholder="Email"/>
                            </div>
                        </div>
                    </div>
                    <div className="contact-five">
                        <div className="contact-five-sub">
                            <div className="contact-five-sub-1">
                                <p>2019 - 2020 © Dorsin - Themesbrand payment</p>

                            </div>
                            <div className="contact-five-sub-2">
                                <img src={pay} alt="payment" />
                            </div>
                        </div>
                    </div>
            </div>
        </section>

    )
}

export default Contact;