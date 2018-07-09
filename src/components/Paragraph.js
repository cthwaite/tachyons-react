import React, { Component } from 'react';
import classNames from 'classnames';

import { mapClassNames } from './classMaps';
import { textClass, measureClass } from './classMaps/text';

export default class Paragraph extends Component {
    render() {
        const {
            children,
            className,
        } = this.props;

        const classes = classNames(
            mapClassNames(this.props),
            textClass(this.props),
            measureClass(this.props),
            className
        );
        return <p className={classes}>{children}</p>;
    }
};
