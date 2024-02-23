import React, { Component } from 'react'

class header extends Component {
  render() {
    return (
      <div id = "header">
          <a href="../index.js" className = "black-btn" target="_blank">Home</a> 
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
}

export default header
