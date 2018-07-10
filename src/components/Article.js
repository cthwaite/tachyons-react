import React, { Component } from 'react';
import classNames from 'classnames';

import { defaultPartition } from './classMaps';

export default class Article extends Component {
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return (
            <article {...restProps} className={classes}>
                {children}
            </article>
        );
    }
}
