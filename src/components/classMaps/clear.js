const clearFixClass = ({floats, clearFix}) => ({ 'cf': floats || clearFix });

const clearClass = ({clear}, bpSuffix='') => {
    switch(clear) {
        case 'left':
            return `cl${bpSuffix}`;
        case 'right':
            return `cr${bpSuffix}`;
        case 'both':
            return `cb${bpSuffix}`;
        case 'none':
            return `cn${bpSuffix}`;
        default:
            return;
    }
};

export { clearFixClass, clearClass };
