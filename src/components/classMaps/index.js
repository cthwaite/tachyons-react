import { borderClass } from './borders';
import { clearFixClass } from './clearFix';
import { colorClass, bgColorClass } from './colors';
import { floatClass } from './floats';
import { fontFamilyClass } from './fontFamily';
import { fontSizeClass } from './fontSize';
import { marginClass } from './margin';
import { outlineClass } from './outlines';
import { paddingClass } from './padding';
import { textAlignClass, vertAlignClass } from './aligns';
import { widthClass, maxWidthClass } from './widths';
import { lineHeightClass } from './lineHeight';

/// Build a mapper from props to tachyons classes.
const buildPropToClassMap = unravelers => breakpointSuffix => context => {
    if(!context) {
        return [];
    }
    return unravelers.map(mapFunc => mapFunc(context, breakpointSuffix));
};

const PROP_TO_CLASS_DEFAULTS = [
    bgColorClass,
    borderClass,
    clearFixClass,
    colorClass,
    floatClass,
    fontFamilyClass,
    fontSizeClass,
    lineHeightClass,
    marginClass,
    maxWidthClass,
    outlineClass,
    paddingClass,
    textAlignClass,
    vertAlignClass,
    widthClass,
];

/// Default mapping between props and tachyons classes, using PROP_TO_CLASS_DEFAULTS.
const defaultPropToClassMap = buildPropToClassMap(PROP_TO_CLASS_DEFAULTS);

const buildBreakpointClassMapper = propToClass => props => {
        const {
            notSmall,
            medium,
            large,
        } = props;

        return [
            propToClass('')(props),
            propToClass('-ns')(notSmall),
            propToClass('-l')(large),
            propToClass('-m')(medium),
        ];
};

const mapClassNames = buildBreakpointClassMapper(defaultPropToClassMap);

export {
    buildPropToClassMap,
    defaultPropToClassMap,
    buildBreakpointClassMapper,
    mapClassNames
};
