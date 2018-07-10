import React, { Component } from 'react';

import { defaultPartition } from './classMaps';


export default class Code extends Component {
    render () {
        const { children } = this.props;
        const [ classes, restProps ] = defaultPartition(this.props, 'pre');
        return (
            <code {...restProps}>
                {children}
            </code>
        );
    }
}