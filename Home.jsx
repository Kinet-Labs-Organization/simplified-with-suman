import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

const Home = () => {
    useScrollAnimation();

    return (
        <main>
            <section id="home" className="hero container">
                <div>
                    <div className="badge mono">New Episode Every Week</div>
                    <h1>Big ideas.<br/>15 minutes.<br/>Zero jargon.</h1>
                    <p>One real question. First principles. One usable takeaway. Demystifying trending tech, software, trading, and finance for curious minds in India.</p>
                    <button className="cta-btn" style={{margin: '0 auto', fontSize: '1.1rem', padding: '16px 32px'}}>Start Watching Ep 01</button>
                </div>
            </section>

            <section id="episodes" className="container">
                <div className="section-header">
                    <h2>Latest Episodes</h2>
                    <Link to="/all-episodes" style={{color: 'var(--cyan)', borderBottom: '1px solid var(--cyan)'}}>View all</Link>
                </div>
                
                <div className="episodes-grid">
                    <div className="glass-card">
                        <div className="ep-meta mono">
                            <span>EP 01</span>
                            <span>Privacy & Security</span>
                        </div>
                        <h3 className="ep-title">Is your phone listening to you?</h3>
                        <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>Understanding data brokers, DPDPA 2023, and how ad tracking really works.</p>
                        <Link to="/episode/1" className="play-btn" style={{display:'inline-block', textDecoration:'none'}}><i className="fa-solid fa-play"></i> Watch (10:00)</Link>
                    </div>

                    <div className="glass-card">
                        <div className="ep-meta mono">
                            <span>EP 02</span>
                            <span style={{color: 'var(--violet)'}}>AI & ML</span>
                        </div>
                        <h3 className="ep-title">What's behind the curtain of AI magic?</h3>
                        <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>LLMs, prompt engineering, and why AI hallucinates. No math required.</p>
                        <Link to="/episode/2" className="play-btn" style={{display:'inline-block', textDecoration:'none'}}><i className="fa-solid fa-play"></i> Watch (10:00)</Link>
                    </div>

                    <div className="glass-card">
                        <div className="ep-meta mono">
                            <span>EP 03</span>
                            <span style={{color: 'var(--amber)'}}>Personal Finance</span>
                        </div>
                        <h3 className="ep-title">Time beats Money in building wealth</h3>
                        <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>The actual math behind SIPs, compounding, and tracking the Nifty 50.</p>
                        <Link to="/episode/3" className="play-btn" style={{display:'inline-block', textDecoration:'none'}}><i className="fa-solid fa-play"></i> Watch (10:00)</Link>
                    </div>

                    <div className="glass-card">
                        <div className="ep-meta mono">
                            <span>EP 04</span>
                            <span style={{color: 'var(--rose)'}}>Personal Finance</span>
                        </div>
                        <h3 className="ep-title">Are you really financially safe?</h3>
                        <p style={{color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '24px'}}>Emergency funds, insurance basics, and stress-testing your savings in ₹.</p>
                        <Link to="/episode/4" className="play-btn" style={{display:'inline-block', textDecoration:'none'}}><i className="fa-solid fa-play"></i> Watch (10:00)</Link>
                    </div>
                </div>
            </section>

            <section id="resources" className="container">
                <div className="section-header">
                    <h2>Resources and Tools</h2>
                    <Link to="/all-resources" style={{color: 'var(--cyan)', borderBottom: '1px solid var(--cyan)'}}>View all</Link>
                </div>
                <div className="categories-grid">
                    <div className="glass-card cat-card">
                        <div className="cat-icon"><i className="fa-solid fa-newspaper" style={{color: 'var(--indigo)'}}></i></div>
                        <div className="cat-info">
                            <h3>Newsletter</h3>
                            <p>Weekly insights & updates</p>
                        </div>
                    </div>
                    {/* ... other resource cards ... */}
                </div>
            </section>

            <section id="categories" className="container">
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
                    {/* ... other category cards ... */}
                </div>
            </section>

            <section id="about" className="container">
                <div className="glass-card about-content" style={{padding: '48px'}}>
                    <div className="about-text">
                        <div className="badge mono" style={{color: 'var(--rose)', borderColor: 'rgba(244, 63, 94, 0.3)'}}>About the Host</div>
                        <h2>Hi, I'm Suman Mandal.</h2>
                        <p>I'm a Technical Lead, Micro-SaaS builder, and AI enthusiast based out of Kolkata. By day, I architect software solutions and explore algorithmic trading strategies. By night, I'm on a mission to make technology accessible.</p>
                        <p>I started <strong>Simplified with Suman (SWS)</strong> because the world of tech, finance, and software has become drowning in jargon. Whether we are discussing the latest RBI/SEBI regulations, how LLMs actually process data, or how to build compounding wealth in India, my goal is simple: explain it in 15 minutes, with zero engineering speak.</p>
                        <p>Just one real question, answered from first principles, leaving you with one usable takeaway.</p>
                    </div>
                    <div className="about-visual">
                        <div className="glass" style={{width: '100%', aspectRatio: '1', borderRadius: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'linear-gradient(135deg, rgba(108, 71, 255, 0.1), rgba(6, 182, 212, 0.1))'}}>
                            <i className="fa-solid fa-microphone-lines" style={{fontSize: '4rem'}}></i>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;