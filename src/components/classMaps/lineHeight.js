import PropTypes from 'prop-types';

const lineHeightClass = ({lineHeight}, bpSuffix='') => lineHeight ? `lh-${lineHeight}${bpSuffix}` : null;

const lineHeightPropType = PropTypes.oneOf(['solid', 'title', 'copy']);

export { lineHeightPropType, lineHeightClass };
