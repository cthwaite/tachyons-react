enum TextAlign {
    Left = 'left',
    Right = 'right',
    Center = 'center',
    Justify = 'justify',
}


const textAlignClass = {
    textAlign: (value: TextAlign, bpSuffix='') => {
        switch(value) {
            case TextAlign.Left:
                return `tl${bpSuffix}`;
            case TextAlign.Right:
                return `tr${bpSuffix}`;
            case TextAlign.Center:
                return `tc${bpSuffix}`;
            case TextAlign.Justify:
                return `tj${bpSuffix}`;
        }
    }
};


enum VAlign {
    Base = 'base',
    Mid = 'mid',
    Top = 'top',
    Bottom = 'bottom'
}

const vertAlignClass = {
    vertAlign: (value: VAlign, bpSuffix: BPSuffix='') => {
        switch(value) {
            case VAlign.Base:
                return `v-base${bpSuffix}`;
            case VAlign.Mid:
                return `v-mid${bpSuffix}`;
            case VAlign.Top:
                return `v-top${bpSuffix}`;
            case VAlign.Bottom:
                return `v-btm${bpSuffix}`;
        }
    }
};

export {
    textAlignClass, TextAlign,
    vertAlignClass, VAlign
};
