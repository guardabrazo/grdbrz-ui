import React from 'react';
import styles from './Slider.module.scss';

export interface SliderProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'> {
    label?: string;
    value: number;
    min?: number;
    max?: number;
    step?: number;
    unit?: string;
    onChange: (value: number) => void;
}

export const Slider: React.FC<SliderProps> = ({
    label,
    value,
    min = 0,
    max = 100,
    step = 1,
    unit = '',
    onChange,
    className,
    ...props
}) => {
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (props.disabled) return;
        onChange(Number(e.target.value));
    };

    return (
        <div className={`${styles.container} ${props.disabled ? styles.disabled : ''} ${className || ''}`}>
            {label && <label className={styles.label}>{label}</label>}
            <input
                type="range"
                className={styles.slider}
                value={value}
                min={min}
                max={max}
                step={step}
                onChange={handleChange}
                {...props}
            />
            <span className={styles.value}>{value}{unit}</span>
        </div>
    );
};
