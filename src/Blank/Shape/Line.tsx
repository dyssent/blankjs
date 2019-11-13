import React from 'react';

import { Line as LineData } from '../../shape'; 
import { calcRange, useLineStyle, Random } from '../../common';

export interface LineProps {
    line: LineData;
    center: {
        x: number;
        y: number;
    };
    rnd: Random;
}

export function Line(props: LineProps) {
    const { line, center, rnd } = props;

    const length = calcRange(line.length, rnd) / 2;
    const style = useLineStyle(line.style, rnd);

    return (
        <line
            x1={-length + center.x}
            y1={center.y}
            x2={length + center.x}
            y2={center.y}
            {...style}
        />
    );
}
