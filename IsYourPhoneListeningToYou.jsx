import React from 'react';
import { Link } from 'react-router-dom';
import { useScrollAnimation } from './useScrollAnimation';

const IsYourPhoneListeningToYou = () => {
    useScrollAnimation();

    return (
        <main style={{paddingTop: '140px', paddingBottom: '80px'}}>
            <div className="container">
                <Link to="/all-episodes" style={{color: 'var(--cyan)', marginBottom: '24px', display: 'inline-block'}}>&larr; Back to Episodes</Link>
                
                <div className="article-layout">
                    <div className="glass-card policy-content">
                        {/* Header Section */}
                        <header style={{textAlign: 'center'}}>
                            <div className="ep-meta mono" style={{justifyContent: 'center', gap: '16px', marginBottom: '16px'}}>
                                <span style={{color: 'var(--cyan)'}}>EP 01</span>
                                <span>•</span>
                                <span style={{color: 'var(--text-muted)'}}>Privacy & Security</span>
                            </div>
                            <h1 style={{fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '24px', lineHeight: '1.2'}}>Is your phone actually listening to you?</h1>
                            <p style={{color: 'var(--text-muted)', fontSize: '1.2rem'}}>We pull back the curtain on data brokers, DPDPA 2023, and the "digital magic" behind ad tracking.</p>
                        </header>
                        
                        {/* Video Player Placeholder */}
                        <div style={{width: '100%', aspectRatio: '16/9', background: 'rgba(0,0,0,0.3)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '40px 0 48px 0', border: '1px solid var(--glass-border)'}}>
                            <div style={{textAlign: 'center'}}>
                                <i className="fa-solid fa-play-circle" style={{fontSize: '4rem', color: 'var(--cyan)', marginBottom: '16px', cursor: 'pointer'}}></i>
                                <p style={{color: 'var(--text-muted)'}}>Watch the full explanation (10:00)</p>
                            </div>
                        </div>

                        {/* Sidebar Ad for Mobile/Tablet */}
                        <aside className="sidebar-mobile" style={{ margin: '40px 0' }}>
                            <div style={{ height: '250px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                                [ Ad Space - 300x250 ]
                            </div>
                        </aside>

                        {/* Blog Content */}
                        <div className="blog-content" style={{color: 'var(--text-main)', lineHeight: '1.8', fontSize: '1.05rem'}}>
                            
                            <p style={{marginBottom: '24px'}}>
                                <span style={{fontSize: '1.5rem', float: 'left', lineHeight: '1', paddingRight: '8px', fontWeight: 'bold', color: 'var(--cyan)'}}>N</span>
                                amaskar! Has this ever happened to you? You're chatting with a friend about buying, say, a pair of red shoes for the upcoming festivities. And just five minutes later, you open Facebook or Instagram, and boom—there’s an ad for those exact red shoes right in front of you!
                            </p>
                            <p style={{marginBottom: '40px'}}>
                                Creepy, right? It feels like the phone is reading our minds or constantly eavesdropping on our private conversations. If you’re worried that your private talks are leaking, then you are in the right place. Today, we are going to pull back the curtain on this "digital magic."
                            </p>

                            {/* Ad Placeholder 1 */}
                            <div style={{ height: '100px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '48px auto', color: 'var(--text-muted)', fontFamily: 'monospace', maxWidth: '728px' }}>
                                [ Ad Space - 728x90 ]
                            </div>

                            <h2 style={{color: 'var(--cyan)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem'}}>The "Magic" Behind the Ads</h2>
                            <p style={{marginBottom: '24px'}}>
                                Many big companies claim they don’t record your voice through the microphone. So where are the ads coming from? Magic? No. Behind this lies the brilliance of <strong>Artificial Intelligence (AI)</strong> and <strong>Machine Learning</strong>.
                            </p>
                            <p style={{marginBottom: '24px'}}>
                                As we use our phones all day, we unknowingly leave behind a trail of Data. What you search on Google, which videos you watch longer, even which shops you walk past (if your GPS is on)—all this info builds a <strong>Profile</strong> of you.
                            </p>
                            
                            <div style={{background: 'rgba(255,255,255,0.03)', padding: '24px', borderRadius: '12px', borderLeft: '4px solid var(--violet)', marginBottom: '32px'}}>
                                <h3 style={{fontSize: '1.2rem', marginBottom: '12px', color: 'var(--violet)'}}><i className="fa-solid fa-share-nodes" style={{marginRight: '8px'}}></i> The Vector Connection</h3>
                                <p style={{fontSize: '0.95rem', color: 'var(--text-muted)'}}>
                                    In technical terms, companies categorize your likes into <strong>Vectors</strong>. Suppose both you and your friend love traveling. Your friend searches for a cheap flight ticket. Since your profile is "linked" to your friend’s (same Wi-Fi or location), the system assumes you might be interested too. And just like that, the ad appears on your phone!
                                </p>
                            </div>

                            <h3 style={{color: 'var(--text-main)', marginTop: '32px', marginBottom: '16px'}}>Predictive Analysis: The Digital "Neighborhood Uncle"</h3>
                            <p style={{marginBottom: '24px'}}>
                                Is the phone actually listening? While many apps have microphone permissions, they often track specific <strong>Keywords</strong> rather than recording conversations. This is <strong>Predictive Analysis</strong>. By looking at your last 10 actions, a computer can predict your 11th. It’s like that neighborhood uncle who sees you walking and knows exactly where you are going. Here, the "uncle" is a massive Algorithm.
                            </p>

                            <h2 style={{color: 'var(--rose)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem'}}>The Risk: Trusted vs. Un-trusted Apps</h2>
                            <p style={{marginBottom: '24px'}}>
                                You might think, "If they listen, let them. What's the harm in a shoe ad?"
                            </p>
                            <p style={{marginBottom: '24px'}}>
                                There are two sides here. <strong>Trusted Apps</strong> (like Facebook, Google) mainly use data for ads. Their business relies on your trust. The real danger lies in <strong>Un-trusted or Fake Apps</strong>.
                            </p>
                            <p style={{marginBottom: '24px'}}>
                                Suppose you install a simple 'Flashlight' app. Suddenly, it asks for permission to access your Microphone, Contacts, and SMS. If you click 'Allow', these apps can spy on you. In tech terms, this is <strong>Spyware</strong>.
                            </p>
                            
                            <ul style={{listStyle: 'none', padding: 0, marginBottom: '32px'}}>
                                <li style={{marginBottom: '16px', paddingLeft: '24px', position: 'relative'}}>
                                    <i className="fa-solid fa-triangle-exclamation" style={{position: 'absolute', left: 0, top: '4px', color: 'var(--rose)'}}></i>
                                    <strong>Voice Clones:</strong> With AI, hackers can clone your voice to bypass banking verification or scam your family.
                                </li>
                                <li style={{marginBottom: '16px', paddingLeft: '24px', position: 'relative'}}>
                                    <i className="fa-solid fa-triangle-exclamation" style={{position: 'absolute', left: 0, top: '4px', color: 'var(--rose)'}}></i>
                                    <strong>Identity Theft:</strong> With SMS permission, they can read OTPs and manipulate your social media.
                                </li>
                            </ul>

                            {/* Ad Placeholder 2 */}
                            <div style={{ height: '250px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '48px auto', color: 'var(--text-muted)', fontFamily: 'monospace', maxWidth: '300px' }}>
                                [ Ad Space - 300x250 ]
                            </div>

                            <h2 style={{color: 'var(--cyan)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem'}}>Deep Dive: The Science of Spying</h2>
                            <p style={{marginBottom: '24px'}}>It's not just about "listening" with ears. There are three fascinating technologies at play:</p>
                            
                            <div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginBottom: '40px'}}>
                                <div style={{background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px'}}>
                                    <i className="fa-solid fa-tower-broadcast" style={{color: 'var(--indigo)', fontSize: '1.5rem', marginBottom: '12px'}}></i>
                                    <h4 style={{marginBottom: '8px'}}>Ultrasonic Beacons</h4>
                                    <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>TV ads emit high-frequency sounds your phone picks up to link devices.</p>
                                </div>
                                <div style={{background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px'}}>
                                    <i className="fa-solid fa-fingerprint" style={{color: 'var(--teal)', fontSize: '1.5rem', marginBottom: '12px'}}></i>
                                    <h4 style={{marginBottom: '8px'}}>Digital Fingerprinting</h4>
                                    <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Your battery level, screen brightness, and model create a unique ID.</p>
                                </div>
                                <div style={{background: 'rgba(255,255,255,0.03)', padding: '20px', borderRadius: '12px'}}>
                                    <i className="fa-solid fa-network-wired" style={{color: 'var(--amber)', fontSize: '1.5rem', marginBottom: '12px'}}></i>
                                    <h4 style={{marginBottom: '8px'}}>Neural Networks</h4>
                                    <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>Systems that map your behavior patterns like a human brain.</p>
                                </div>
                            </div>

                            <h2 style={{color: 'var(--cyan)', marginTop: '48px', marginBottom: '24px', fontSize: '1.8rem'}}>Real-Life Example: The Mumbai Flat Search</h2>
                            <p style={{marginBottom: '24px'}}>
                                Imagine you search: <em>'Flat for rent in Mumbai Goregaon, budget 20,000.'</em> The next day, you search: <em>'Flat near Andheri, budget 25,000.'</em>
                            </p>
                            <p style={{marginBottom: '24px'}}>
                                The Neural Networks kick in. They see a pattern: Mumbai, 20k–25k budget. From now on, whether you open Facebook or YouTube, it will show you flats in Mumbai within that range. It won't show you flats in Delhi! This is the magic of data science.
                            </p>

                            <div style={{marginTop: '60px', padding: '32px', background: 'linear-gradient(135deg, rgba(108, 71, 255, 0.1), rgba(6, 182, 212, 0.1))', borderRadius: '24px', border: '1px solid var(--glass-border)'}}>
                                <h3 style={{marginBottom: '16px'}}>The Verdict</h3>
                                <p style={{marginBottom: '24px'}}>
                                    More than just the phone "listening," the real issue is how much data we are leaving behind. Every step is being tracked.
                                </p>
                                <p style={{fontWeight: 'bold', color: 'var(--text-main)'}}>Action Item:</p>
                                <p style={{marginBottom: '0'}}>
                                    Go to your phone settings today. Check which apps have unnecessary access to your mic or location. If a photo editor needs your SMS, deny it!
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar for Ads */}
                    <aside className="sidebar-desktop" style={{ position: 'sticky', top: '120px' }}>
                        <div style={{ height: '600px', background: 'rgba(255, 255, 255, 0.02)', border: '1px dashed var(--glass-border)', borderRadius: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                            [ Ad Space - 300x600 ]
                        </div>
                    </aside>
                </div>
            </div>
        </main>
    );
};

export default IsYourPhoneListeningToYou;