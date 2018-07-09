import PropTypes from 'prop-types';

const whiteSpaceClass = ({ whiteSpace }, bpSuffix='') => {
    switch(whiteSpace) {
        case 'normal':
            return `ws-normal${bpSuffix}`;
        case 'no-wrap':
            return `nowrap${bpSuffix}`;
        case 'pre':
            return `pre${bpSuffix}`;
        default:
            return;
    }
};

const whiteSpacePropType = PropTypes.oneOf(['normal', 'no-wrap', 'pre']);

export { whiteSpaceClass, whiteSpacePropType };
