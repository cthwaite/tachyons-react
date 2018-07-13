import React, { Component } from 'react';
import { defaultPartition } from './classMaps';


export default class Button extends Component {
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

Button.defaultProps = {
    fontFamily: 'sans-serif',
    fontSize: 6,
    link: true,
    dim: true,
    border: { radius: 1 },
    padding: { right: 1, horizontal: 3, vertical: 2},
    mb: 2,
    color: 'white',
    bgColor: 'black'
};
