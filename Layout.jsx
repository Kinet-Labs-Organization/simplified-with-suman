import React from 'react';

const Layout = ({ children }) => {
    return (
        <>
            <div className="bg-grid"></div>
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>
            <div className="orb orb-3"></div>
            {children}
        </>
    );
};

export default Layout;