import React from 'react';

import { Triangle as TriangleData } from '../../shape'; 
import { calcRange, useStyle, Random } from '../../common';

export interface TriangleProps {
    triangle: TriangleData;
    center: {
        x: number;
        y: number;
    };
    rnd: Random;
}

export function Triangle(props: TriangleProps) {
    const { triangle, center, rnd } = props;

    const l1 = calcRange(triangle.length1, rnd);
    const l2 = triangle.length2 ? calcRange(triangle.length2, rnd) : l1;
    const l3 = triangle.length3 ? calcRange(triangle.length3, rnd) : l1;
    const style = useStyle(triangle.style, rnd);

    const x = (l3 * l3 - l2 * l2 + l1 * l1) / (l1 !== 0 ? 2 * l1 : 1);
    const y = Math.sqrt(l3 * l3 - x * x);

    // Center
    const ox = (0 + l1 + x) / 3;
    const oy = (0 + 0 + y) / 3;
    const ox2 = ox / 2;
    const oy2 = oy / 2;

    return (
        <polyline
            points={`${center.x -ox2} ${center.y - oy2} ${l1 - ox2 + center.x} ${0 - oy2 + center.y} ${x - ox2 + center.x} ${y - oy2 + center.y}`}
            {...style}
        />
    );
}
