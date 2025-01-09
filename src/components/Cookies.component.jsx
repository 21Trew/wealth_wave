import React, { useState, useEffect } from 'react';
import { notification, Button } from 'antd';

const Cookies = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Проверяем, были ли уже приняты куки
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            setIsVisible(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        // Сохраняем информацию о том, что куки приняты
        localStorage.setItem('cookiesAccepted', true);
        setIsVisible(false);
        notification.success({
            message: 'Куки приняты',
            description: 'Спасибо за согласие!',
        });
    };

    const handleDeclineCookies = () => {
        setIsVisible(false);
    };

    if (!isVisible) return null;

    return (
        <div style={{
            position: 'fixed',
            bottom: 0,
            left: 0,
            width: '100%',
            backgroundColor: '#162566',
            padding: '10px 0',
            textAlign: 'center',
            color: 'white',
            zIndex: 1000,
        }}>
            <span>Мы используем куки для улучшения работы с сайтом. </span>
            <Button onClick={handleAcceptCookies} type="primary" style={{ marginRight: 8 }}>
                Принять
            </Button>
            <Button onClick={handleDeclineCookies} danger>
                Отклонить
            </Button>
        </div>
    );
};

export default Cookies;
