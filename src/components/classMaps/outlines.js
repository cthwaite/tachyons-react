const outlineClass = ({outline, outlineTransparent, noOutline}, bpSuffix='') => {
    // Simpler to just enforce an ordering than run a convoluted check...
    if(outline) {
        return `outline${bpSuffix}`;
    }
    else if(outlineTransparent) {
        return `outline-transparent${bpSuffix}`;
    }
    else if(noOutline) {
        return `outline-0${bpSuffix}`;
    }    
};

export { outlineClass };
