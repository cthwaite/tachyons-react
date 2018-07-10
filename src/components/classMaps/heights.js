import PropTypes from 'prop-types';

const heightClass = {
    height: (value, bpSuffix='') => {
        if(typeof value === 'number') {
            return `h${value}${bpSuffix}`;
        }
        // not-percentage: 'auto' or 'inherit'
        if(value.length > 3) {
            return `h-${value}${bpSuffix}`;
        }
        // percentage
        return `h-${value.slice(0, -1)}${bpSuffix}`;
    },
    fullHeight: (_, bpSuffix='') => `min-h-100${bpSuffix}`,

    screenHeight: (value, bpSuffix='') => {
        // percentage
        return `h-${value.slice(0, -1)}${bpSuffix}`;
    },
    fullScreenHeight: (_, bpSuffix='') => `min-vh-100${bpSuffix}`,
};

const heightPropType = {
    height: PropTypes.oneOf([
        1,2,3,4,5,
        '25%', '50%', '75%', '100%'
    ]),
    fullHeight: PropTypes.bool,
    screenHeight: PropTypes.oneOf(['25%', '50%', '75%', '100%']),
    fullScreenHeight: PropTypes.bool,
}

export { heightClass, heightPropType };