import * as React from 'react';
import { defaultPartition } from './classMaps';
import { Typography } from './classMaps/typography';

export default class Text extends React.Component<Typography> {
    static defaultProps = {
        textAlign: 'left',
        lineHeight: 'copy',
    };
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return <p {...restProps} className={classes}>{children}</p>;
    }
};