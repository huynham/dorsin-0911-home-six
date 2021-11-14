import './teamHai.css';
import user1 from '../../image/user1.jpg';
import user2 from '../../image/user2.jpg';
import user3 from '../../image/user3.jpg';
import wave from '../../image/bg-pattern.png';

function TeamHai(){

    return (
        <section id="team2">
            <div className="team2">
                <div className="team2-one">
                    <div className="team2-one-sub">
                        <div className="team2-one-sub-content">
                            <h1>WORK PROCESS</h1>
                            <hr/>
                            <p>In an ideal world this website wouldn’t exist, a client would acknowledge 
                                the importance of having web copy before the design starts.</p>

                        </div>
                    </div>
                </div>
                <div className="team2-two">
                    <div className="team2-two-sub">
                        <div className="team2-two-sub-1">
                            <span><i class="fal fa-pen"></i></span>
                            <h4>Tell us what you need</h4>
                            <p>The Big Oxmox advised her not to do so.</p>

                        </div>
                        <div className="team2-two-sub-2">
                        <span><i class="fal fa-id-card"></i></span>
                            <h4>Get free quotes</h4>
                            <p>Little Blind Text didn’t listen.</p>
                            <a href="#">Get Start<i class="far fa-arrow-right"></i></a>
                        </div>
                        <div className="team2-two-sub-3">
                        <span><i class="fal fa-bullseye"></i></span>
                            <h4>Deliver high quality product</h4>
                            <p>When she reached the first hills.</p>
                            
                        </div>
                    
                    </div>

                </div>
                <div className="team2-three">
                    <div className="team2-three-sub">
                        <div className="team2-three-sub-content">
                            <h1>WORK PROCESS</h1>
                            <hr/>
                            <p>In an ideal world this website wouldn’t exist, a client would acknowledge 
                                the importance of having web copy before the design starts.</p>

                        </div>
                    </div>
                </div>
                <div className="team2-four">
                    <div className="team2-four-sub">
                        <div className="team2-four-sub-1">
                            <span className="sp"><img src={user1} /></span>
                            <p>“I feel confident imposing change on myself. It's a lot more fun progressing than looking back. 
                                That's why I need to throw curve balls.”</p>
                            <h5>RUBEN REED -<span>Charleston</span></h5>
                           

                        </div>
                        <div className="team2-four-sub-2">
                        <span className="sp"><img src={user2} /></span>
                            <p>“Our task must be to free ourselves by widening our circle of compassion to embrace all living
                                 creatures and the whole of nature and its beauty.”</p>
                            <h5>MICHAEL P. HOWLETT - <span>Worcester</span></h5>
                           
                       
                           
                        </div>
                        <div className="team2-four-sub-3">
                        <span className="sp"><img src={user3} /></span>
                            <p>“I've learned that people will forget what you said, people will forget what you did,
                                 but people will never forget how you made them feel.”</p>
                            <h5>THERESA D. SINCLAIR - <span>Lynchburg</span></h5>
                       
                            
                        </div>
                    
                    </div>

                </div>
                <div className="team2-five">
                    <div className="team2-five-sub">
                        <div className="team2-five-sub-context">
                            <h2>Let's Get Started</h2>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the<br/> blind texts.</p>
                            <a href="#">Get Started <i class="far fa-arrow-right"></i></a>
                        </div>
                        
                    </div>
                    <div className="wave">
                        <img src= {wave} alt="song" />

                </div>
                </div>
                
            </div>
        </section>
    )
}

export default TeamHai;