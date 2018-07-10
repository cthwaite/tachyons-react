const outlineClass = {
    outline: (_, bpSuffix='') => `outline${bpSuffix}`,
    outlineTransparent: (_, bpSuffix='') => `outline-transparent${bpSuffix}`,
    noOutline: (_, bpSuffix='') => `outline-0${bpSuffix}`,
};

export { outlineClass };
