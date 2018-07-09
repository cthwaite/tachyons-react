import { buildEdgeMap, edgePropType } from './edges';

const borderClassKeys = buildEdgeMap('b');

const borderClass = ({border}, bpSuffix='') => {
    if(!border) {
        return;
    }
    if(typeof border === 'number') {
        return `ba${border}${bpSuffix}`;
    }

    return Object.keys(border).filter(key => key in borderClassKeys).map(key => {
        return borderClassKeys[key](border[key], bpSuffix);
    });
};

const borderPropType = edgePropType;

export { borderClass, borderPropType };
