import React, { Component } from 'react';
import classNames from 'classnames';

import { defaultPartition } from './classMaps';

export default class Paragraph extends Component {
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return <p {...restProps} className={classes}>{children}</p>;
    }
};
