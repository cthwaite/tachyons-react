import React, { Component } from 'react';

import { mappingToPartition, PROP_TO_CLASS_DEFAULTS } from './classMaps';
import { typographyPropType } from './classMaps/typography';

import { keysExcept } from '../utility';


const measureMap = mappingToPartition({
    ...keysExcept(PROP_TO_CLASS_DEFAULTS, ['measure']),
    measure: (value, bpSuffix='') => value ? `measure${bpSuffix}` : null,
    wide: (_, bpSuffix='') => `measure-wide${bpSuffix}`,
    narrow: (_, bpSuffix='') => `measure-narrow${bpSuffix}`,
});

export default class Measure extends Component {
    render() {
        const { children } = this.props;
        const [classes, restProps] = measureMap(this.props);
        return <p {...restProps} className={classes}>{children}</p>;
    }
};

Measure.propTypes = keysExcept(typographyPropType, ['measure']);

Measure.defaultProps = {
    textAlign: 'left',
    lineHeight: 'copy',
    measure: true,
};