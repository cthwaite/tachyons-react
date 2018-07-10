import PropTypes from 'prop-types';

const boxShadowClass = {
    boxShadow: (value, bpSuffix='') => `shadow-${value}${bpSuffix}`
};

const boxShadowPropType = PropTypes.oneOf([1,2,3,4,5]);

export { boxShadowClass, boxShadowPropType };