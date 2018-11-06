import { buildEdgeMap, buildEdgeShortMap, Edges } from './edges';

const marginClassKeys = buildEdgeMap('m');

const marginClass = {
    margin: (value: any, bpSuffix='') => {
        if(typeof value === 'number') {
            return `ma${value}${bpSuffix}`;
        }

        return Object.keys(value).filter(key => key in marginClassKeys).map(key => {
            return marginClassKeys[key](value[key], bpSuffix);
        });
    },
    ...buildEdgeShortMap('m')
};

type Margin = Edges;

export { marginClass, Margin };