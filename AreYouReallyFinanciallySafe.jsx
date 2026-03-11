import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

const AreYouReallyFinanciallySafe = () => {
    useScrollAnimation();

    return (
        <main style={{ paddingTop: '80px', paddingBottom: '80px' }}>
            <div className="container">
                <Link to="/all-episodes" style={{ color: 'var(--cyan)', display: 'inline-block' }}>&larr; Back to Episodes</Link>

                <div className="article-layout">
                    <div className="glass-card policy-content">
                        {/* Header Section */}
                        <header style={{ textAlign: 'center' }}>
                            <div className="ep-meta mono" style={{ justifyContent: 'center', gap: '16px', marginBottom: '16px' }}>
                                <span style={{ color: 'var(--cyan)' }}>EP 04</span>
                                <span>•</span>
                                <span style={{ color: 'var(--rose)' }}>Personal Finance</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '24px', lineHeight: '1.2' }}>Are you really financially safe?</h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>Emergency funds, insurance basics, and stress-testing your savings in ₹.</p>
                        </header>

                        {/* Video Player Placeholder */}
                        {/* <div style={{width: '100%', aspectRatio: '16/9', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0 48px 0', border: '1px solid var(--glass-border)'}}>
                            <div style={{textAlign: 'center'}}>
                                <i className="fa-solid fa-play-circle" style={{fontSize: '4rem', color: 'var(--cyan)', marginBottom: '16px', cursor: 'pointer'}}></i>
                                <p style={{color: 'var(--text-muted)'}}>Watch the full explanation (10:00)</p>
                            </div>
                        </div> */}

                        {/* Sidebar Ad for Mobile/Tablet */}
                        <aside className="sidebar-mobile" style={{ margin: '40px 0' }}>
                            <div id="ad-slot-episode-sidebar-mobile" style={{ height: '250px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                                [ Ad Space - 300x250 ]
                            </div>
                        </aside>

                        {/* Blog Content */}
                        <div className="blog-content" style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1.05rem' }}>

                            <p style={{ marginBottom: '24px' }}>
                                <span style={{ fontSize: '1.5rem', float: 'left', lineHeight: '1', paddingRight: '8px', fontWeight: 'bold', color: 'var(--cyan)' }}>W</span>
                                e often confuse being "rich" with being "financially safe." You might be earning a high salary, but what happens if that income stops tomorrow? Or if a medical emergency wipes out your savings? Financial safety isn't about luxury; it's about building a fortress that can withstand life's unexpected storms.
                            </p>
                            <p style={{ marginBottom: '40px' }}>
                                Today, we'll cover the three pillars of a truly secure financial life. This is the foundation you must build before you even think about investing in stocks or crypto.
                            </p>

                            {/* Ad Placeholder 1 */}
                            <div id="ad-slot-episode-top-banner" style={{ height: '100px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '48px auto', color: 'var(--text-muted)', fontFamily: 'monospace', maxWidth: '728px' }}>
                                [ Ad Space - 728x90 ]
                            </div>

                            <h2 style={{ color: 'var(--cyan)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem' }}>Pillar 1: The Emergency Fund</h2>
                            <p style={{ marginBottom: '24px' }}>
                                This is your financial fire extinguisher. It's a pool of money set aside for one purpose only: to cover your essential living expenses during an emergency, like a job loss or a medical crisis.
                            </p>
                            <p style={{ marginBottom: '24px' }}>
                                The rule of thumb is to have <strong>3 to 6 months' worth of mandatory expenses</strong> (rent, EMIs, groceries, utilities) saved. This money should be kept in a highly liquid place like a savings account or a liquid mutual fund—not in stocks or real estate.
                            </p>

                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--rose)', marginBottom: '32px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--rose)' }}><i className="fa-solid fa-shield-halved" style={{ marginRight: '8px' }}></i> Why it's critical</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                    Without an emergency fund, a single unexpected event can force you to sell your long-term investments at a loss or take on high-interest debt, destroying your financial progress.
                                </p>
                            </div>

                            <h2 style={{ color: 'var(--cyan)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem' }}>Pillar 2: Adequate Insurance</h2>
                            <p style={{ marginBottom: '24px' }}>
                                Insurance is a tool to transfer catastrophic risk. You pay a small, predictable premium to protect yourself from a large, unpredictable loss.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                                    <i className="fa-solid fa-heart-pulse" style={{ position: 'absolute', left: 0, top: '4px', color: 'var(--green)' }}></i>
                                    <strong>Health Insurance:</strong> In India, a single hospitalization can cost lakhs. A family floater health insurance policy is non-negotiable.
                                </li>
                                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                                    <i className="fa-solid fa-umbrella" style={{ position: 'absolute', left: 0, top: '4px', color: 'var(--green)' }}></i>
                                    <strong>Term Life Insurance:</strong> If you have dependents (spouse, children, parents), you need term insurance. It's a pure protection plan that provides a large sum to your family if you're no longer around. A cover of 10-15 times your annual income is a good starting point.
                                </li>
                            </ul>

                            {/* Ad Placeholder 2 */}
                            <div id="ad-slot-episode-mid-content" style={{ height: '250px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '48px auto', color: 'var(--text-muted)', fontFamily: 'monospace', maxWidth: '300px' }}>
                                [ Ad Space - 300x250 ]
                            </div>

                            <h2 style={{ color: 'var(--cyan)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem' }}>Pillar 3: Stress-Testing Your Finances</h2>
                            <p style={{ marginBottom: '24px' }}>
                                This means understanding your personal balance sheet. List all your Assets (what you own) and all your Liabilities (what you owe). Your Net Worth is your Assets minus your Liabilities.
                            </p>
                            <p style={{ marginBottom: '24px' }}>
                                A key part of financial safety is being free from high-interest debt. Credit card debt, with its 30-40% annual interest, is a wealth destroyer. Prioritize paying it off aggressively.
                            </p>

                            <div style={{ marginTop: '60px', padding: '32px', background: 'linear-gradient(135deg, rgba(108, 71, 255, 0.1), rgba(6, 182, 212, 0.1))', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                                <h3 style={{ marginBottom: '16px' }}>The Verdict</h3>
                                <p style={{ marginBottom: '24px' }}>
                                    Financial safety is the bedrock upon which all wealth is built. It's not exciting, but it's what allows you to invest for the long term with confidence and sleep peacefully at night.
                                </p>
                                <p style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Takeaway:</p>
                                <p style={{ marginBottom: '0' }}>
                                    Calculate your 6-month emergency fund amount today. Review your insurance policies to see if your coverage is adequate. This is the most important financial homework you can do.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar for Ads */}
                    <aside className="sidebar-desktop" style={{ position: 'sticky', top: '120px' }}>
                        <div id="ad-slot-episode-sidebar-desktop" style={{ height: '600px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                            [ Ad Space - 300x600 ]
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default AreYouReallyFinanciallySafe;