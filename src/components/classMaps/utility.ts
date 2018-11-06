/**
 * Split an object into two new objects based on a list of property keys.
 * 
 * @param obj 
 * @param splitter 
 */
const partition = (obj: object, splitter: object): [object, object] => {
    const have = {};
    const haveNot = {};
    Object.keys(obj)
          .forEach(key => {
            if(splitter.hasOwnProperty(key)) {
                have[key] = obj[key];
            } else {
                haveNot[key] = obj[key];
            }
        });
    return [have, haveNot];
};


/**
 * Remove properties from an object by key, at the same time assigning them to
 * a new object.
 * 
 * @param obj 
 * @param keys 
 */
const takeKeys = (obj: any, keys: string[]): object => {
    const ret = {};
    Object.keys(obj)
        .filter(key => keys.hasOwnProperty(key))
        .forEach(key => {
            ret[key] = obj[key];
            delete obj[key];
        });
    return ret;
};

export {
    partition,
    takeKeys
}; 


/**
 * Return a copy of the passed object with all keys except those in the passed
 * list.
 * 
 * @param propObj 
 * @param except 
 */
export const keysExcept = (propObj: object, except: any): object => {
    const newObj = {};
    Object.keys(propObj)
        .filter(key => !except.includes(key))
        .forEach(key => {
            newObj[key] = propObj[key];
        });
    return newObj;
};