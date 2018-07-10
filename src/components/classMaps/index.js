import { borderClass } from './borders';
import { clearFixClass, clearClass } from './clear';
import { colorClass } from './colors';
import { floatClass } from './floats';
import { fontFamilyClass } from './fontFamily';
import { fontSizeClass } from './fontSize';
import { marginClass } from './margin';
import { outlineClass } from './outlines';
import { paddingClass } from './padding';
import { textAlignClass, vertAlignClass } from './aligns';
import { widthClass, maxWidthClass } from './widths';
import { textClass, measureClass } from './text';
import { lineHeightClass } from './lineHeight';

import { partition } from './utility';

/// Build a mapper from props to tachyons classes.
const buildPropToClassMap = propMap => {
    const newMapper = {};
    for(const key of Object.keys(propMap)) {
        newMapper[key] = propMap[key];
    }
    const mapToClasses = (obj, breakpointSuffix) => (
        Object.entries(obj)
            .map(([key, value]) => newMapper[key](value, breakpointSuffix))
    );
    /// Recursively map breakpoint properties.
    newMapper['notSmall'] = value => mapToClasses(value, '-ns');
    newMapper['medium'] = value => mapToClasses(value, '-m');
    newMapper['large'] = value => mapToClasses(value, '-l');

    return context => {
        if(!context) {
            return;
        }

        const [have, haveNot] = partition(context, newMapper);
        return [mapToClasses(have), haveNot];
    };
};

const debugClass = {
    debug: () => 'debug'
};

const PROP_TO_CLASS_DEFAULTS = {
    ...borderClass,
    ...clearClass,
    ...clearFixClass,
    ...colorClass,
    ...debugClass,
    ...floatClass,
    ...fontFamilyClass,
    ...fontSizeClass,
    ...lineHeightClass,
    ...marginClass,
    ...maxWidthClass,
    ...outlineClass,
    ...paddingClass,
    ...textAlignClass,
    ...textClass,
    ...measureClass,
    ...vertAlignClass,
    ...widthClass,
};

/// Default mapping between props and tachyons classes, using PROP_TO_CLASS_DEFAULTS.
const mapClassNames = buildPropToClassMap(PROP_TO_CLASS_DEFAULTS);

const DEFAULT_PROP_KEYS = Array.from(Object.keys(PROP_TO_CLASS_DEFAULTS));
export const splitProps = props => partition(props, DEFAULT_PROP_KEYS);

export {
    buildPropToClassMap,
    mapClassNames
};
