import PropTypes from 'prop-types';

const lineHeightClass = {
    lineHeight: (value, bpSuffix='') => `lh-${value}${bpSuffix}`,
};

const lineHeightPropType = PropTypes.oneOf(['solid', 'title', 'copy']);

export { lineHeightPropType, lineHeightClass };
