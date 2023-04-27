import React from 'react';
import Image, { ImageProps } from 'next/image';

export default function ResponsiveImage(props: ImageProps) {
    return (
        <Image
            sizes="100vw"
            style={{
                width: '100%',
                height: 'auto'
            }}
            {...props}
            alt={props.alt}
            src={props.src}
        />
    );
}
