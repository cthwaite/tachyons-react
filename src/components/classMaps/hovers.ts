const hoverClass = {
    dim: (value?: boolean) => value ? 'dim' : null,
    glow: (value?: boolean) => value ? 'glow' : null,
    
    hideChild: (value?: boolean) => value ? 'hide-child' : null,

    underlineHover: (value?: boolean) => value ? 'underline-hover' : null,

    grow: (value?: boolean) => value ? 'grow' : null,
    growLarge: (value?: boolean) => value ? 'grow-large' : null,

    pointer: (value?: boolean) => value ? 'pointer' : null,

    shadowHover: (value?: boolean) => value ? 'shadow-hover' : null,

    bgAnimate: (value?: boolean) => value ? 'bg-animate' : null,
};

interface Hover {
    dim?: boolean;
    glow?: boolean;
    hideChild?: boolean;
    underlineHover?: boolean;
    grow?: boolean;
    growLarge?: boolean;
    pointer?: boolean;
    shadowHover?: boolean;
    bgAnimate?: boolean;
}

export { hoverClass, Hover };