import React, { useEffect, useState } from 'react';
import styles from './Message.module.css';
export default function Message({ type, msg }) {
    const [visible, setVisible] = useState(false);

    const isVisible = () => {
        if (!msg) {
            setVisible(false);
            return;
        }
        setVisible(true);
    };

    useEffect(() => {
        isVisible();
        const timer = setTimeout(() => {
            setVisible(false);
        }, 3000);
        return () => {
            clearTimeout(timer);
        };
    }, [msg]);
    return (
        <>
            {visible && (
                <div className={`${styles.message}  ${styles[type]}`}>
                    <p> {msg}</p>
                </div>
            )}
        </>
    );
}
