import React, { Component } from 'react';
import { defaultPartition } from './classMaps';
import { typographyPropType } from './classMaps/typography';

export default class Text extends Component {
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return <p {...restProps} className={classes}>{children}</p>;
    }
};

Text.propTypes = {
    ...typographyPropType
};

Text.defaultProps = {
    textAlign: 'left',
    lineHeight: 'copy',
};