import React from 'react';

import { Text as TextData } from '../../shape'; 
import { calcRange, useStyle, Random } from '../../common';

export interface TextProps {
    text: TextData;
    center: {
        x: number;
        y: number;
    };
    title?: string;
    rnd: Random;
}

export function Text(props: TextProps) {
    const { text, center, title, rnd } = props;

    const size = calcRange(text.size, rnd);
    const style = useStyle(text.style, rnd);

    if (!title && !text.text) {
        return null;
    }

    const value = !text.text ? title :
        Array.isArray(text.text) ?
            text.text[rnd.nextInt(0, text.text.length - 1)] :
            text.text;

    return (
        <text
            x={center.x}
            y={center.y}
            // transform={`scale(${1}, ${1})`}
            fontSize={size}
            textAnchor="middle"
            alignmentBaseline="central"
            dominantBaseline="middle"
            {...style}
        >
            {value}
        </text>
    );
}
