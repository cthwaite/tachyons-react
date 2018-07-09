import PropTypes from 'prop-types';


const colorClass = ({color}) => color ? `${color}` : null;
const bgColorClass = ({bgColor}) => bgColor ? `bg-${bgColor}` : null;

const colorPropType = PropTypes.string;

export { colorClass, bgColorClass, colorPropType };
