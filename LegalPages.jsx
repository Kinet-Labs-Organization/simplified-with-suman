import React from 'react';
import { useScrollAnimation } from './useScrollAnimation';

const LegalLayout = ({ title, lastUpdated, badgeColor, badgeText, children }) => {
    useScrollAnimation();
    return (
        <main style={{paddingTop: '140px', paddingBottom: '80px'}}>
            <div className="container">
                <div className="glass-card policy-content">
                    <span className="mono" style={{color: badgeColor}}>{badgeText}</span>
                    <h1>{title}</h1>
                    <span className="last-updated mono">Last Updated: {lastUpdated}</span>
                    {children}
                    <div style={{marginTop: '40px'}}>
                        <h2>Contact Us</h2>
                        <p>If you have any questions, please contact us at:</p>
                        <p className="mono" style={{color: 'var(--text-main)'}}>kinetlabs@gmail.com</p>
                    </div>
                </div>
            </div>
        </main>
    );
};

export const PrivacyPolicy = () => (
    <LegalLayout title="Privacy Policy" lastUpdated="March 2026" badgeColor="var(--rose)" badgeText="Legal Document">
        <p>Welcome to Simplified with Suman (SWS). We are committed to protecting your personal information and your right to privacy. This Privacy Policy explains how we collect, use, and safeguard your information when you visit our website, in compliance with the <strong>Digital Personal Data Protection Act (DPDPA), 2023</strong> of India.</p>

        <h2>1. Information We Collect</h2>
        <p>We believe in data minimization. As a content platform, we collect minimal data necessary to provide you with a seamless experience.</p>
        <ul>
            <li><strong>Voluntary Information:</strong> Information you provide when subscribing to newsletters or contacting us (e.g., Name, Email Address).</li>
            <li><strong>Usage Data:</strong> Non-personal information automatically collected by web servers, such as IP addresses, browser types, and page visit duration, used solely for analytics and site optimization.</li>
        </ul>

        <h2>2. How We Use Your Information</h2>
        <p>We use the information we collect for the following specific purposes:</p>
        <ul>
            <li>To deliver the content and episodes you request.</li>
            <li>To improve our website performance and user experience.</li>
            <li>To communicate with you regarding updates, new episodes, or inquiries (only if you have opted in).</li>
        </ul>

        <h2>3. DPDPA 2023 Compliance (India)</h2>
        <p>In accordance with the Digital Personal Data Protection Act, 2023, we act as a "Data Fiduciary" for any personal data you share with us. You have the following rights:</p>
        <ul>
            <li><strong>Right to Access:</strong> You may request a summary of the personal data we hold about you.</li>
            <li><strong>Right to Correction:</strong> You may ask us to correct misleading or inaccurate data.</li>
            <li><strong>Right to Erasure:</strong> You may request the deletion of your personal data ("Right to be Forgotten") unless retention is required by law.</li>
        </ul>
    </LegalLayout>
);

export const TermsOfUse = () => (
    <LegalLayout title="Terms of Use" lastUpdated="March 2026" badgeColor="var(--cyan)" badgeText="Legal Document">
        <p>Welcome to Simplified with Suman (SWS). By accessing or using our website, you agree to be bound by these Terms of Use.</p>
        
        <h2>1. Educational Purpose Only</h2>
        <p><strong>Important:</strong> The content provided on SWS, including videos, articles, and episode notes, is strictly for <strong>educational and informational purposes only</strong>.</p>
        <ul>
            <li><strong>Not Financial Advice:</strong> Nothing on this website constitutes financial, investment, legal, or tax advice. We are not SEBI-registered investment advisors.</li>
            <li><strong>Not Technical Advice:</strong> Technical tutorials and explanations are simplified for understanding and may not cover every edge case required for production-grade software.</li>
        </ul>
    </LegalLayout>
);

export const Disclaimer = () => (
    <LegalLayout title="Disclaimer" lastUpdated="March 2026" badgeColor="var(--amber)" badgeText="Legal Document">
        <p>The information provided by Simplified with Suman ("we," "us," or "our") on this website is for general informational and educational purposes only.</p>

        <h2>1. Financial & Investment Disclaimer</h2>
        <p><strong>Suman Mandal is NOT a SEBI-registered investment advisor.</strong></p>
        <p>The content produced on SWS (including videos, articles, and newsletters) regarding finance, trading, crypto, or investing is strictly for educational purposes.</p>
        <ul>
            <li>Trading and investing in stock markets, mutual funds, and cryptocurrencies involve a high degree of risk. You could lose some or all of your capital.</li>
            <li>Past performance of any trading system or methodology is not necessarily indicative of future results.</li>
        </ul>
    </LegalLayout>
);

export const CookiePolicy = () => (
    <LegalLayout title="Cookie Policy" lastUpdated="March 2026" badgeColor="var(--green)" badgeText="Legal Document">
        <p>This Cookie Policy explains how Simplified with Suman ("we", "us", or "our") uses cookies and similar technologies to recognize you when you visit our website.</p>

        <h2>1. What are cookies?</h2>
        <p>Cookies are small data files that are placed on your computer or mobile device when you visit a website.</p>

        <h2>2. Why do we use cookies?</h2>
        <p>We use cookies for several reasons. Some cookies are required for technical reasons in order for our Website to operate, and we refer to these as "essential" or "strictly necessary" cookies.</p>
    </LegalLayout>
);