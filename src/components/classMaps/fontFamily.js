import PropTypes from 'prop-types';

const fontFamilyClass = ({font}) => font;
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
export { fontFamilyClass, fontFamilyPropType };
