
/// Create two new objects based on a list of 'splitter' keys.
const partition = (obj, splitter) => {
    const have = {};
    const haveNot = {};
    Object.keys(obj)
        .forEach(k => {
            if(splitter.hasOwnProperty(k)) {
                have[k] = obj[k];
            }
            else {
                haveNot[k] = obj[k];
            }
        });
    return [have, haveNot];
};

/// Remove properties from an object by key, assigning them to a new object.
const takeKeys = (obj, keys) => {
    const ret = {};
    Object.keys(obj)
        .filter(k => keys.hasOwnProperty(k))
        .forEach(k => {
            ret[k] = obj[k];
            delete obj[k];
        });
    return ret;
};

export {
    partition,
    takeKeys
}; 