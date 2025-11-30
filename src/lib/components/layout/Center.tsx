import React from 'react';

export interface CenterProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
}

export const Center: React.FC<CenterProps> = ({
    children,
    className,
    style,
    ...props
}) => {
    return (
        <div
            className={className}
            style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '100%',
                height: '100%',
                ...style
            }}
            {...props}
        >
            {children}
        </div>
    );
};
