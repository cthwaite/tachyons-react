import React from 'react';
import classNames from 'classnames';
import { mapAllClassNames, defaultPartition } from './components/classMaps';

/// 'Bake' classes into a component.
export const bakeClasses = (cmp, props) => {
    const [classes, _] = defaultPartition(props);
    const Tag = cmp;
    return ({props, children}) => (
        <Tag {...props} className={classes}>{children}</Tag>
    );
};

/// Map an object containing prop data to a className string.
export const mapToClassName = (propObj, extra) => {
    const [derivedClasses, _] = mapAllClassNames(propObj);
    return classNames(derivedClasses, extra);
};

/// Return a copy of the passed object with all keys except those in the passed list.
export const keysExcept = (propObj, except) => {
    const newObj = {};
    Object.keys(propObj)
        .filter(key => !except.includes(key))
        .forEach(key => {
            newObj[key] = propObj[key];
        });
    return newObj;
};