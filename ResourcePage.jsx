import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

const ResourcePage = () => {
    const { slug } = useParams();
    useScrollAnimation();

    const resources = {
        'newsletter': {
            title: 'SWS Newsletter',
            description: 'Get weekly insights, behind-the-scenes content, and the best of what I\'m reading, delivered straight to your inbox. No spam, ever.',
            icon: 'fa-solid fa-newspaper'
        },
        'reading-list': {
            title: 'Reading List',
            description: 'A curated list of books on technology, finance, and philosophy that have shaped my thinking. Find your next great read here.',
            icon: 'fa-solid fa-book-open'
        },
        'tools-gear': {
            title: 'Tools & Gear',
            description: 'A complete breakdown of the software, hardware, and camera gear I use to produce Simplified with Suman.',
            icon: 'fa-solid fa-wrench'
        },
        'community': {
            title: 'Community',
            description: 'Join the conversation on our Discord server. Ask questions, share ideas, and connect with other curious minds.',
            icon: 'fa-solid fa-users'
        },
        'templates': {
            title: 'Templates',
            description: 'Download free templates for financial planning, project management, and content creation to streamline your workflow.',
            icon: 'fa-solid fa-file-lines'
        }
    };

    const resource = resources[slug];

    if (!resource) {
        return (
            <main style={{paddingTop: '140px', paddingBottom: '80px'}}>
                <div className="container">
                    <h1>Resource not found</h1>
                    <Link to="/all-resources" style={{color: 'var(--cyan)'}}>&larr; Back to Resources</Link>
                </div>
            </main>
        );
    }

    return (
        <main style={{paddingTop: '80px', paddingBottom: '80px'}}>
            <div className="container">
                <Link to="/all-resources" style={{color: 'var(--cyan)', display: 'inline-block'}}>&larr; Back to All Resources</Link>
                
                <div className="article-layout">
                    <div className="glass-card policy-content">
                        <div style={{textAlign: 'center', marginBottom: '40px'}}>
                            <i className={resource.icon} style={{fontSize: '3rem', color: 'var(--cyan)', marginBottom: '16px'}}></i>
                            <h1 style={{fontSize: '2.5rem'}}>{resource.title}</h1>
                        </div>
                        
                        <p style={{color: 'var(--text-muted)', fontSize: '1.2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 40px auto'}}>{resource.description}</p>

                        {/* Mobile Ad */}
                        <aside className="sidebar-mobile" style={{ margin: '40px 0' }}>
                            <div id="ad-slot-resource-page-sidebar-mobile" style={{ height: '250px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                                [ Ad Space - 300x250 ]
                            </div>
                        </aside>

                        <div className="blog-content" style={{ color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                        </div>
                    </div>

                    {/* Desktop Sidebar */}
                    <aside className="sidebar-desktop" style={{ position: 'sticky', top: '120px' }}>
                        <div id="ad-slot-resource-page-sidebar-desktop" style={{ height: '600px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                            [ Ad Space - 300x600 ]
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default ResourcePage;