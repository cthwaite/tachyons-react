import PropTypes from 'prop-types';

const opacityClass = {
    opacity: value => `o-${value}`
};

const opacityPropType = PropTypes.oneOf([
    100, 90, 80, 70, 60, 50, 40, 30, 20, 10,
    '05', '025', 0
]);

export { opacityClass, opacityPropType };