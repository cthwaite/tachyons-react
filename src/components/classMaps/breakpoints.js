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

const breakpointPropType = PropTypes.oneOf(BREAKPOINT_NAMES);

export {
    breakpointSuffix,
    breakpointPropType
};
