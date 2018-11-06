import { TextAlign } from './aligns';
import { whiteSpaceClass, WhitespaceType } from './whitespace';

export type FontStyle = 'italic' | 'normal';
export type LineHeight = 'solid' | 'title' | 'copy';
export type Tracking = boolean | 'tight' | 'mega';
export type FontWeight = 'normal' | 'bold' | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9;
export type TextTransform = 'capitalize' | 'lowercase' | 'uppercase' | 'none';
export type FontSize = 'headline' | 'subheadline' | 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type TextMeasure = boolean | 'wide' | 'narrow';
export type WordBreak = 'normal' | 'wrap' | 'nowrap';

/// Map a font size to the corresponding Tachyons class.
const mapFontSize = (value: FontSize, bp: BPSuffix='') => {
    if(typeof value === 'string') {
        return `f-${value}${bp}`;
    }
    return `f${value}${bp}`;
};

/// Map a font weight to the corresponding Tachyons class.
const mapFontWeight = (value: FontWeight, bp: BPSuffix='') => {
    if(typeof value === 'number') {
        return `fw${value}${bp}`;
    }
    switch(value) {
        case 'normal':
            return `normal${bp}`;
        case 'bold':
            return `b${bp}`;
        default:
            return;
    }
};

export const typographyClass = {
    fontFamily: (value: FontFamily) => value,
    fontStyle: (value: FontStyle, bp: BPSuffix='') => {
        if(value === 'italic') {
            return `i${bp}`
        };
        return `fs-normal${bp}`;
    },
    fontWeight: mapFontWeight,
    fw: mapFontWeight,

    // line-height
    lineHeight: (value: LineHeight, bp: BPSuffix='') => `lh-${value}${bp}`,

    // letter-spacing
    tracked: (value: Tracking, bp: BPSuffix='') => {
        if(typeof value === 'string') {
            return `tracked-${value}${bp}`;
        }
        return `tracked${bp}`;
    },

    // text-align
    textAlign: (value: TextAlign, bp: BPSuffix='') => {
        switch(value) {
            case TextAlign.Left:
                return `tl${bp}`;
            case TextAlign.Right:
                return `tr${bp}`;
            case TextAlign.Center:
                return `tc${bp}`;
            case TextAlign.Justify:
                return `tj${bp}`;
            default:
                return;
        }
    },

    // text-decoration
    strike: (_?: boolean, bp: BPSuffix='') => `strike-${bp}`,
    underline: (_?: boolean, bp: BPSuffix='') => `underline-${bp}`,
    noUnderline: (_?: boolean, bp: BPSuffix='') => `no-underline-${bp}`,

    // text-transform
    textTransform: (value: TextTransform, bp: BPSuffix='') => {
        switch(value) {
            case 'capitalize':
                return `ttc${bp}`;
            case 'lowercase':
                return `ttl${bp}`;
            case 'uppercase':
                return `ttu${bp}`;
            case 'none':
                return `ttn${bp}`;
            default:
                return;
        }
    },
    
    // type-scale
    fontSize: mapFontSize,
    f: mapFontSize,
    headline: (_?: any, bp: BPSuffix='') => `f-headline${bp}`,
    subheadline: (_?: any, bp: BPSuffix='') => `f-subheadline${bp}`,

    // typography.css
    measure: (measure: any, bp: BPSuffix='') => {
        if(typeof measure === 'string') {
            return `measure-${measure}${bp}`;
        }
        return `measure${bp}`;
    },
    indent: (_?: any, bp: BPSuffix='') => `indent${bp}`,
    smallCaps: (_?: any, bp: BPSuffix='') => `small-caps${bp}`,
    truncate: (_?: any, bp: BPSuffix='') => `truncate${bp}`,

    // word-break.css
    wordBreak: (value: WordBreak, bp: BPSuffix='') => `word-${value}${bp}`,

    // white-space.css
    ...whiteSpaceClass
};

export type FontFamily =
    // FONT FAMILY GROUPS //
    'sans-serif' |
    'serif' |

    'system-sans-serif' |
    'system-serif' |

    // Monospaced Typefaces (for code) //
    'code' |
    'courier' |

    // Sans-Serif Typefaces //
    'helvetica' |
    'avenir' |
    // Serif Typefaces //
    'athelas' |
    'georgia' |
    'times' |
    'bodoni' |
    'calisto' |
    'garamond' |
    'baskerville';

export interface Typography {
    fontFamily?: FontFamily;
    fontStyle?: FontStyle;
    fontWeight?: FontWeight;
    lineHeight?: LineHeight;
    tracked?: Tracking;
    textAlign?: TextAlign;

    strike?: boolean;
    underline?: boolean;
    noUnderline?: boolean;

    textTransform?:  TextTransform;

    fontSize?: FontSize;
    
    measure?: TextMeasure;
    indent?: boolean;
    smallCaps?: boolean;
    truncate?: boolean;
    
    wordBreak?: WordBreak;
    whiteSpace?: WhitespaceType;
};