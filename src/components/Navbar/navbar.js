import React from "react";
import "./navbar.css"
import logo from "../../assets/logo.png"
import { Link } from "react-scroll";
import contactImg from "../../assets/contact.png";
import menu from '../../assets/menu.png';
import { useState } from "react";

const Navbar= () =>{
    const [showMenu,setShowMenu]=useState(false);
    return(
        <nav className="navbar">
            <img src={logo} className="logo"></img>
            <div className="desktopMenu">
                {/* <Link  spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Home</Link> */}
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">About</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Skills</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Projects</Link>
            </div>
            <button className="desktopMenuBtn" onClick={()=>{
                document.getElementById('contact').scrollIntoView({behavior:'smooth'});
            }}>
                <img src={contactImg} className="desktopMenuImg"/>Contact Me
            </button>

            <img src={menu} className="mobMenu" onClick={()=>setShowMenu(!showMenu)}></img>
            <div className="navMenu" style={{display:showMenu ? "flex" : 'none'}}>
                {/* <Link  spy={true} smooth={true} offset={-80} duration={500} className="desktopMenuListItem">Home</Link> */}
                <Link activeClass="active" to="intro" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>About</Link>
                <Link activeClass="active" to="skills" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Skills</Link>
                <Link activeClass="active" to="projects" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Projects</Link>
                <Link activeClass="active" to="contact" spy={true} smooth={true} offset={-80} duration={500} className="listItem" onClick={()=>setShowMenu(false)}>Contact</Link>
            </div>
        </nav>
    )
}
export default Navbar