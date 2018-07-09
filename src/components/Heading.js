import React, { Component } from 'react';
import classNames from 'classnames';
import { mapClassNames } from './classMaps';


class Heading extends Component {
    render() {
        const {
            children,
            className,
            tag: Tag // JSX tag names must be TitleCase
        } = this.props;

        const classes = classNames(
            mapClassNames(this.props),
            className
        );
        return (
            // . === React.createElement(Tag, ...);
            <Tag className={classes}>{children}</Tag>
        );
    }
}

export default Heading;