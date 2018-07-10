import PropTypes from 'prop-types';

const debugClass = {
    debug: value => {
        if(typeof value === 'string') {
            return `debug-${value}`;
        }
        return 'debug';
    },
    debugGrid: value => {
        if(typeof value === 'string') {
            return `debug-grid-${value}`;
        }
        return 'debug-grid';
    }
};

const debugPropType = {
    debug: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['black', 'white']),
    ]),
    debugGrid: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf(['16', '8-solid', '16-solid'])
    ])
};

export { debugClass, debugPropType };