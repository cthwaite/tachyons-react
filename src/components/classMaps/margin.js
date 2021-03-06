import { buildEdgeMap, buildEdgeShortMap, edgePropTypes } from './edges';

const marginClassKeys = buildEdgeMap('m');

const marginClass = {
    margin: (value, bpSuffix='') => {
        if(typeof value === 'number') {
            return `ma${value}${bpSuffix}`;
        }

        return Object.keys(value).filter(key => key in marginClassKeys).map(key => {
            return marginClassKeys[key](value[key], bpSuffix);
        });
    },
    ...buildEdgeShortMap('m')
};

const marginPropType = edgePropTypes;

export { marginClass, marginPropType };