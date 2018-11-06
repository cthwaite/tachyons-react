const enum WhitespaceType {
    Normal = 'normal',
    NoWrap = 'no-wrap',
    Pre = 'pre'
}

const whiteSpaceClass = {
    whiteSpace: (whiteSpace: WhitespaceType, bpSuffix='') => {
        switch(whiteSpace) {
            case WhitespaceType.Normal:
                return `ws-normal${bpSuffix}`;
            case WhitespaceType.NoWrap:
                return `nowrap${bpSuffix}`;
            case WhitespaceType.Pre:
                return `pre${bpSuffix}`;
        }
    }
};

interface Whitespace {
    whitespace: WhitespaceType
}

export { whiteSpaceClass, Whitespace, WhitespaceType };
