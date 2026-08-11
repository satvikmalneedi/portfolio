import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import LinkedinPFP from "../assets/LinkedinPFP.jpeg";

function Contact() {
    return (    
        <div id = "Contact" className="relative h-[50vh] w-full bg-palette5 flex flex-col items-center justify-center text-center p-6 shadow-xl font-mona">
            <img
                src={LinkedinPFP}
                alt="Photo of my ahhh"
                className="w-48 h-32 rounded-full object-cover shadow-lg border-4 border-white mb-4"
                loading="lazy"
            />
            <h2 className="text-2xl font-bold text-white">Satvik Malneedi</h2>
            <p className="text-gray-400">Computer Engineering | Georgia Tech</p>
            <div className="mt-3">
                <p className="text-lg text-white font-medium">Phone: (518) 368-6149</p>
                <p className="text-lg text-white font-medium">Email: samalneedi@gmail.com</p>
            </div>
            <div className="flex space-x-6 mt-4">
                <a href="https://github.com/satvikmalneedi" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-gray-300 text-2xl navbar-elements">
                    <FaGithub />
                </a>
                <a href="https://www.linkedin.com/in/satvikmalneedi/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800 text-2xl navbar-elements">
                    <FaLinkedin />
                </a>
            </div>
        </div>
    );
}

export default Contact;