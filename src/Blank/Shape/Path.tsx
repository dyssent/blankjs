import React from 'react';

import { Path as PathData } from '../../shape'; 
import { Random, useStyle } from '../../common';

export interface PathProps {
    path: PathData;
    center: {
        x: number;
        y: number;
    };
    rnd: Random;
}

export function Path(props: PathProps) {
    const { path, rnd } = props;

    const style = useStyle(path.style, rnd);

    return (
        <path
            d={path.data}
            {...style}
        />
    );
}
