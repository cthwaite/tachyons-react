import React, { Component } from 'react';
import classNames from 'classnames';

import { mapClassNames } from './classMaps';


export default class Article extends Component {
    render() {
        const {
            children,
            classname,
        } = this.props;

        const classes = classNames(
            mapClassNames(this.props),
            classname
        );
        return (
            <article className={classes}>
                {children}
            </article>
        );
    }
}
