import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

const TimeBeatsMoneyInBuildingWealth = () => {
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
                                <span style={{ color: 'var(--cyan)' }}>EP 03</span>
                                <span>•</span>
                                <span style={{ color: 'var(--amber)' }}>Personal Finance</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '24px', lineHeight: '1.2' }}>Time beats Money in building wealth</h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>The actual math behind SIPs, compounding, and why starting early matters more than earning more.</p>
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
                                e all want to get rich quick. We look for the next multi-bagger stock or the next crypto pump. But the secret to building substantial wealth isn't about finding a magic asset; it's about understanding the boring, slow, yet explosive math of compounding.
                            </p>
                            <p style={{ marginBottom: '40px' }}>
                                "Compound interest is the eighth wonder of the world. He who understands it, earns it... he who doesn't... pays it." — Albert Einstein.
                            </p>

                            {/* Ad Placeholder 1 */}
                            <div id="ad-slot-episode-top-banner" style={{ height: '100px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '48px auto', color: 'var(--text-muted)', fontFamily: 'monospace', maxWidth: '728px' }}>
                                [ Ad Space - 728x90 ]
                            </div>

                            <h2 style={{ color: 'var(--cyan)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem' }}>The Cost of Waiting</h2>
                            <p style={{ marginBottom: '24px' }}>
                                Let's look at a simple math problem. Person A starts investing ₹5,000/month at age 25. Person B starts investing ₹10,000/month at age 35. By age 60, who has more money?
                            </p>
                            <p style={{ marginBottom: '24px' }}>
                                Surprisingly, Person A often wins, even though they invested less total capital. This is because Person A's money had 10 extra years to compound. In the world of finance, <strong>Time</strong> is a multiplier that is far more powerful than the <strong>Principal</strong> amount.
                            </p>

                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--amber)', marginBottom: '32px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--amber)' }}><i className="fa-solid fa-calculator" style={{ marginRight: '8px' }}></i> The Rule of 72</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                    Want to know when your money will double? Divide 72 by your expected annual return rate. If you get 12% returns, your money doubles in 6 years (72 / 12 = 6).
                                </p>
                            </div>

                            <h3 style={{ color: 'var(--text-main)', marginTop: '32px', marginBottom: '16px' }}>SIPs: The Discipline Hack</h3>
                            <p style={{ marginBottom: '24px' }}>
                                You don't need a large lump sum to start. A Systematic Investment Plan (SIP) allows you to invest small amounts consistently. It removes the emotional stress of "timing the market."
                            </p>
                            <p style={{ marginBottom: '24px' }}>
                                When the market is down, your fixed SIP amount buys more units. When the market is up, your value grows. Over 10-15 years, this averages out volatility (Rupee Cost Averaging).
                            </p>

                            {/* Ad Placeholder 2 */}
                            <div id="ad-slot-episode-mid-content" style={{ height: '250px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '48px auto', color: 'var(--text-muted)', fontFamily: 'monospace', maxWidth: '300px' }}>
                                [ Ad Space - 300x250 ]
                            </div>

                            <h2 style={{ color: 'var(--cyan)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem' }}>The Magic of Index Funds (Nifty 50)</h2>
                            <p style={{ marginBottom: '24px' }}>
                                Where should you invest? For most passive investors, Index Funds tracking the Nifty 50 or Sensex are the safest bet for long-term wealth.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                                    <i className="fa-solid fa-chart-line" style={{ position: 'absolute', left: 0, top: '4px', color: 'var(--green)' }}></i>
                                    <strong>Low Expense Ratio:</strong> Index funds have very low fees compared to actively managed funds, meaning you keep more of your profits.
                                </li>
                                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                                    <i className="fa-solid fa-chart-line" style={{ position: 'absolute', left: 0, top: '4px', color: 'var(--green)' }}></i>
                                    <strong>Betting on India:</strong> Investing in the Nifty 50 is essentially betting that the top 50 companies in India will grow over the next decade.
                                </li>
                            </ul>

                            <div style={{ marginTop: '60px', padding: '32px', background: 'linear-gradient(135deg, rgba(108, 71, 255, 0.1), rgba(6, 182, 212, 0.1))', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                                <h3 style={{ marginBottom: '16px' }}>The Verdict</h3>
                                <p style={{ marginBottom: '24px' }}>
                                    You can't control the market returns, but you can control your time in the market. Starting early is the single biggest advantage you can give yourself.
                                </p>
                                <p style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Takeaway:</p>
                                <p style={{ marginBottom: '0' }}>
                                    Don't wait to "have enough money" to invest. Start with whatever you have, even ₹500, but start today.
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

export default TimeBeatsMoneyInBuildingWealth;