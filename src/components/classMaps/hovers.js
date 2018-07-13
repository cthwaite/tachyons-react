const hoverClass = {
    dim: (value) => value ? 'dim' : null,
    glow: (value) => value ? 'glow' : null,
    
    hideChild: (value) => value ? 'hide-child' : null,

    underlineHover: (value) => value ? 'underline-hover' : null,

    grow: (value) => value ? 'grow' : null,
    growLarge: (value) => value ? 'grow-large' : null,

    pointer: (value) => value ? 'pointer' : null,

    shadowHover: (value) => value ? 'shadow-hover' : null,

    bgAnimate: (value) => value ? 'bg-animate' : null,
};

export { hoverClass };