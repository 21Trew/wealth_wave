import React from 'react';
import { Layout } from 'antd';

function GamePage() {
    return (
        <Layout
            style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                background: 'transparent'
            }}
        >
            <iframe
                src="https://esporte-br77.com/game-dir/index.html"
                width="1280"
                height="620"
                style={{ border: 'none' }}
                title="Game"
            />
        </Layout>
    );
}

export default GamePage;
