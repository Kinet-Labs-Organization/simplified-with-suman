import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

const AllEpisodes = () => {
    useScrollAnimation();

    return (
        <main style={{paddingTop: '140px', paddingBottom: '80px'}}>
            <div className="container article-layout">
                <div>
                    <div className="section-header" style={{marginBottom: '40px'}}>
                        <h1 style={{fontSize: '3rem', marginBottom: '16px'}}>All Episodes</h1>
                    </div>

                    {/* Mobile Ad */}
                    <aside className="sidebar-mobile" style={{ margin: '0 0 40px 0' }}>
                        <div id="ad-slot-episodes-page-sidebar-mobile" style={{ height: '250px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                            [ Ad Space - 300x250 ]
                        </div>
                    </aside>

                    <div className="episodes-grid">
                        <div className="glass-card">
                            <div className="ep-meta mono">
                                <span>EP 01</span>
                                <span>Privacy & Security</span>
                            </div>
                            <h3 className="ep-title">Is your phone listening to you?</h3>
                            <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>Understanding data brokers, DPDPA 2023, and how ad tracking really works.</p>
                            <Link to="/is-your-phone-listening-to-you" className="play-btn"><i className="fa-solid fa-play"></i> Read (10:00)</Link>
                        </div>

                        <div className="glass-card">
                            <div className="ep-meta mono">
                                <span>EP 02</span>
                                <span style={{color: 'var(--violet)'}}>AI & ML</span>
                            </div>
                            <h3 className="ep-title">What's behind the curtain of AI magic?</h3>
                            <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>LLMs, prompt engineering, and why AI hallucinates. No math required.</p>
                            <Link to="/whats-behind-the-curtain-of-ai-magic" className="play-btn"><i className="fa-solid fa-play"></i> Read (10:00)</Link>
                        </div>

                        <div className="glass-card">
                            <div className="ep-meta mono">
                                <span>EP 03</span>
                                <span style={{color: 'var(--amber)'}}>Personal Finance</span>
                            </div>
                            <h3 className="ep-title">Time beats Money in building wealth</h3>
                            <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>The actual math behind SIPs, compounding, and tracking the Nifty 50.</p>
                            <Link to="/time-beats-money-in-building-wealth" className="play-btn"><i className="fa-solid fa-play"></i> Read (10:00)</Link>
                        </div>

                        <div className="glass-card">
                            <div className="ep-meta mono">
                                <span>EP 04</span>
                                <span style={{color: 'var(--rose)'}}>Personal Finance</span>
                            </div>
                            <h3 className="ep-title">Are you really financially safe?</h3>
                            <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>Emergency funds, insurance basics, and stress-testing your savings in ₹.</p>
                            <Link to="/are-you-really-financially-safe" className="play-btn"><i className="fa-solid fa-play"></i> Read (10:00)</Link>
                        </div>
                    </div>
                </div>

                {/* Desktop Sidebar */}
                <aside className="sidebar-desktop" style={{ position: 'sticky', top: '120px' }}>
                    <div id="ad-slot-episodes-page-sidebar-desktop" style={{ height: '600px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                        [ Ad Space - 300x600 ]
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default AllEpisodes;