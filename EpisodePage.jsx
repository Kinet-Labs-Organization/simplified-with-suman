import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

const EpisodePage = () => {
    const { id } = useParams();
    useScrollAnimation();

    // Placeholder data - normally this would come from a database or API
    const episodes = {
        1: { title: "Is your phone listening to you?", category: "Privacy & Security", desc: "Understanding data brokers, DPDPA 2023, and how ad tracking really works." },
        2: { title: "What's behind the curtain of AI magic?", category: "AI & ML", desc: "LLMs, prompt engineering, and why AI hallucinates. No math required." },
        3: { title: "Time beats Money in building wealth", category: "Personal Finance", desc: "The actual math behind SIPs, compounding, and tracking the Nifty 50." },
        4: { title: "Are you really financially safe?", category: "Personal Finance", desc: "Emergency funds, insurance basics, and stress-testing your savings in ₹." }
    };

    const episode = episodes[id];

    if (!episode) {
        return (
            <main style={{paddingTop: '140px', paddingBottom: '80px'}}>
                <div className="container">
                    <h1>Episode not found</h1>
                    <Link to="/all-episodes" style={{color: 'var(--cyan)'}}>&larr; Back to Episodes</Link>
                </div>
            </main>
        );
    }

    return (
        <main style={{paddingTop: '140px', paddingBottom: '80px'}}>
            <div className="container">
                <Link to="/all-episodes" style={{color: 'var(--cyan)', marginBottom: '24px', display: 'inline-block'}}>&larr; Back to Episodes</Link>
                <div className="glass-card">
                    <div className="ep-meta mono">
                        <span>EP {id.padStart(2, '0')}</span>
                        <span>{episode.category}</span>
                    </div>
                    <h1 style={{fontSize: '2.5rem', marginBottom: '24px'}}>{episode.title}</h1>
                    <p style={{color: 'var(--text-muted)', fontSize: '1.1rem', marginBottom: '40px'}}>{episode.desc}</p>
                    
                    <div style={{width: '100%', aspectRatio: '16/9', background: 'rgba(0,0,0,0.5)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                        <i className="fa-solid fa-play" style={{fontSize: '3rem', color: 'var(--text-muted)'}}></i>
                    </div>
                    <p style={{marginTop: '24px', textAlign: 'center', color: 'var(--text-muted)'}}>(Video player placeholder)</p>
                </div>
            </div>
        </main>
    );
};

export default EpisodePage;