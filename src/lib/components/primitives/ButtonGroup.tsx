import React from 'react';
import styles from './ButtonGroup.module.scss';

export interface ButtonGroupProps {
    children: React.ReactNode;
    className?: string;
    orientation?: 'horizontal' | 'vertical';
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
    children,
    className,
    orientation = 'horizontal'
}) => {
    return (
        <div className={`${styles.buttonGroup} ${styles[orientation]} ${className || ''}`}>
            {children}
        </div>
    );
};
