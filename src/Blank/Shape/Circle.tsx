import React from 'react';

import { Circle as CircleData } from '../../shape'; 
import { Random, calcRange, useStyle } from '../../common';

export interface CircleProps {
    circle: CircleData;
    center: {
        x: number;
        y: number;
    };
    rnd: Random;
}

export function Circle(props: CircleProps) {
    const { circle, center, rnd } = props;

    const radius = calcRange(circle.radius, rnd);
    const style = useStyle(circle.style, rnd);

    return (
        <circle
            r={radius}
            cx={center.x}
            cy={center.y}
            {...style}
        />
    );
}
