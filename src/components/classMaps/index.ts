import classNames from 'classnames';

import { textAlignClass, vertAlignClass } from './aligns';
import { backgroundClass } from './background';
import { boxModelClass } from './boxModel';
import { boxShadowClass } from './boxShadow';
import { colorClass } from './color';
import { debugClass } from './debug';
import { hoverClass } from './hovers';
import { linkClass } from './link';
import { typographyClass } from './typography';

import { partition } from './utility';

interface Mapper {
    notSmall?: (value: any) => any;
    medium?: (value: any) => any;
    large?: (value: any) => any;
}


const PROP_TO_CLASS_DEFAULTS = {
    ...backgroundClass,
    ...boxShadowClass,
    ...boxModelClass,
    ...colorClass,
    ...debugClass,
    ...hoverClass,
    ...linkClass,
    ...textAlignClass,
    ...typographyClass,
    ...vertAlignClass,
};

/**
 * Build a mapper from props to Tachyons classes.
 * @param {object} propMap 
 */
const buildPropToClassMap = (propMap: object) => {
    const mapToClasses = (obj: object, breakpointSuffix?: any) => (
        Object.entries(obj)
            .map(([key, value]: any) => newMapper[key](value, breakpointSuffix))
    );
    const newMapper: Mapper = {};
    for(const key of Object.keys(propMap)) {
        newMapper[key] = propMap[key];
    }
    /// Recursively map breakpoint properties. 'value' here is an object.
    newMapper.notSmall = (value: any) =>  mapToClasses(value, '-ns');
    newMapper.medium = (value: any) => mapToClasses(value, '-m');
    newMapper.large = (value: any) => mapToClasses(value, '-l');
    
    return (props: any) => {
        if(!props) {
            return;
        }
        // Split out the props into those matching tachyons keys, and everything else.
        const [have, haveNot] = partition(props, newMapper);
        return [mapToClasses(have), haveNot];
    };
};


/**
 * Build a mapper from an object to Tachyons classes. Unlike buildPropToClassMap, the
 * mapper returned by this function does NOT filter irrelevant property keys from passed
 * objects.
 * @param {object} propMap 
 */
const buildObjToClassMap = (propMap: any) => {
    const mapToClasses = (obj: any, breakpointSuffix?: any) => (
        Object.entries(obj)
        .map(([key, value]: any) => newMapper[key](value, breakpointSuffix))
    );
    const newMapper: Mapper = {};
    for(const key of Object.keys(propMap)) {
        newMapper[key] = propMap[key];
    }
    /// Recursively map breakpoint properties. 'value' here is an object.
    newMapper.notSmall = value =>  mapToClasses(value, '-ns');
    newMapper.medium = value => mapToClasses(value, '-m');
    newMapper.large = value => mapToClasses(value, '-l');
    
    return (obj: any) => {
        if(!obj) {
            return;
        }
        return mapToClasses(obj);
    };
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
const partitionToClasses = (classMapper: any) => (props: any, extra?: any) => {
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

const mappingToPartition = (mapping: any) => {
    return partitionToClasses(buildPropToClassMap(mapping))
};

const objectToClasses = (classMapper: any) => (obj: any, extra?: any) => {
    const { className } = obj;
    delete obj.className;
    return classNames(classMapper(obj), className, extra);
};

const mappingToClasses = (mapping: any) => {
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