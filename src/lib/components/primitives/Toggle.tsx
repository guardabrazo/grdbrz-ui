import React from 'react';
import styles from './Toggle.module.scss';

export interface ToggleProps {
    label?: string;
    checked: boolean;
    onChange: (checked: boolean) => void;
    className?: string;
}

export const Toggle: React.FC<ToggleProps> = ({
    label,
    checked,
    onChange,
    className
}) => {
    return (
        <label className={`${styles.container} ${className || ''}`}>
            {label && <span className={styles.label}>{label}</span>}
            <input
                type="checkbox"
                className={styles.input}
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
            />
            <span className={styles.toggle}></span>
        </label>
    );
};
