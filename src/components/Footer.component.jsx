import React, { useState } from 'react';
import { Menu, Image, Layout, Typography, Row, Col } from 'antd';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/logo.png';
import warning18 from '../assets/18.svg';

const items = [
    {
        label: 'Главная',
        key: 'main',
    },
    {
        label: 'Политика конфиденциальности',
        key: 'privacy',
    },
    {
        label: 'Условия использования',
        key: 'terms',
    },
    {
        label: 'Игра',
        key: 'game',
    }
];

const Footer = () => {
    const [current, setCurrent] = useState();
    const navigate = useNavigate();

    const onClick = (e) => {
        setCurrent(e.key);

        if (e.key === 'main') {
            navigate('/');
        } else if (e.key === 'privacy') {
            navigate('/privacy');
        } else if (e.key === 'terms') {
            navigate('/terms')
        } else if (e.key === 'game') {
            navigate('/game')
        }

        window.scrollTo(0, 0);
    };

    return (
        <Layout.Footer
            style={{
                display: "flex",
                flexDirection: "column",
                backgroundImage: "linear-gradient(180deg,#37b0c3 0%,#162566 100%)",
                padding: "3vh 12vw"
            }}
        >
            <Row align="middle" justify="space-between" style={{ width: '100%'}}>
                <Col>
                    <Image preview={false} width={70} src={logo} />
                </Col>
                <Col flex="1">
                    <Menu
                        theme="dark"
                        onClick={onClick}
                        selectedKeys={[current]}
                        mode="horizontal"
                        items={items}
                        style={{
                            justifyContent: 'center',
                            background: 'transparent',
                            border: 'none',
                            fontSize: '18px',
                            display: 'flex'
                        }}
                    />
                </Col>
                <Col>
                    <Image preview={false} width={70} src={warning18} />
                </Col>
            </Row>
            <Row style={{marginTop: '5vh', alignSelf: 'center'}}>
                <Typography style={{maxWidth: '50vw', minWidth: '300px', textAlign: 'center', color: 'white'}}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
                    commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                    sunt in culpa qui officia deserunt mollit anim id est laborum.
                </Typography>
            </Row>
        </Layout.Footer>
    );
};

export default Footer;