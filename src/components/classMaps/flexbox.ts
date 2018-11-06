const enum FlexType {
    Auto = 'auto',
    Inline = 'inline',
    None = 'none',
    Column = 'column',
    Row = 'row',
    Wrap = 'wrap',
    Nowrap = 'nowrap',
    WrapReverse = 'wrap-reverse',
    ColumnReverse = 'column-reverse',
    RowReverse = 'row-reverse',
}

const flexClassKeys = {
    align: (value: any, bp: BPSuffix='') => `items-${value}${bp}`,
    self: (value: any, bp: BPSuffix='') => `self-${value}${bp}`,
    justify: (value: any, bp: BPSuffix='') => `justify-${value}${bp}`,
    content: (value: any, bp: BPSuffix='') => `content-${value}${bp}`,
    layout: (value: FlexType, bp: BPSuffix='') => {
        switch(value) {
            case FlexType.Auto:
                return `flex-auto${bp}`;
            case FlexType.Inline:
                return `inline-flex${bp}`;
            case FlexType.None:
                return `flex-none${bp}`;
            case FlexType.Column:
                return `flex-column${bp}`;
            case FlexType.Row:
                return `flex-row${bp}`;
            case FlexType.Wrap:
                return `flex-wrap${bp}`;
            case FlexType.Nowrap:
                return `flex-nowrap${bp}`;
            case FlexType.WrapReverse:
                return `flex-wrap-reverse${bp}`;
            case FlexType.ColumnReverse:
                return `flex-column-reverse${bp}`;
            case FlexType.RowReverse:
                return `flex-row-reverse${bp}`;
        }
    }
}

const flexClass = {
    flex: (data: FlexType | object, bpSuffix: BPSuffix='') => {
        if(typeof data !== 'object') {
            return ['flex', flexClassKeys.layout(data, bpSuffix)];
        }
        return ['flex', ...Object.entries(data)
        .filter(([key, value]) => key in flexClassKeys)
        .map(([key, value]) => {
            return flexClassKeys[key](data[value], bpSuffix);
        })];
    },
};

interface FlexInner {
    align?: any;
    self?: any;
    justify?: any;
    content?: any;
    layout?: FlexType;
}

interface Flex {
    layout: FlexType | FlexInner;
}

export { flexClass, FlexType, Flex };