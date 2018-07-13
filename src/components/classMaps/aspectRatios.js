import PropTypes from 'prop-types';

const aspectRatioClass = {
    aspectRatio: (value, bpSuffix='') => ['aspect-ratio', `aspect-ratio--${value}${bpSuffix}`],
};

const aspectRatioPropType = {
    aspectRatio: PropTypes.oneOf([
        '16x9',
        '9x16',
        
        '4x3',
        '3x4',

        '6x4',
        '4x6',

        '8x5',
        '5x8',

        '7x5',
        '5x7',

        '1x1',
        
        'object',
    ])
};

export { aspectRatioClass, aspectRatioPropType };