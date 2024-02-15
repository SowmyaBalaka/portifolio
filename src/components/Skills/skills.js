import React from "react";
import "./skills.css"
import frontend from "../../assets/frd.jpg";
import react from "../../assets/react.jpg"
import sql from "../../assets/sql.png";
import python from "../../assets/pytho.jpg"

const Skills =()=>{
    return(
        <section id="skills">
            <span className="skillTitle">Skills I have are</span>
            <span className="skillDesc">I'm skilled in Python for versatile programming tasks, HTML/CSS for creating dynamic web content, JavaScript for interactive user experiences, SQL for efficient database management and React for building responsive and interactive user interfaces.</span>
            <div className="skillBars">
                <div className="skillBar">
                    <img src={frontend} className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>HTML , CSS , Js</h2>
                        <p>HTML, CSS, and JavaScript form the trifecta of web development, enabling structure, style, and interactivity for engaging user experiences online.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={python} className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>Python</h2>
                        <p>Python, a versatile programming language, empowers developers with simplicity, readability, and extensive libraries.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={sql} className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>SQL</h2>
                        <p>SQL, the language of databases, facilitates efficient data management, retrieval, and manipulation.</p>
                    </div>
                </div>
                <div className="skillBar">
                    <img src={react} className="skillBarImg"/>
                    <div className="skillBarText">
                        <h2>React</h2>
                        <p>ReactJS empowers dynamic and responsive web interfaces through modular and reusable components.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}
export default Skills;