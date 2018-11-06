import { EdgeBox } from './edges';

const borderClassKeys = {
    all: (_?: any, bpSuffix='') => `ba${bpSuffix}`,
    left: (_?: any, bpSuffix='') => `bl${bpSuffix}`,
    right: (_?: any, bpSuffix='') => `br${bpSuffix}`,
    top: (_?: any, bpSuffix='') => `bt${bpSuffix}`,
    bottom: (_?: any, bpSuffix='') => `bb${bpSuffix}`,
    color: (value: string) => `b--${value}`,
    radius: (value: BorderRadius, bpSuffix='') => {
        if(typeof value === 'number') {
            if(value === 100) {
                return `br-100${bpSuffix}`;
            }
            return `br${value}${bpSuffix}`;
        }
        switch(value) {
            case 'pill':
                return `br-pill${bpSuffix}`;
            case 'top':
                return `br--top${bpSuffix}`;
            case 'bottom':
                return `br--bottom${bpSuffix}`;
            case 'right':
                return `br--right${bpSuffix}`;
            case 'left':
                return `br--left${bpSuffix}`;
            default:
                return;
        }
    },
    style: (value: string, bpSuffix='') => `b--${value}${bpSuffix}`
};

export const borderClass = {
    border: (value: number | string | object, bpSuffix='') => {
        if(typeof value === 'number') {
            return `ba${value}${bpSuffix}`;
        }
        if(typeof value === 'string') {
            return borderClassKeys[value]('');
        }
        return Object.keys(value)
            .filter(key => key in borderClassKeys)
            .map(key =>  borderClassKeys[key](value[key], bpSuffix));
    }
};

export type BorderStyle ='dotted' | 'dashed' | 'solid' | 'none';
export type BorderRadius = 0 | 1 | 2 | 3 | 4 | 100
                         | 'pill' | 'top' | 'bottom' | 'right' | 'left';

export interface BorderBox extends EdgeBox {
    color?: string;
    radius?: BorderRadius;
    style?: BorderStyle;
}

export type Border = BorderBox | number;