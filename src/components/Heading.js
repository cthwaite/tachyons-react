import React, { Component } from 'react';
import classNames from 'classnames';
import { defaultPartition } from './classMaps';


export default class Heading extends Component {
    render() {
        const {
            children,
            tag: Tag // JSX tag names must be TitleCase
        } = this.props;

        const [classes, restProps] = defaultPartition(this.props);
        return (
            // . === React.createElement(Tag, ...);
            <Tag {...restProps} className={classes}>{children}</Tag>
        );
    }
};

Heading.defaultProps = {
    tag: 'h1',
    fontWeight: 'normal'
};