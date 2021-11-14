
import './team.css';
import team1 from '../../image/team1.jpg';
import team2 from '../../image/team2.jpg';
import team3 from '../../image/team3.jpg';
import team4 from '../../image/team4.jpg';

function Team(){

    return (
        <section id="team">
            <div className="team">
                <div className="team-one">
                    <div className="team-one-content">
                        <h1>BEHIND THE PEOPLE</h1>
                        <hr/>
                        <p>It is a long established fact that create category 
                            leading brand experiences a reader will be distracted by the readable content of a page when looking at its layout.</p>
                    </div>

                </div>
                <div className="team-two">
                    <div className="team-two-1">
                        <img src={team1} alt="team1" />
                        <h4>Frank Johnson</h4>
                        <p>CEO</p>

                    </div>
                    <div className="team-two-2">
                        <img src={team2} alt="team1" />
                        <h4>Elaine Stclair</h4>
                        <p>DESIGNER</p>
                        
                    </div>
                    <div className="team-two-3">
                        <img src={team3} alt="team1" />
                        <h4>Wanda Arthur</h4>
                        <p>DEVELOPER</p>
                        
                    </div>
                    <div className="team-two-4">
                        <img src={team4} alt="team1" />
                        <h4>Joshua Stemple</h4>
                        <p>MANAGER</p>
                        
                    </div>
                    
                </div>

                
            </div>
        </section>


    )
}

export default Team