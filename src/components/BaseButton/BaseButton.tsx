import React from 'react';
import { Button } from 'reactstrap';
import styles from './BaseButton.module.scss';

interface BaseButtonProps {
    children?: React.ReactNode;
    width?: string;
    height?: string;
    onClick?: () => void;
}

export const BaseButton: React.FC<BaseButtonProps> = ({
    children= '버튼',
    width = 'auto',
    height = 'auto',
    onClick= () => {},
    ...props
}: BaseButtonProps) => {
    const convertWidth = Number(width) ? `${width}px` : `${width}`;
    const convertHeight = Number(height) ? `${height}px` : `${height}`;
    return (
        <Button
            className={styles.btn}
            onClick={onClick}
            style={{
                width: convertWidth,
                height: convertHeight,
            }}
            {...props}
        >
            {children}
        </Button>
    );
};

