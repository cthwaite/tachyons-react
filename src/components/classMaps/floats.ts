const enum FloatType {
    Left = 'left',
    Right = 'right',
    None = 'none'
}

const floatClass = {
    float: (value: FloatType, bpSuffix: BPSuffix='') => {
        switch (value) {
            case FloatType.Left:
                return `fl${bpSuffix}`;
            case FloatType.Right:
                return `fr${bpSuffix}`;
            case FloatType.None:
                return `fn${bpSuffix}`;
            default:
                return '';
        }
    }
};

interface Float {
    float: FloatType
}

export { floatClass, Float, FloatType };
