import React from "react";
import "./intro.css";
import bg from "../../assets/image.png";
import { Link } from "react-scroll";
import btnImg from "../../assets/hireme.png"

const Intro =()=>{
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText">I'm <span className="introName"> Sowmya</span><br/>FrontEnd Designer</span>
                <p className="introPara">I m passionate to work as a FrontEnd Developer to create & develope User Friendly Websites.</p>
                <Link><button className="btn"><img src={btnImg} className="btnImg"/>Hire Me</button></Link>
            </div>
            <img src={bg} className="bg"></img>
        </section>
    )
    
}

export default Intro;