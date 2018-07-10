import PropTypes from 'prop-types';
import { buildEdgeMap, edgeWidthPropType } from './edges';

const borderClassKeys = {
    ...buildEdgeMap('b'),
    color: value => `b--${value}`,
    radius: (value, bpSuffix='') => {
        if(typeof value === 'number') {
            if(value === 100) {
                return `br-100${bpSuffix}`;
            }
            return `br${value}${bpSuffix}`;
        }
        switch(value) {
            case 'pill':
                return `br-pill${bpSuffix}`;
            case 'top':
                return `br--top${bpSuffix}`;
            case 'bottom':
                return `br--bottom${bpSuffix}`;
            case 'right':
                return `br--right${bpSuffix}`;
            case 'left':
                return `br--left${bpSuffix}`;
            default:
                return;
        }
    },
    style: (value, bpSuffix='') => `b--${value}${bpSuffix}`
};

const borderClass = {
    border: (value, bpSuffix='') => {
        if(typeof value === 'number') {
            return `ba${value}${bpSuffix}`;
        }
        if(typeof value === 'string') {
            return borderClassKeys[value]('');
        }
        return Object.keys(value)
            .filter(key => key in borderClassKeys)
            .map(key =>  borderClassKeys[key](value[key], bpSuffix));
    }
};

const borderPropTypes = PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.shape({
        ...edgeWidthPropType,
        color: PropTypes.string,
        radius: PropTypes.oneOf([
            0,1,2,3,4,100,
            'pill', 'top', 'bottom', 'right', 'left'
        ]),
        style: PropTypes.oneOf([
            'dotted', 'dashed', 'solid', 'none'
        ])
    })
]);

export {
    borderClass,
    borderPropTypes
};
