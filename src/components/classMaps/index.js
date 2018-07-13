import classNames from 'classnames';

import { aspectRatioClass } from './aspectRatios';
import { backgroundClass } from './background';
import { borderClass } from './border';
import { boxShadowClass } from './boxShadow';
import { clearClass } from './clear';
import { colorClass } from './colors';
import { debugClass } from './debug';
import { displayClass } from './display';
import { flexClass } from './flexbox';
import { floatClass } from './floats';
import { formsClass } from './forms';
import { heightClass } from './heights';
import { hoverClass } from './hovers';
import { linkClass } from './link';
import { listsClass } from './lists';
import { marginClass } from './margin';
import { opacityClass } from './opacity';
import { outlineClass } from './outlines';
import { paddingClass } from './padding';
import { typographyClass } from './typography';
import { vertAlignClass } from './aligns';
import { widthClass } from './widths';
import { zIndexClass } from './zIndex';

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
    newMapper['notSmall'] = value =>  mapToClasses(value, '-ns');
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

const PROP_TO_CLASS_DEFAULTS = {
    ...vertAlignClass,
    ...aspectRatioClass,
    ...backgroundClass,
    ...borderClass,
    ...boxShadowClass,
    ...clearClass,
    ...colorClass,
    ...debugClass,
    ...displayClass,
    ...flexClass,
    ...floatClass,
    ...formsClass,
    ...heightClass,
    ...hoverClass,
    ...linkClass,
    ...listsClass,
    ...marginClass,
    ...opacityClass,
    ...outlineClass,
    ...paddingClass,
    ...typographyClass,
    ...vertAlignClass,
    ...widthClass,
    ...zIndexClass,
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

const mappingToPartition = mapping => {
    return partitionToClasses(buildPropToClassMap(mapping))
};

export {
    PROP_TO_CLASS_DEFAULTS,
    DEFAULT_PROP_KEYS,
    
    buildPropToClassMap,
    mapAllClassNames,
    defaultPartition,
    mappingToPartition
};