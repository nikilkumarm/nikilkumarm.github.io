import React from 'react';

const BackgroundShapes = () => {
    return (
        <div className="bg-shapes-container" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            overflow: 'hidden',
            zIndex: -1,
            pointerEvents: 'none',
            background: 'var(--bg-primary)'
        }}>
            {/* Simple Grid */}
            <div style={{
                position: 'absolute',
                inset: 0,
                backgroundImage: `
                    linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                    linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px)
                `,
                backgroundSize: '100px 100px',
                opacity: 0.5
            }} />

            {/* Vignette */}
            <div style={{
                position: 'absolute',
                inset: 0,
                background: 'radial-gradient(circle at center, transparent 0%, var(--bg-primary) 100%)',
            }} />
        </div>
    );
};

export default BackgroundShapes;
