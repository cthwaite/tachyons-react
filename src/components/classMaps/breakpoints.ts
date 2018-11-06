

enum BreakpointType {
    NotSmall = 'not-small',
    Medium = 'medium',
    Large = 'large',
    None = ''
}

const breakpointSuffix = (breakpoint?: Breakpoint) => {
    switch(breakpoint) {
        case BreakpointType.NotSmall:
            return '-ns';
        case BreakpointType.Medium:
            return '-m';
        case BreakpointType.Large:
            return '-l';
        case BreakpointType.None:
        default:
            return '';
    }
};

interface Breakpoint {
    notSmall?: object,
    medium?: object,
    large?: object
}

export {
    BreakpointType,
    Breakpoint,
    breakpointSuffix
};
