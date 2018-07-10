import PropTypes from 'prop-types';

const displayClass = {
    display: (value, bpSuffix='') => {
        switch (value) {
            case 'none':
                return `dn${bpSuffix}`;
            case 'inline':
                return `di${bpSuffix}`
            case 'block':
                return `db${bpSuffix}`
            case 'inline-block':
                return `dib${bpSuffix}`
            case 'table':
                return `dt${bpSuffix}`
            case 'table-cell':
                return `dtc${bpSuffix}`
            case 'table-row':
                return `dt-row${bpSuffix}`
            case 'table-row-group':
                return `dt-row-group${bpSuffix}`
            case 'table-column':
                return `dt-column${bpSuffix}`
            case 'table-column-group':
                return `dt-column-group${bpSuffix}`
            default:
                return;
        }
    }
}

const displayPropType = PropTypes.oneOf([
    'none',
    'inline',
    'block',
    'inline-block',
    'table',
    'table-cell',
    'table-row',
    'table-row-group',
    'table-column',
    'table-column-group',
]);

export { displayClass, displayPropType };