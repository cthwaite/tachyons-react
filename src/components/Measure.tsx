import * as React from 'react';

import { mappingToPartition, PROP_TO_CLASS_DEFAULTS } from './classMaps';
import { Typography } from './classMaps/typography';

import { keysExcept } from './classMaps/utility';

const measureMap = mappingToPartition({
    ...keysExcept(PROP_TO_CLASS_DEFAULTS, ['measure']),
    measure: (value: any, bpSuffix='') => value ? `measure${bpSuffix}` : null,
    wide: (_: any, bpSuffix='') => `measure-wide${bpSuffix}`,
    narrow: (_: any, bpSuffix='') => `measure-narrow${bpSuffix}`,
});

type MeasureProps = Typography;

export default class Measure extends React.Component<MeasureProps> {
    static defaultProps = {
        textAlign: 'left',
        lineHeight: 'copy',
        measure: true,
    };
    render() {
        const { children } = this.props;
        const [classes, restProps] = measureMap(this.props);
        return <p {...restProps} className={classes}>{children}</p>;
    }
};