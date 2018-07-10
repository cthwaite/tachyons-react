import React, { Component } from 'react';
import classNames from 'classnames';

import { defaultPartition } from './classMaps';


export default class Section extends Component {
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return (
            <section {...restProps} className={classes}>
                {children}
            </section>
        );
    }
}