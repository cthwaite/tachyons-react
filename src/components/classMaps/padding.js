import { buildEdgeMap, edgePropType } from './edges';

const paddingClassKeys = buildEdgeMap('p');

const paddingClass = ({padding}, bpSuffix='') => {
    if(!padding) {
        return;
    }
    if(typeof padding === 'number') {
        return `pa${padding}${bpSuffix}`;
    }

    return Object.keys(padding).filter(key => key in paddingClassKeys).map(key => {
        return paddingClassKeys[key](padding[key], bpSuffix);
    });
};

const paddingPropType = edgePropType;

export { paddingClass, paddingPropType };
