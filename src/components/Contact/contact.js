import React from "react";
import './contact.css'
import linkedin from '../../assets/linked.png';
import github from '../../assets/git.webp';
import emailjs from '@emailjs/browser';
import { useRef } from 'react';


const Contact = () =>{
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_mngr86l', 'template_uahir41', form.current, 'p99YFzfWcfProbHOgjdSk',)
          .then((result) => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            });
      };
    return(
        <section className="contactPage">
            <div id="contact">
                <h1 className="contactTitle">Contact Me</h1>
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder="Enter Name" name="your_name"></input>
                    <input type="email" className="email" placeholder="Enter email" name="your_email"></input>
                    <textarea className="msg" name="message" rows="5" placeholder="Enter message Here..."></textarea>
                    <button type="submit" value="send" className="submitBtn">Submit</button>
                    <div className="links">
                        <a href="https://www.linkedin.com/in/sowmya-balaka-279407243/" target="_blank"><img src={linkedin} className="link"/></a>
                        <a href="https://github.com/SowmyaBalaka" target="_blank"><img src={github} className="link"/></a>
                    </div>
                </form>
            </div>
        </section>
    )
}

export default Contact;