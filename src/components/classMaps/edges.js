import PropTypes from 'prop-types';

export const EDGE_KEYS = [
    'all',
    'horizontal',
    'vertical',
    'top',
    'right',
    'bottom',
    'left',
];

export const buildEdgeMap = prefix => {
    const mapObj = {};
    const mapKeys = EDGE_KEYS.map(key => [key, `${prefix}${key[0]}`]);
    for(const [key, classKey] of mapKeys) {
        mapObj[key] = (value, suffix) => `${classKey}${value}${suffix}`;
    }
    return mapObj;
};

export const edgeWidthPropType = {
    all: PropTypes.number,
    horizontal: PropTypes.number,
    vertical: PropTypes.number,
    top: PropTypes.number,
    right: PropTypes.number,
    bottom: PropTypes.number,
    left: PropTypes.number,
};

export const edgePropTypes = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape(edgeWidthPropType),
]);