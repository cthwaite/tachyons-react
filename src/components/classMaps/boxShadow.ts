type BoxShadowType = 1 | 2 | 3 | 4 | 5;

const boxShadowClass = {
    boxShadow: (value: BoxShadowType, bpSuffix: BPSuffix='') => `shadow-${value}${bpSuffix}`
};

interface BoxShadow {
    boxShadow: BoxShadowType;
}

export { boxShadowClass, BoxShadow, BoxShadowType };