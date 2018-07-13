import PropTypes from 'prop-types';

const listsClass = {
    list: value => value ? 'list' : null
};

const listsPropType = {
    list: PropTypes.bool
};

export { listsClass, listsPropType };