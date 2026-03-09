import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';

const AllResources = () => {
    useScrollAnimation();

    return (
        <main style={{paddingTop: '140px', paddingBottom: '80px'}}>
            <div className="container">
                <div className="section-header" style={{marginBottom: '40px'}}>
                    <h1 style={{fontSize: '3rem', marginBottom: '16px'}}>All Resources</h1>
                    <p style={{color: 'var(--text-muted)', maxWidth: '600px'}}>Curated tools, reading lists, and community links to help you navigate the world of tech and finance.</p>
                </div>

                <div className="categories-grid">
                    <div className="glass-card cat-card">
                        <div className="cat-icon"><i className="fa-solid fa-newspaper" style={{color: 'var(--indigo)'}}></i></div>
                        <div className="cat-info">
                            <h3>Newsletter</h3>
                            <p>Weekly insights & updates</p>
                        </div>
                    </div>
                    <div className="glass-card cat-card">
                        <div className="cat-icon"><i className="fa-solid fa-book-open" style={{color: 'var(--green)'}}></i></div>
                        <div className="cat-info">
                            <h3>Reading List</h3>
                            <p>Books that shaped my thinking</p>
                        </div>
                    </div>
                    <div className="glass-card cat-card">
                        <div className="cat-icon"><i className="fa-solid fa-wrench" style={{color: 'var(--amber)'}}></i></div>
                        <div className="cat-info">
                            <h3>Tools & Gear</h3>
                            <p>My software & hardware stack</p>
                        </div>
                    </div>
                    <div className="glass-card cat-card">
                        <div className="cat-icon"><i className="fa-solid fa-users" style={{color: 'var(--rose)'}}></i></div>
                        <div className="cat-info">
                            <h3>Community</h3>
                            <p>Join the conversation</p>
                        </div>
                    </div>
                    <div className="glass-card cat-card">
                        <div className="cat-icon"><i className="fa-solid fa-file-lines" style={{color: 'var(--cyan)'}}></i></div>
                        <div className="cat-info">
                            <h3>Templates</h3>
                            <p>Financial & planning sheets</p>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default AllResources;