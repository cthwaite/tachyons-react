import PropTypes from 'prop-types';

const PERCENT_SIZES = [
    '10%',
    '20%',
    '25%',
    '30%',
    '33%',
    '34%',
    '40%',
    '50%',
    '60%',
    '70%',
    '75%',
    '80%',
    '90%',
    '100%',
];

const NAMED_SIZES = [
    'third',
    'two-thirds',
    'auto'
];

const widthClass = ({width}={}, bpSuffix='') => {
    if(typeof width === 'number') {
        return `w${width}${bpSuffix}`;
    }
    else if(typeof width === 'string') {
        if(NAMED_SIZES.includes(width)) {
            return `w-${width}${bpSuffix}`;
        } else {
            return `w-${width.slice(0, -1)}${bpSuffix}`;
        }
    }
};

const maxWidthClass = ({maxWidth}={}, bpSuffix='') => {
    if(typeof maxWidth === 'number') {
        return `mw${maxWidth}${bpSuffix}`;
    }
    else if(maxWidth === '100%') {
        return `mw-100${bpSuffix}`;
    }
    else if(maxWidth === 'none') {
        return `mw-none${bpSuffix}`;
    }
};

const widthPropType = PropTypes.oneOfType([
    PropTypes.oneOf([1,2,3,4,5]),
    PropTypes.oneOf(PERCENT_SIZES),
    PropTypes.oneOf(NAMED_SIZES)
]);

const maxWidthPropType = PropTypes.oneOfType([
    PropTypes.oneOf([1,2,3,4,5,6,7,8,9]),
    PropTypes.oneOf(['none', '100%']),
]);

export {
    NAMED_SIZES, PERCENT_SIZES,
    widthClass,
    widthPropType,

    maxWidthClass,
    maxWidthPropType,
};
