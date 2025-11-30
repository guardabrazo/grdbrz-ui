import React from 'react';
import { Stack, type StackProps } from './Stack';

export interface DistributeProps extends Omit<StackProps, 'justify' | 'align'> {
    children: React.ReactNode;
}

export const Distribute: React.FC<DistributeProps> = ({
    children,
    direction = 'row',
    style,
    ...props
}) => {
    return (
        <Stack
            direction={direction}
            justify="between"
            align="center"
            style={{
                width: '100%',
                height: direction === 'column' ? '100%' : 'auto',
                ...style
            }}
            {...props}
        >
            {children}
        </Stack>
    );
};
