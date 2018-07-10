import { buildEdgeMap, edgePropTypes } from './edges';

const paddingClassKeys = buildEdgeMap('p');

const paddingClass = {
    padding: (value, bpSuffix='') => {
        if(typeof value === 'number') {
            return `pa${value}${bpSuffix}`;
        }

        return Object.keys(value).filter(key => key in paddingClassKeys).map(key => {
            return paddingClassKeys[key](value[key], bpSuffix);
        });
    }
};

const paddingPropType = edgePropTypes;

export { paddingClass, paddingPropType };
