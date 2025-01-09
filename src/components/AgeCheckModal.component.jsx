import React, { useState, useEffect } from 'react';
import { Modal, Button } from 'antd';

const AgeCheckModal = ({ onAgeVerified }) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Проверяем, была ли уже пройдена проверка возраста
        const ageVerified = localStorage.getItem('ageVerified');
        if (!ageVerified) {
            setIsVisible(true);
        }
    }, []);

    const handleAgeVerification = (isVerified) => {
        if (isVerified) {
            localStorage.setItem('ageVerified', true);
            onAgeVerified();
        } else {
            alert('Вы должны быть старше 18 лет для доступа');
        }
        setIsVisible(false);
    };

    return (
        <Modal
            title="Проверка возраста"
            open={isVisible}
            onCancel={() => setIsVisible(false)}
            footer={null}
            closable={false}
        >
            <p>Для доступа к сайту вам нужно подтвердить свой возраст.</p>
            <Button onClick={() => handleAgeVerification(true)} type="primary" style={{ marginRight: 8 }}>
                Мне больше 18
            </Button>
            <Button onClick={() => handleAgeVerification(false)} danger>
                Мне меньше 18
            </Button>
        </Modal>
    );
};

export default AgeCheckModal;
