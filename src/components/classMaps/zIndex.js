import PropTypes from 'prop-types';

const zIndexClass = {
    z: value => `z-${value}`
};

const zIndexPropType = PropTypes.oneOf([
    0,1,2,3,4,5, 999, 9999,
    'max', 'inherit', 'initial', 'unset'
])
export { zIndexClass, zIndexPropType };