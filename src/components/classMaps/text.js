const textClass = {
    truncate: () => 'truncate',
    indent: () => 'indent',
    smallCaps: () => 'small-caps'
};

const measureClass = {
    measure: measure => measure === 'normal' ? `measure-${measure}` : 'measure',
};

export { textClass, measureClass };