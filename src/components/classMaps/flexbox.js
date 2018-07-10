
const flexClassKeys = {
    align: (value, bpSuffix='') => `items-${value}${bpSuffix}`,
    self: (value, bpSuffix='') => `self-${value}${bpSuffix}`,
    justify: (value, bpSuffix='') => `justify-${value}${bpSuffix}`,
    content: (value, bpSuffix='') => `content-${value}${bpSuffix}`,
    layout: (value, bpSuffix='') => {
        switch(value) {
            case 'auto':
                return `flex-auto${bpSuffix}`;
            case 'inline':
                return `inline-flex${bpSuffix}`;
            case 'none':
                return `flex-none${bpSuffix}`;
            case 'column':
                return `flex-column${bpSuffix}`;
            case 'row':
                return `flex-row${bpSuffix}`;
            case 'wrap':
                return `flex-wrap${bpSuffix}`;
            case 'nowrap':
                return `flex-nowrap${bpSuffix}`;
            case 'wrap-reverse':
                return `flex-wrap-reverse${bpSuffix}`;
            case 'column-reverse':
                return `flex-column-reverse${bpSuffix}`;
            case 'row-reverse':
                return `flex-row-reverse${bpSuffix}`;
            default:
                return;
        }
    }
}

const flexClass = {
    flex: (data, bpSuffix='') => {
        if(typeof data !== 'object') {
            return ['flex', flexClassKeys.layout(data, bpSuffix)];
        }
        return ['flex', ...Object.entries(data)
        .filter(([key, value]) => key in flexClassKeys)
        .map(([key, value]) => {
            return flexClassKeys[key](data[value], bpSuffix);
        })];
    },
};

export { flexClass };