import * as React from 'react';
import { Color } from './classMaps/color';
import { Typography } from './classMaps/typography';
import { BoxModel } from './classMaps/boxModel';
import { defaultPartition } from './classMaps';

export interface ButtonProps extends Color, Typography, BoxModel {
    children?: React.ReactNode;
}

export default class Button extends React.Component {
    static defaultProps = {
        fontFamily: 'sans-serif',
        fontSize: 6,
        color: 'white',
        bgColor: 'black',
        link: true,
        dim: true,
        border: { radius: 1 },
        padding: { right: 1, horizontal: 3, vertical: 2},
        mb: 2,
    }
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return (
            <a {...restProps} className={classes}>
                {children}
            </a>
        );
    }
}
