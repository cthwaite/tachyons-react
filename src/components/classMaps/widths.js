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

const widthClass = {
    width: (value, bpSuffix='') => {
        if(typeof value === 'number') {
            return `w${value}${bpSuffix}`;
        }
        else if(typeof value === 'string') {
            if(NAMED_SIZES.includes(value)) {
                return `w-${value}${bpSuffix}`;
            } else {
                return `w-${value.slice(0, -1)}${bpSuffix}`;
            }
        }
    },
    maxWidth: (value, bpSuffix='') => {
        if(typeof value === 'number') {
            return `mw${value}${bpSuffix}`;
        }
        else if(value === '100%') {
            return `mw-100${bpSuffix}`;
        }
        else if(value === 'none') {
            return `mw-none${bpSuffix}`;
        }
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
    maxWidthPropType,
};
