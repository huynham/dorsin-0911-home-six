import './feature.css';
import logo from '../../image/online-world.svg';
import wave from '../../image/bg-pattern.png'

function Feature(){

    return (
        <section id="feature">
            <div className="feature">
                <div className="feature-one">
                    <div className="feature-one-1">
                        <h3>A digital web design studio creating modern & engaging online experiences</h3>
                        <p>Separated they live in Bookmarksgrove right at the coast of the Semantics,
                             a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                        <ul>
                            <li>We put a lot of effort in design.</li>
                            <li>The most important ingredient of successful website.</li>
                            <li>Sed ut perspiciatis unde omnis iste natus error sit.</li>
                            <li>Submit Your Orgnization.</li>
                        </ul>
                        <a href="#">Learn More <i class="fas fa-arrow-alt-right"></i></a>

                    </div>
                    <div className="feature-one-2">
                        <img src={logo} alt='anh svg'/>

                    </div>

                </div>
            </div>
            <div className="feature-two">
                <div className="feature-two-sub">
                    <div className="feature-two-context">
                        <h2>Build your dream website today</h2>
                        <p>But nothing the copy said could convince her and so it didn’t take long until a few <br/>insidious Copy Writers ambushed her.</p>
                        <a href="#">View Plan & Pricing</a>
                    </div>
                </div>
                <div className="wave">
                    <img src= {wave} alt="song" />

                </div>

            </div>
            
        </section>


    )
}

export default Feature