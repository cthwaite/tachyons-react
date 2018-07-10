import PropTypes from 'prop-types';

const typographyClass = {
    // font-family
    fontFamily: value => value,
    fontStyle: (value, bpSuffix='') => value === 'italic' ? `i${bpSuffix}` : `fs-normal${bpSuffix}`,
    fontWeight: (value, bpSuffix='') => {
        if(typeof value === 'number') {
            return `fw${value}${bpSuffix}`;
        }
        switch(value) {
            case 'normal':
                return `normal${bpSuffix}`;
            case 'bold':
                return `b${bpSuffix}`;
            default:
                return;
        }
    },

    // line-height
    lineHeight: (value, bpSuffix='') => `lh-${value}${bpSuffix}`,

    // letter-spacing
    tracked: (value, bpSuffix='') => {
        if(typeof value === 'string') {
            return `tracked-${value}${bpSuffix}`;
        }
        return `tracked${bpSuffix}`;
    },

    // text-align
    textAlign: (value, bpSuffix='') => {
        switch(value) {
            case 'left':
                return `tl${bpSuffix}`;
            case 'right':
                return `tr${bpSuffix}`;
            case 'center':
                return `tc${bpSuffix}`;
            case 'justify':
                return `tj${bpSuffix}`;
            default:
                return;
        }
    },

    // text-decoration
    strike: (_, bpSuffix='') => `strike-${bpSuffix}`,
    underline: (_, bpSuffix='') => `underline-${bpSuffix}`,
    noUnderline: (_, bpSuffix='') => `no-underline-${bpSuffix}`,

    // text-transform
    textTransform: (value, bpSuffix='') => {
        switch(value) {
            case 'capitalize':
                return `ttc${bpSuffix}`;
            case 'lowercase':
                return `ttl${bpSuffix}`;
            case 'uppercase':
                return `ttu${bpSuffix}`;
            case 'none':
                return `ttn${bpSuffix}`;
            default:
                return;
        }
    },
    
    // type-scale
    fontSize: (value, bpSuffix='') => {
        console.log('fontSize: ', value);
        if(typeof value === 'string') {
            return `f-${value}${bpSuffix}`;
        }
        return `f${value}${bpSuffix}`;
    },

    // typography.css
    measure: (measure, bpSuffix='') => {
        if(typeof measure === 'string') {
            return `measure-${measure}${bpSuffix}`;
        }
        return `measure${bpSuffix}`;
    },
    indent: (_, bpSuffix='') => `indent${bpSuffix}`,
    smallCaps: (_, bpSuffix='') => `small-caps${bpSuffix}`,
    truncate: (_, bpSuffix='') => `truncate${bpSuffix}`,

    // word-break.css
    wordBreak: (value, bpSuffix='') => `word-${value}${bpSuffix}`,

    // white-space.css
    whiteSpace: (value, bpSuffix='') => {
        switch(value) {
            case 'normal':
                return `ws-normal${bpSuffix}`;
            case 'no-wrap':
                return `nowrap${bpSuffix}`;
            case 'pre':
                return `pre${bpSuffix}`;
            default:
                return;
        }
    }
};

const fontFamilyPropType = PropTypes.oneOf([
    /* FONT FAMILY GROUPS */
    'sans-serif',
    'serif',    
    'system-sans-serif',
    'system-serif',

    /* Monospaced Typefaces (for code) */
    'code',
    'courier',
    /* Sans-Serif Typefaces */
    'helvetica',
    'avenir',
    /* Serif Typefaces */
    'athelas',
    'georgia',
    'times',
    'bodoni',
    'calisto',
    'garamond',
    'baskerville'
]);

const typographyPropType = {
    fontFamily: fontFamilyPropType,
    fontStyle: PropTypes.oneOf(['italic', 'normal']),
    fontWeight: PropTypes.oneOf([
        1,2,3,4,5,6,7,8,9,
        'normal', 'bold',
    ]),

    lineHeight: PropTypes.oneOf(['solid', 'title', 'copy']),

    tracked: PropTypes.oneOfType([
        PropTypes.bool,
        PropTypes.oneOf('tight', 'mega'),
    ]),

    textAlign: PropTypes.oneOf([
        'left', 'right', 'center', 'justify'
    ]),

    strike: PropTypes.bool,
    underline: PropTypes.bool,
    noUnderline: PropTypes.bool,

    textTransform: PropTypes.oneOf([
        'capitalize',
        'lowercase',
        'uppercase',
        'none',
    ]),

    fontSize: PropTypes.oneOf([1,2,3,4,5,6,7, 'headline', 'subheadline']),
    
    measure: PropTypes.oneOfType([PropTypes.bool, PropTypes.oneOf(['wide', 'narrow'])]),
    indent: PropTypes.bool,
    smallCaps: PropTypes.bool,
    truncate: PropTypes.bool,
    
    wordBreak: PropTypes.oneOf(['normal', 'wrap', 'nowrap']),
    whiteSpace: PropTypes.oneOf(['normal', 'no-wrap', 'pre']),
};

export { typographyClass, typographyPropType };