import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';

const AllResources = () => {
    useScrollAnimation();

    return (
        <main style={{paddingTop: '140px', paddingBottom: '80px'}}>
            <div className="container article-layout">
                <div>
                    <div className="section-header" style={{marginBottom: '40px'}}>
                        <h1 style={{fontSize: '3rem', marginBottom: '16px'}}>All Resources</h1>
                    </div>

                    {/* Mobile Ad */}
                    <aside className="sidebar-mobile" style={{ margin: '0 0 40px 0' }}>
                        <div style={{ height: '250px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                            [ Ad Space - 300x250 ]
                        </div>
                    </aside>

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

                {/* Desktop Sidebar */}
                <aside className="sidebar-desktop" style={{ position: 'sticky', top: '120px' }}>
                    <div style={{ height: '600px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                        [ Ad Space - 300x600 ]
                    </div>
                </aside>
            </div>
        </main>
    );
};

export default AllResources;