const listClass = {
    list: (value?: boolean) => value ? 'list' : null
};

interface List {
    list: boolean
};

export { listClass, List };