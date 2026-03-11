import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const AdSlot = ({ adSlotId, adFormat = "auto" }) => {
    const { pathname } = useLocation();

    useEffect(() => {
        try {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        } catch (e) {
            // This error is expected in development with React.StrictMode
            // and can be safely ignored. It will not occur in production.
            // console.error("AdSense error:", e);
        }
    }, [pathname, adSlotId]); // Re-run on navigation

    return (
        // The key is crucial for SPAs. It forces React to unmount and remount
        // the component on navigation, which creates a fresh ad slot for AdSense.
        <div key={`${pathname}-${adSlotId}`}>
            <ins className="adsbygoogle"
                style={{ display: 'block' }}
                data-ad-client="ca-pub-9069897022784071"
                data-ad-slot={adSlotId}
                data-ad-format={adFormat}
                data-full-width-responsive="true"></ins>
        </div>
    );
};

export default AdSlot;