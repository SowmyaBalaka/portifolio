import React from "react";
import './project.css'

const Projects=()=>{
    return(
        <section id="projects">
            <span className="projectTitle">Projects</span>
            <div className="projectSection">
                <div className="projectContent">
                    <h2>Todo List</h2>
                    <p>I developed a practical to-do list project using HTML, CSS, and JavaScript. Users can effortlessly add, mark, and delete tasks. The interface is intuitive, allowing easy navigation. It's designed for simplicity and efficiency, ensuring a seamless user experience. The project fosters productivity by helping users organize their tasks effectively. It's a user-friendly solution for managing daily activities.</p>
                    {/* <a href="https://sowmyabalaka.github.io/todo_list/todolist.html">Click Here</a> */}
                    <button className="linkBtn"><a href="https://sowmyabalaka.github.io/todo_list/todolist.html" target="_blank"></a>Click Here</button>
                    
                </div>
                <div className="projectContent">
                    <h2>Simple Calculator</h2>
                    <p>I created a basic calculator using JavaScript. It performs simple arithmetic operations like addition, subtraction, multiplication, and division. The interface is straightforward, providing users with a hassle-free calculation experience.</p>
                    {/* <a href="https://sowmyabalaka.github.io/simple_calculator-/calci.html">Click Here</a> */}
                    <button className="linkBtn"><a href="https://sowmyabalaka.github.io/simple_calculator-/calci.html" target="_blank"></a>Click Here</button>

                </div>
                <div className="projectContent">
                    <h2>Material Design Clone</h2>
                    <p>I crafted a responsive Material Design-inspired app replica using HTML and CSS. The interface mirrors Material Design principles, ensuring seamless user interaction across various devices and screen sizes.</p>
                    <button className="linkBtn"><a href="https://sowmyabalaka.github.io/Material_Design/index.html" target="_blank"></a>Click Here</button>
                    {/* <a href="https://sowmyabalaka.github.io/Material_Design/index.html">Click Here</a> */}
                </div>
            </div>
        </section>
    )
}
export default Projects;