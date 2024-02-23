import React from "react";

function Footerinfo() {
    return (
        <div id = "footer">
            <a href="https://github.com/eichc/SOHR" className = "black-btn" target="_blank">Github link</a> 
            <span className="footer-separator">|</span>
            <a href="" className = "black-btn" target="_blank">Project info</a>
            <span className="footer-separator">|</span>
            <a href="" className = "black-btn" target="_blank">Contact Us</a>
            <span className="footer-separator">|</span>
            <a href="https://new.rcos.io/" className = "black-btn" target="_blank">An RCOS project</a>
            <p className="footer-p">Made by Cam Eich, Satyam Patel, and Emmanuel Usman</p>
        </div>

    )
}

export default function Footer() {
    return (
        <Footerinfo />
    )
}