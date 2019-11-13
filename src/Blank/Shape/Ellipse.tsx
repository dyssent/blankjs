import React from 'react';

import { Ellipse as EllipseData } from '../../shape'; 
import { calcRange, useStyle, Random } from '../../common';

export interface EllipseProps {
    ellipse: EllipseData;
    center: {
        x: number;
        y: number;
    };
    rnd: Random;
}

export function Ellipse(props: EllipseProps) {
    const { ellipse, center, rnd } = props;

    const rx = calcRange(ellipse.width, rnd) + center.x;
    const ry = calcRange(ellipse.height, rnd) + center.y;
    const style = useStyle(ellipse.style, rnd);

    return (
        <ellipse
            cx={center.x}
            cy={center.y}
            rx={rx}
            ry={ry}
            {...style}
        />
    );
}
