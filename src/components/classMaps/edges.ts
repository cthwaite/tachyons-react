export const EDGE_KEYS = [
    'all',
    'horizontal',
    'vertical',
    'top',
    'right',
    'bottom',
    'left',
];

export const buildEdgeMap = (prefix: string) => {
    const mapObj = {};
    const mapKeys = EDGE_KEYS.map(key => [key, `${prefix}${key[0]}`]);
    for(const [key, classKey] of mapKeys) {
        mapObj[key] = (value: any, suffix='') => `${classKey}${value}${suffix}`;
    }
    return mapObj;
};

export const buildEdgeShortMap = (prefix: string) => {
    const mapKeys = EDGE_KEYS.map(key => [`${prefix}${key[0]}`, `${prefix}${key[0]}`]);
    const mapObj = {};
    for(const [key, classKey] of mapKeys) {
        mapObj[key] = (value: any, suffix='') => `${classKey}${value}${suffix}`;
    }
    return mapObj;
}

export interface EdgeBox {
    all?: number;
    horizontal?: number;
    vertical?: number;
    top?: number;
    right?: number;
    bottom?: number;
    left?: number;
};

export type Edges = number | EdgeBox;