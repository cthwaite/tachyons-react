const enum DisplayType {
    None = 'none',
    Inline = 'inline',
    Block = 'block',
    InlineBlock = 'inline-block',
    Table = 'table',
    TableCell = 'table-cell',
    TableRow = 'table-row',
    TableRowGroup = 'table-row-group',
    TableColumn = 'table-column',
    TableColumnGroup = 'table-column-group',
}

const displayClass = {
    display: (value: DisplayType, bpSuffix: BPSuffix='') => {
        switch (value) {
            case DisplayType.None:
                return `dn${bpSuffix}`;
            case DisplayType.Inline:
                return `di${bpSuffix}`
            case DisplayType.Block:
                return `db${bpSuffix}`
            case DisplayType.InlineBlock:
                return `dib${bpSuffix}`
            case DisplayType.Table:
                return `dt${bpSuffix}`
            case DisplayType.TableCell:
                return `dtc${bpSuffix}`
            case DisplayType.TableRow:
                return `dt-row${bpSuffix}`
            case DisplayType.TableRowGroup:
                return `dt-row-group${bpSuffix}`
            case DisplayType.TableColumn:
                return `dt-column${bpSuffix}`
            case DisplayType.TableColumnGroup:
                return `dt-column-group${bpSuffix}`
        }
    }
}

interface Display {
    display: DisplayType;
}

export { displayClass, DisplayType, Display };