import PropTypes from 'prop-types';

const floatClass = {
    floats: (value, bpSuffix='') => {
        switch (value) {
            case 'left':
                return `fl${bpSuffix}`;
            case 'right':
                return `fr${bpSuffix}`;
            case 'none':
                return `fn${bpSuffix}`;
            default:
                return '';
        }
    }
};

const floatPropType = PropTypes.oneOf(['left', 'right', 'none']);

export { floatClass, floatPropType };
