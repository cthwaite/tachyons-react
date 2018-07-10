import { buildEdgeMap, edgePropTypes } from './edges';

const marginClassKeys = buildEdgeMap('m');

const marginClass = {
    marginClass: (value, bpSuffix='') => {
        if(typeof value === 'number') {
            return `ma${value}${bpSuffix}`;
        }

        return Object.keys(value).filter(key => key in marginClassKeys).map(key => {
            return marginClassKeys[key](value[key], bpSuffix);
        });
    }
};

const marginPropType = edgePropTypes;

export { marginClass, marginPropType };
