import PropTypes from 'prop-types';

const textAlignClass = ({textAlign}, bpSuffix='') => {
    switch(textAlign) {
        case 'left':
            return `tl${bpSuffix}`;
        case 'right':
            return `tr${bpSuffix}`;
        case 'center':
            return `tc${bpSuffix}`;
        case 'justify':
            return `tj${bpSuffix}`;
        default:
            return;
    }
};

const textAlignPropType = PropTypes.oneOf([
    'left', 'right', 'center', 'justify'
]);


const vertAlignClass = ({vertAlign}, bpSuffix='') => {
    switch(vertAlign) {
        case 'base':
            return `v-base${bpSuffix}`;
        case 'mid':
            return `v-mid${bpSuffix}`;
        case 'top':
            return `v-top${bpSuffix}`;
        case 'bottom':
            return `v-btm${bpSuffix}`;
        default:
            return;
    }
};

const vertAlignPropType = PropTypes.oneOf([
    'base', 'mid', 'top', 'bottom'
]);

export {
    textAlignClass, textAlignPropType,
    vertAlignClass, vertAlignPropType
};
