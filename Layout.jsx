import React from 'react';
import { GlobalShowCustomAdSpace } from './config';

const Layout = ({ children }) => {

    return (
        <>
            <div className="bg-grid"></div>
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            {children}
            {GlobalShowCustomAdSpace && (
                <div id="ad-slot-fixed-bottom-banner" className="bottom-ad-banner" style={{ animation: 'fadeInUp 0.5s ease-out' }}>
                    <div style={{ color: 'var(--text-muted)', fontFamily: 'monospace' }}>
                        [ Fixed Bottom Ad - 728x90 ]
                    </div>
                </div>
            )}
        </>
    );
};

export default Layout;