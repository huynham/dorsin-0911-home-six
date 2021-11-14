
import './blog.css';
import blog1 from '../../image/blog1.jpg';
import blog2 from '../../image/blog2.jpg';
import blog3 from '../../image/blog3.jpg';

function Blog(){

    return (
        <section id="blog">
            <div className="blog">
            <div className="blog-one">
                    <div className="blog-one-sub">
                        <div className="blog-one-sub-content">
                            <h1>BLOG</h1>
                            <hr/>
                            <p>Separated they live in Bookmarksgrove right at the coast of the Semantics, 
                                a large language ocean class at a euismod mus luctus quam.</p>

                        </div>
                    </div>
                </div>
                <div className="blog-two">
                    <div className="blog-two-sub">
                        <div className="blog-two-sub-1">
                            <img src={blog1} alt="blog1" />
                            <h5>UI & UX Design</h5>
                            <h4>Doing a cross country road trip</h4>
                            <p>She packed her seven versalia, put her initial into the belt and made herself on the way..</p>
                            <a href="#">Read Me <i class="far fa-arrow-right"></i></a>

                        </div>
                        <div className="blog-two-sub-2">
                        <img src={blog2} alt="blog1" />
                            <h5>Digital Marketing</h5>
                            <h4>New exhibition at our Museum</h4>
                            <p>Pityful a rethoric question ran over her cheek, then she continued her way.</p>
                            <a href="#">Read Me <i class="far fa-arrow-right"></i></a>
                        </div>
                        <div className="blog-two-sub-3">
                        <img src={blog3} alt="blog1" />
                            <h5>Travelling</h5>
                            <h4>Why are so many people..</h4>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia.</p>
                            <a href="#">Read Me <i class="far fa-arrow-right"></i></a>
                        </div>
                    
                    </div>

                </div>
            </div>
        </section>

    )
}

export default Blog;