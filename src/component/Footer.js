import React from "react";
import './Footer.css'
function Footer() {
  return (
    <div class="footer-wrap">
      <div class="tab">
        <h3>DOCS</h3>
        <a>Installation</a>
        <a>Main Concepts</a>
        <a>Advanced Guides</a>
        <a>API Reference</a>
      </div>
      <div class="tab">
        <h3>CHANNELS</h3>
        <a>GitHub</a>
        <a>Stack Overflow</a>
        <a>Discussion Forums</a>
        <a>Reacttiflux Chat</a>
      </div>
    </div>
  );
}
export default Footer;
