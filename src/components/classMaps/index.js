import classNames from 'classnames';

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
    const mapToClasses = (obj, breakpointSuffix) => (
        Object.entries(obj)
            .map(([key, value]) => newMapper[key](value, breakpointSuffix))
    );
    const newMapper = {};
    for(const key of Object.keys(propMap)) {
        newMapper[key] = propMap[key];
    }
    /// Recursively map breakpoint properties. 'value' here is an object.
    newMapper['notSmall'] = value =>  mapToClasses(value, '-ns'),
    newMapper['medium'] = value => mapToClasses(value, '-m');
    newMapper['large'] = value => mapToClasses(value, '-l');

    return props => {
        if(!props) {
            return;
        }
        // Split out the props into those matching tachyons keys, and everything else.
        const [have, haveNot] = partition(props, newMapper);
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
const mapAllClassNames = buildPropToClassMap(PROP_TO_CLASS_DEFAULTS);
const DEFAULT_PROP_KEYS = Array.from(Object.keys(PROP_TO_CLASS_DEFAULTS));

/// Return a function transforming the passed 'props' into a string of classes and a list of restprops.
const partitionToClasses = classMapper => (props, extra) => {
    const { className } = props;
    const [derivedClasses, restProps] = classMapper(props);
    return [classNames(derivedClasses, className, extra), restProps];
};

const defaultPartition = partitionToClasses(mapAllClassNames);

export {
    buildPropToClassMap,
    mapAllClassNames,
    defaultPartition
};