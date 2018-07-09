import React, { Component } from 'react';
import classNames from 'classnames';

import { mapClassNames } from './classMaps';

export default class Paragraph extends Component {
    render() {
        const {
            children,

            measure,
            truncate,
            indent,
            smallCaps,

            className,
        } = this.props;

        const measureClass = (measure || measure === 'normal') ? `measure-${measure}` : 'measure';

        const classes = classNames(
            mapClassNames(this.props),
            {
                'truncate': truncate,
                'indent': indent,
                'small-caps': smallCaps,
            },
            measureClass,
            className
        );
        return <p className={classes}>{children}</p>;
    }
};
