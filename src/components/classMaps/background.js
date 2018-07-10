import PropTypes from 'prop-types';

const backgroundClass = {
    backgroundPosition: (value, bpSuffix='') => `bg-${value}${bpSuffix}`,
    backgroundSize: (value, bpSuffix='') => `${value}${bpSuffix}`,
};

const backgroundSizePropType = PropTypes.oneOf([
    'cover', 'contain'
]);

const backgroundPositionPropType = PropTypes.oneOf([
    'center', 'top', 'right', 'left', 'bottom'
]);

export {
    backgroundClass,
    backgroundPositionPropType,
    backgroundSizePropType
};