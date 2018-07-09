const textClass = ({truncate, indent, smallCaps}) => {
    return {
        'truncate': truncate,
        'indent': indent,
        'small-caps': smallCaps,
    };
};

const measureClass = ({measure}) => {
    return (measure || measure === 'normal') ? `measure-${measure}` : 'measure';
};

export { textClass, measureClass };