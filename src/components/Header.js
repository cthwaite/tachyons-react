import React, { Component } from 'react';
import classNames from 'classnames';

import { defaultPartition } from './classMaps';

export default class Header extends Component {
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return (
            <header {...restProps} className={classes}>
                {children}
            </header>
        );
    }
}