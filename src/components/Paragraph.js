import React, { Component } from 'react';
import { defaultPartition } from './classMaps';
import { typographyPropType } from './classMaps/typography';

export default class Paragraph extends Component {
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return <p {...restProps} className={classes}>{children}</p>;
    }
};

Paragraph.propTypes = {
    ...typographyPropType
};

Paragraph.defaultProps = {
    textAlign: 'left',
};