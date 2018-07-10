const clearFixClass = ({floats, clearFix}) => ({ 'cf': floats || clearFix });

const clearClass = {
    clear: (value, bpSuffix='') => {
        switch(value) {
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
    }
};

export { clearFixClass, clearClass };
