
import './home.css'
import videocat from '../../image/videocat.mp4'
import { useEffect,  useState } from 'react';

function Home(){
    const [tinh,setTinh] = useState(0)
    const [chu,setChu] = useState("Perfect solution for small businesses")
    const HienChu =()=> {
        if(tinh==0){
            setChu("We shall fight in the fields and in the streets.")
            setTinh(1)
        }
        if(tinh==1){
            setChu("We help startups launch their products")
            setTinh(2)
        }
        if(tinh==2){
            setChu("Perfect solution for small businesses")
            setTinh(0)
        }
    }
    useEffect(()=>{
        const time= setInterval(HienChu,3000)
        return ()=> clearInterval(time)
    },[tinh])
    const Play =()=>{
        const x = document.getElementsByClassName("video");
            x[0].style.display = "block";
            x[0].style.opacity = 1;
    }
    const Dong =()=>{
        const x = document.getElementsByClassName("video");
            x[0].style.display = "none";
            document.body.style.opacity = 1;
    }

    return (
        <section id="home">
            <div className="home-sub">
                <div className="home-sub-one">
                    <div className="home-content">
                        <h1>{chu}</h1>
                        <p>Etiam sed.Interdum consequat proin vestibulum class at.</p>
                        <span onClick={Play}><i class="fal fa-play-circle"></i></span>
                        
                        
                    </div>
                </div>
                
            </div>
           
            <div className="video">
                <div className="video-sub">
                    <video controls>
                    <source src={videocat} type="video/mp4" />
                    </video>
                    <span className="dong" onClick={Dong} >X-Close</span>
                </div>
            </div>
        </section>
    )
}
export default Home