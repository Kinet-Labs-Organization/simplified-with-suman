import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

const WhatsBehindTheCurtainOfAIMagic = () => {
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
                                <span style={{ color: 'var(--cyan)' }}>EP 02</span>
                                <span>•</span>
                                <span style={{ color: 'var(--text-muted)' }}>AI & ML</span>
                            </div>
                            <h1 style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '24px', lineHeight: '1.2' }}>What's behind the curtain of AI magic?</h1>
                            <p style={{ color: 'var(--text-muted)', fontSize: '1.2rem' }}>LLMs, prompt engineering, and why AI hallucinates. No math required.</p>
                        </header>

                        {/* Video Player Placeholder - To be implemented */}
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
                                <span style={{ fontSize: '1.5rem', float: 'left', lineHeight: '1', paddingRight: '8px', fontWeight: 'bold', color: 'var(--cyan)' }}>H</span>
                                ello! ChatGPT launched and suddenly the world changed. It writes poetry, debugs code, and even passes MBA exams. It feels like magic, doesn't it? Like there is a tiny human brain trapped inside the servers.
                            </p>
                            <p style={{ marginBottom: '40px' }}>
                                But today, we are going to look behind the curtain. We will strip away the hype and look at the actual mechanics of Large Language Models (LLMs). Spoiler alert: It's not thinking, it's predicting.
                            </p>

                            {/* Ad Placeholder 1 */}
                            <div id="ad-slot-episode-top-banner" style={{ height: '100px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '48px auto', color: 'var(--text-muted)', fontFamily: 'monospace', maxWidth: '728px' }}>
                                [ Ad Space - 728x90 ]
                            </div>

                            <h2 style={{ color: 'var(--cyan)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem' }}>The "Prediction" Engine</h2>
                            <p style={{ marginBottom: '24px' }}>
                                At its core, AI like ChatGPT is just a super-advanced version of the autocomplete on your phone. When you type "The sky is...", your phone suggests "blue".
                            </p>
                            <p style={{ marginBottom: '24px' }}>
                                LLMs do this but on a massive scale. They have been fed almost the entire internet—books, Wikipedia, Reddit threads. They process this data to learn the statistical probability of which word comes next. It doesn't "know" facts; it knows which words usually hang out together.
                            </p>

                            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--violet)', marginBottom: '32px' }}>
                                <h3 style={{ fontSize: '1.2rem', marginBottom: '12px', color: 'var(--violet)' }}><i className="fa-solid fa-brain" style={{ marginRight: '8px' }}></i> Tokens, not Words</h3>
                                <p style={{ fontSize: '0.95rem', color: 'var(--text-muted)' }}>
                                    AI doesn't read words like we do. It breaks text into chunks called <strong>Tokens</strong>. A token might be a whole word or just part of one. It processes these numbers mathematically, not linguistically.
                                </p>
                            </div>

                            <h3 style={{ color: 'var(--text-main)', marginTop: '32px', marginBottom: '16px' }}>Why does it lie? (Hallucinations)</h3>
                            <p style={{ marginBottom: '24px' }}>
                                Have you ever seen AI confidently state a wrong fact? This is called a <strong>Hallucination</strong>. Since the AI is just predicting the next likely word, if it doesn't have the answer, it will make up a plausible-sounding one.
                            </p>
                            <p style={{ marginBottom: '24px' }}>
                                It's not lying to deceive you; it's just trying to complete the pattern. If you ask for a quote from a book that doesn't exist, it might invent one simply because "quote followed by author name" is a common pattern it learned.
                            </p>

                            {/* Ad Placeholder 2 */}
                            <div id="ad-slot-episode-mid-content" style={{ height: '250px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '48px auto', color: 'var(--text-muted)', fontFamily: 'monospace', maxWidth: '300px' }}>
                                [ Ad Space - 300x250 ]
                            </div>

                            <h2 style={{ color: 'var(--cyan)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem' }}>Prompt Engineering: Talking to the Machine</h2>
                            <p style={{ marginBottom: '24px' }}>
                                Since AI is a probability engine, the way you ask matters. This is where <strong>Prompt Engineering</strong> comes in. It's the art of guiding the AI to the specific output you want.
                            </p>

                            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                                    <i className="fa-solid fa-check" style={{ position: 'absolute', left: 0, top: '4px', color: 'var(--green)' }}></i>
                                    <strong>Context is King:</strong> Give it a role. "Act as a senior software engineer" changes the probability distribution of the words it chooses.
                                </li>
                                <li style={{ marginBottom: '16px', paddingLeft: '24px', position: 'relative' }}>
                                    <i className="fa-solid fa-check" style={{ position: 'absolute', left: 0, top: '4px', color: 'var(--green)' }}></i>
                                    <strong>Step-by-Step:</strong> Asking AI to "think step by step" (Chain of Thought) significantly improves its logic capabilities.
                                </li>
                            </ul>

                            <div style={{ marginTop: '60px', padding: '32px', background: 'linear-gradient(135deg, rgba(108, 71, 255, 0.1), rgba(6, 182, 212, 0.1))', borderRadius: '24px', border: '1px solid var(--glass-border)' }}>
                                <h3 style={{ marginBottom: '16px' }}>The Verdict</h3>
                                <p style={{ marginBottom: '24px' }}>
                                    AI isn't magic; it's math. It's a powerful tool for generating text, code, and ideas, but it lacks true understanding or consciousness.
                                </p>
                                <p style={{ fontWeight: 'bold', color: 'var(--text-main)' }}>Takeaway:</p>
                                <p style={{ marginBottom: '0' }}>
                                    Treat AI as a very well-read but occasionally delusional intern. Always verify the facts, but leverage its speed for creativity and drafting.
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

export default WhatsBehindTheCurtainOfAIMagic;