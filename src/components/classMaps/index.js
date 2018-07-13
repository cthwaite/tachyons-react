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


/**
 * Build a mapper from props to Tachyons classes.
 * @param {object} propMap 
 */
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
    ...vertAlignClass,
    ...widthClass,
    ...zIndexClass,
};

/// Default mapping between props and tachyons classes, using PROP_TO_CLASS_DEFAULTS.
const mapAllClassNames = buildPropToClassMap(PROP_TO_CLASS_DEFAULTS);
const DEFAULT_PROP_KEYS = Array.from(Object.keys(PROP_TO_CLASS_DEFAULTS));

/// Return a function transforming the passed 'props' into a string of classes and a list of restprops.

/**
 * Produce a prop-to-class mapper using the passed class mapper.
 * @param {function} classMapper - The class mapping function to use.
 * @returns {function} A function that maps React properties to a className string.
 */
const partitionToClasses = classMapper => (props, extra) => {
    const { className } = props;
    const [derivedClasses, restProps] = classMapper(props);
    return [classNames(derivedClasses, className, extra), restProps];
};

/**
 * Map React props to Tachyons classes.
 * @param {object} props - React properties.
 * @param {*} extra - Extra class names, as a string, array, or object to be passed to
 * the classNames function.
 * @returns {Array} An array containing two elements: a className string, and an
 * object containing all non-class props.
 */
const defaultPartition = partitionToClasses(mapAllClassNames);

const mappingToPartition = mapping => {
    return partitionToClasses(buildPropToClassMap(mapping))
};

const objectToClasses = classMapper => (obj, extra) => {
    const { className } = obj;
    delete obj['className'];
    return classNames(classMapper(obj), className, extra);
};

const mappingToClasses = mapping => {
    return objectToClasses(buildObjToClassMap(mapping))
};

export {
    PROP_TO_CLASS_DEFAULTS,
    DEFAULT_PROP_KEYS,
    
    buildPropToClassMap,
    mapAllClassNames,
    defaultPartition,
    mappingToPartition,

    objectToClasses,
    mappingToClasses,
};