enum ClearType {
    Left = 'left',
    Right = 'right',
    Both = 'both',
    None = 'none',
}

const clearFixClass = ({floats, clearFix}: any) => ({ 'cf': floats || clearFix });

const clearClass = {
    clear: (value: ClearType, bpSuffix: BPSuffix='') => {
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

interface Clear {
    clear: ClearType;
}

export { clearFixClass, clearClass, Clear };
