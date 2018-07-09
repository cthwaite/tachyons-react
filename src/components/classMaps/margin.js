import { buildEdgeMap, edgePropType } from './edges';

const marginClassKeys = buildEdgeMap('m');

const marginClass = ({margin}, bpSuffix='') => {
    if(!margin) {
        return;
    }
    if(typeof margin === 'number') {
        return `ma${margin}${bpSuffix}`;
    }

    return Object.keys(margin).filter(key => key in marginClassKeys).map(key => {
        return marginClassKeys[key](margin[key], bpSuffix);
    });
};

const marginPropType = edgePropType;

export { marginClass, marginPropType };
