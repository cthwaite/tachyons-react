const backgroundClass = {
    backgroundPosition: (value: BackgroundPosition, bpSuffix: BPSuffix='') => `bg-${value}${bpSuffix}`,
    backgroundSize: (value: BackgroundSize, bpSuffix: BPSuffix='') => `${value}${bpSuffix}`,
};

enum BackgroundSize {
    Cover = 'cover',
    Contain = 'contain'
}

enum BackgroundPosition {
    Center = 'center',
    Top = 'top',
    Right = 'right',
    Left = 'left',
    Bottom = 'bottom',
}

interface Background {
    size?: BackgroundSize;
    position?: BackgroundPosition;
}

export {
    backgroundClass,
    Background,
    BackgroundPosition,
    BackgroundSize
};