import * as React from 'react';
import { Typography } from './classMaps/typography';
import { defaultPartition } from './classMaps';

interface HeadingProps extends Typography {
    tag: string;
}

export default class Heading extends React.Component<HeadingProps> {
    static defaultProps = {
        tag: 'h1',
        fontWeight: 'normal'
    }
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