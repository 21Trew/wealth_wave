import React, { useState } from 'react';
import {Menu, Image, Layout, Col, Row} from 'antd';
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
        label: 'Игра',
        key: 'game',
    }
];

const Header = () => {
    const [current, setCurrent] = useState();
    const navigate = useNavigate();

    const onClick = (e) => {
        setCurrent(e.key);

        if (e.key === 'main') {
            navigate('/');
        } else if (e.key === 'privacy') {
            navigate('/privacy');
        } else if (e.key === 'game') {
            navigate('/game')
        }

        window.scrollTo(0, 0);
    };

    return (
        <Layout.Header
            style={{
                display: "flex",
                justifyContent: "space-between",
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
        </Layout.Header>
    );
};

export default Header;
