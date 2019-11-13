import React from 'react';
import { Shape as ShapeData } from '../../shape';
import { Ellipse } from './Ellipse';
import { Circle } from './Circle';
import { Rectangle } from './Rectangle';
import { Line } from './Line';
import { Text } from './Text';
import { Triangle } from './Triangle';
import { Path } from './Path';
import { Random, calcRange } from '../../common';
import { buildTransforms } from './transform';

export interface ShapeProps {
    shape: ShapeData;
    center: {
        x: number;
        y: number;
    };
    title?: string;
    rnd: Random;
}

export function Shape(props: ShapeProps) {
    const { title, shape, center, rnd } = props;

    const replicas = calcRange(shape.modifiers.replication.count, rnd);

    function renderShape(s: ShapeData, index: number) {
        switch (s.type) {
            case 'ellipse': return <Ellipse ellipse={s} key={index} center={center} rnd={rnd} />;
            case 'rectangle': return <Rectangle rect={s} key={index} center={center} rnd={rnd} />;
            case 'line': return <Line line={s} key={index} center={center} rnd={rnd} />;
            case 'text': return <Text text={s} key={index} center={center} title={title} rnd={rnd} />;
            case 'triangle': return <Triangle triangle={s} key={index} center={center} rnd={rnd} />;
            case 'circle': return <Circle circle={s} key={index} center={center} rnd={rnd} />;
            case 'path': return <Path path={s} key={index} center={center} rnd={rnd} />;
        }
    }

    function withTransform(s: ShapeData, index: number) {
        if (!s.modifiers.transforms.rotate && !s.modifiers.transforms.translate) {
            return renderShape(s, index);
        }

        const transforms = buildTransforms(s.modifiers.transforms, rnd);
        return (
            <g transform={transforms} key={index}>
                {renderShape(s, 0)}
            </g>
        );
    }

    const res: React.ReactNode[] = [];
    for (let i = 0; i < replicas; i++) {
        res.push(withTransform(shape, i));
    }

    return (
        <g>
            {res}
        </g>
    );
}
