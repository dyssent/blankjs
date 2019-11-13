import React, { useState, useEffect, CSSProperties, useMemo } from 'react';
import { Config, DefaultSettings } from './config';
import { Shape } from './Shape';
import { ConfigContext } from './context';
import { Random } from '../common';

export interface BlankProps {
    id: string | number;
    avatar?: string | File;
    title?: string | string[];
    config?: Config;
    style?: CSSProperties;
    className?: string;

    renderTitle?: (title: string | string[]) => string;
}

export function capitalizeTitle(title: string | string[]): string {
    const values = Array.isArray(title) ? title : [title];
    return values.map(v => {
        const clean = v.trim();
        if (clean.length === 0) {
            return '';
        }
        return clean[0].toLocaleUpperCase();
    }).join('');
}

export const Blank = React.memo((props: BlankProps) => {
    const {
        id,
        avatar,
        className,
        style,
        title,
        config = DefaultSettings.config,
        renderTitle = capitalizeTitle
    } = props;

    const [avatarLoaded, setAvatarLoaded] = useState(false);
    const [fileResult, setFileResult] = useState<string | undefined>(undefined);
    const [rnd] = useState(() => new Random());

    const mergedStyle: CSSProperties = useMemo(() => {
        return {
            ...{
                overflow: 'hidden'
            },
            ...(style || {})
        }
    }, [style]);

    const center = useMemo(() => {
        return {x: 64, y: 64};
    }, []);

    useEffect(() => {
        setAvatarLoaded(false);
        if (typeof avatar === 'string' || !FileReader || !avatar) {
            setFileResult(undefined);
            return;
        }

        const fr = new FileReader();
        fr.onload = (ev: ProgressEvent) => setFileResult(fr.result as string);
        fr.readAsDataURL(avatar);
    }, [avatar]);

    const finalTitle = useMemo(() => {
        return title ? renderTitle(title) : undefined;
    }, [title, renderTitle]);

    const randomHash = useMemo(() => {
        return Random.hash(id.toString());
    }, [id]);

    rnd.setSeed(randomHash);
    const avatarSource = fileResult ? fileResult : (typeof avatar === 'string' ? avatar : undefined)

    return (
        <ConfigContext.Provider value={config}>
            <div style={mergedStyle} className={className}>
                <svg
                    viewBox="0 0 128 128"
                    width="100%"
                    height="100%"
                >
                    {config.shapes.map((s, si) =>
                        <Shape
                            key={si}
                            shape={s}
                            center={center}
                            title={finalTitle}
                            rnd={rnd}
                        />)}
                </svg>
                {
                    avatarSource &&
                    <img
                        alt="Avatar"
                        src={avatarSource}
                        style={{
                            width: '100%',
                            height: '100%',
                            visibility: avatarLoaded || fileResult ? 'visible' : 'hidden',
                            position: 'absolute',
                            left: 0,
                            top: 0,
                        }}
                        onLoad={() => setAvatarLoaded(true)}
                        onError={() => setAvatarLoaded(false)}
                    />
                }
            </div>
        </ConfigContext.Provider>
    );
});
