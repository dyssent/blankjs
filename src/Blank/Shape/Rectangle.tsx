import React from 'react';

import { Rectangle as RectangleData } from '../../shape'; 
import { calcRange, useStyle, Random } from '../../common';

export interface RectangleProps {
    rect: RectangleData;
    center: {
        x: number;
        y: number;
    };
    rnd: Random;
}

export function Rectangle(props: RectangleProps) {
    const { rect, center, rnd } = props;

    const width = calcRange(rect.width, rnd);
    const height = rect.height ? calcRange(rect.height, rnd) : width;
    const style = useStyle(rect.style, rnd);
    const borderRadius = rect.borderRadius ? calcRange(rect.borderRadius, rnd) : undefined;

    return (
        <rect
            x={-width / 2 + center.x}
            y={-height / 2 + center.y}
            width={width}
            height={height}
            {...style}
            rx={borderRadius}
            ry={borderRadius}
        />
    );
}
