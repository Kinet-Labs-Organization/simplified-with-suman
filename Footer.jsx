import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="container">
            <div className="footer-content">
                <div className="footer-col" style={{maxWidth: '300px'}}>
                    <div className="logo-box" style={{display: 'inline-block', marginBottom: '16px'}}>SWS</div>
                    <p style={{color: 'var(--text-muted)', fontSize: '0.9rem'}}>Big ideas. 15 minutes. Zero jargon. Explaining trending tech and finance for curious minds.</p>
                </div>
                
                <div className="footer-col">
                    <h4>Navigation</h4>
                    <ul>
                        <li><a href="/#home">Home</a></li>
                        <li><a href="/#episodes">Episodes</a></li>
                        <li><Link to="/about">Categories</Link></li>
                        <li><Link to="/about">About Suman</Link></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Connect</h4>
                    <ul>
                        <li><a href="#">YouTube Channel</a></li>
                        <li><a href="#">X / Twitter</a></li>
                        <li><a href="#">LinkedIn</a></li>
                        <li><a href="#">Contact Us</a></li>
                    </ul>
                </div>

                <div className="footer-col">
                    <h4>Legal (India)</h4>
                    <ul>
                        <li><Link to="/privacy-policy">Privacy Policy (DPDPA 2023)</Link></li>
                        <li><Link to="/terms-of-use">Terms of Use</Link></li>
                        <li><Link to="/disclaimer">Disclaimer</Link></li>
                        <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                    </ul>
                </div>
            </div>
            
            <div className="legal-text">
                <p>&copy; 2026 Suman Mandal. All rights reserved. Made in Kolkata, India.</p>
                <p style={{marginTop: '8px'}}>Disclaimer: Content provided on SWS is for educational purposes only and does not constitute financial or investment advice. Always consult with a SEBI-registered advisor before making investment decisions.</p>
            </div>
        </footer>
    );
};

export default Footer;