import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

const AllEpisodes = () => {
    useScrollAnimation();

    return (
        <main style={{paddingTop: '140px', paddingBottom: '80px'}}>
            <div className="container">
                <div className="section-header" style={{marginBottom: '40px'}}>
                    <h1 style={{fontSize: '3rem', marginBottom: '16px'}}>All Episodes</h1>
                    <p style={{color: 'var(--text-muted)', maxWidth: '600px'}}>Explore our complete library of simplified tech, finance, and software engineering topics. New episodes every week.</p>
                </div>

                <div className="episodes-grid">
                    <div className="glass-card">
                        <div className="ep-meta mono">
                            <span>EP 01</span>
                            <span>Privacy & Security</span>
                        </div>
                        <h3 className="ep-title">Is your phone listening to you?</h3>
                        <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>Understanding data brokers, DPDPA 2023, and how ad tracking really works.</p>
                        <Link to="/is-your-phone-listening-to-you" className="play-btn"><i className="fa-solid fa-play"></i> Watch (10:00)</Link>
                    </div>

                    <div className="glass-card">
                        <div className="ep-meta mono">
                            <span>EP 02</span>
                            <span style={{color: 'var(--violet)'}}>AI & ML</span>
                        </div>
                        <h3 className="ep-title">What's behind the curtain of AI magic?</h3>
                        <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>LLMs, prompt engineering, and why AI hallucinates. No math required.</p>
                        <Link to="/episode/2" className="play-btn"><i className="fa-solid fa-play"></i> Watch (10:00)</Link>
                    </div>

                    <div className="glass-card">
                        <div className="ep-meta mono">
                            <span>EP 03</span>
                            <span style={{color: 'var(--amber)'}}>Personal Finance</span>
                        </div>
                        <h3 className="ep-title">Time beats Money in building wealth</h3>
                        <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>The actual math behind SIPs, compounding, and tracking the Nifty 50.</p>
                        <Link to="/episode/3" className="play-btn"><i className="fa-solid fa-play"></i> Watch (10:00)</Link>
                    </div>

                    <div className="glass-card">
                        <div className="ep-meta mono">
                            <span>EP 04</span>
                            <span style={{color: 'var(--rose)'}}>Personal Finance</span>
                        </div>
                        <h3 className="ep-title">Are you really financially safe?</h3>
                        <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>Emergency funds, insurance basics, and stress-testing your savings in ₹.</p>
                        <Link to="/episode/4" className="play-btn"><i className="fa-solid fa-play"></i> Watch (10:00)</Link>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AllEpisodes;