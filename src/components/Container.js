import React, { Component } from 'react';
import classNames from 'classnames';

import { defaultPartition } from './classMaps';


export default class Container extends Component {
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return (
            <div {...restProps} className={classes}>
                {children}
            </div>
        );
    }
}