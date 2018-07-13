import PropTypes from 'prop-types';

const linkClass = {
    link: value => value ? `link` : null
};

const linkPropType = {
    link: PropTypes.bool
};

export { linkClass, linkPropType }