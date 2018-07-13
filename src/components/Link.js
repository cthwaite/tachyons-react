import React, { Component } from 'react';
import { defaultPartition } from './classMaps';


export default class Link extends Component {
    render() {
        const {
            children
        } = this.props;
        const [classes, restProps] = defaultPartition(this.props, ['link']);
        return <a {...restProps} className={classes}>{children}</a>;
    }
}