
const fontSizeClass = ({fontSize}, bpSuffix) => {
    if(!fontSize) {
        return;
    }
    return `f${fontSize}${bpSuffix}`;
};

export { fontSizeClass };
