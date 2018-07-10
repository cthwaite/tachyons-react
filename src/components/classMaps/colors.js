import PropTypes from 'prop-types';

const colorClass = {
    color: value => value ? `${value}` : null,
    bgColor: value => value ? `bg-${value}` : null,
};

const colorPropType = PropTypes.string;

export { colorClass, colorPropType };
