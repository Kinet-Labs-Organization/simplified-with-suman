import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';

const About = () => {
    useScrollAnimation();

    return (
        <main style={{paddingTop: '140px', paddingBottom: '80px'}}>
            <div className="container article-layout">
                <div>
                    <div id="categories">
                        <div className="section-header">
                            <h2>Explore by Topic</h2>
                        </div>
                        <div className="categories-grid">
                            <div className="glass-card cat-card">
                                <div className="cat-icon"><i className="fa-solid fa-robot"></i></div>
                                <div className="cat-info">
                                    <h3>AI & Machine Learning</h3>
                                    <p>LLMs, agents, hallucination</p>
                                </div>
                            </div>
                            <div className="glass-card cat-card">
                                <div className="cat-icon"><i className="fa-solid fa-user-shield"></i></div>
                                <div className="cat-info">
                                    <h3>Privacy & Security</h3>
                                    <p>Tracking, VPNs, phishing</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile Ad */}
                    <aside className="sidebar-mobile" style={{ margin: '40px 0' }}>
                        <div id="ad-slot-about-page-sidebar-mobile" style={{ height: '250px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                            [ Ad Space - 300x250 ]
                        </div>
                    </aside>

                    <div id="about" style={{marginTop: '40px'}}>
                        <div className="glass-card about-content" style={{padding: '48px'}}>
                            <div className="about-text">
                                <div className="badge mono" style={{color: 'var(--rose)', borderColor: 'rgba(244, 63, 94, 0.3)'}}>About the Host</div>
                                <h2>Hi, I'm Suman Mandal.</h2>
                                <p>I'm a Technical Lead, Micro-SaaS builder, and AI enthusiast based out of Kolkata. By day, I architect software solutions and explore algorithmic trading strategies. By night, I'm on a mission to make technology accessible.</p>
                                <p>I started <strong>Simplified with Suman (SWS)</strong> because the world of tech, finance, and software has become drowning in jargon. Whether we are discussing the latest RBI/SEBI regulations, how LLMs actually process data, or how to build compounding wealth in India, my goal is simple: explain it in 10 minutes, with zero engineering speak.</p>
                                <p>Just one real question, answered from first principles, leaving you with one usable takeaway.</p>
                            </div>
                            <div className="about-visual">
                                <div className="glass" style={{width: '100%', aspectRatio: '1', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(108, 71, 255, 0.1), rgba(6, 182, 212, 0.1))'}}>
                                    <i className="fa-solid fa-microphone-lines" style={{fontSize: '4rem'}}></i>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Desktop Sidebar */}
                <aside className="sidebar-desktop" style={{ position: 'sticky', top: '120px' }}>
                    <div id="ad-slot-about-page-sidebar-desktop" style={{ height: '600px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                        [ Ad Space - 300x600 ]
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default About;