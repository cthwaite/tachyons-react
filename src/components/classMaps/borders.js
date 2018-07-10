import { buildEdgeMap, edgePropType } from './edges';

const borderClassKeys = buildEdgeMap('b');

const borderClass = {
    border: (value, bpSuffix='') => {
        if(typeof value === 'number') {
            return `ba${value}${bpSuffix}`;
        }

        return Object.keys(value).filter(key => key in borderClassKeys).map(key => {
            return borderClassKeys[key](value[key], bpSuffix);
        });
    }
};

const borderPropType = edgePropType;

export { borderClass, borderPropType };
