import { EdgeBox, buildEdgeShortMap, buildEdgeMap } from './edges';

const paddingClassKeys = buildEdgeMap('p');

export const paddingClass = {
    padding: (value: any, bpSuffix='') => {
        if(typeof value === 'number') {
            return `pa${value}${bpSuffix}`;
        }

        return Object.keys(value).filter(key => key in paddingClassKeys).map(key => {
            return paddingClassKeys[key](value[key], bpSuffix);
        });
    },
    ...buildEdgeShortMap('p')
};

export type Padding = EdgeBox;