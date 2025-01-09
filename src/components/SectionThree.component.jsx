import { Button, Layout, Typography } from "antd";
import React from "react";
import { useNavigate } from "react-router-dom";

function SectionThree() {
    const navigate = useNavigate();

    const startGame = () => {
        navigate('/game');
    };

    return (
        <Layout
            style={{
                height: '100%',
                background: 'url(https://esporte-br77.com/wp-content/uploads/2024/07/nj-1.png) 50% 50% no-repeat',
                backgroundSize: 'cover',
                marginTop: '100px',
                padding: '16vh 12vw',
                textAlign: 'center',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
            }}
        >
            <Typography.Title level={1} style={{ color: 'white' }}>Section 3 Title</Typography.Title>

            <Typography.Text style={{ color: 'white', fontSize: '16px', marginBottom: '5vh' }}>
                Lorem ipsum odor amet, consectetuer adipiscing elit.
                Ante facilisis non taciti facilisi rutrum felis.
                Egestas libero accumsan vestibulum purus nostra.
                Luctus orci pharetra condimentum cursus consequat.
                Amet ullamcorper dui sit eget aliquam massa arcu.
            </Typography.Text>

            <Button
                onClick={startGame}
                style={{
                    width: '35vw',
                    alignSelf: 'center',
                    padding: '20px 0',
                    backgroundImage: 'linear-gradient(180deg,#37b0c3 0%,#162566 100%)',
                    border: 'none',
                    fontSize: '20px',
                    fontWeight: 'bold',
                    color: 'white',
                }}
            >
                Начать игру
            </Button>
        </Layout>
    );
}

export default SectionThree;
