import React, { Component } from 'react';
import classNames from 'classnames';

import { mapClassNames } from './classMaps';


export default class Container extends Component {
    render() {
        const {
            children,
            className,
        } = this.props;

        const classes = classNames(
            mapClassNames(this.props),
            className
        );
        return (
            <div className={classes}>
                {children}
            </div>
        );
    }
}