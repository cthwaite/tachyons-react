import PropTypes from 'prop-types';

const breakpointSuffix = breakpoint => {
    switch(breakpoint) {
        case 'not-small':
            return '-ns';
        case 'medium':
            return '-m';
        case 'large':
            return '-l';
        default:
            return '';
    }
};

const BREAKPOINT_NAMES = [
    'not-small',
    'medium',
    'large'
];

const breakpointPropType = {
    notSmall: PropTypes.object,
    medium: PropTypes.object,
    large: PropTypes.object
};

export {
    BREAKPOINT_NAMES,
    breakpointSuffix,
    breakpointPropType
};
