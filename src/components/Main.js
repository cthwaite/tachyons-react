import React, { Component } from 'react';
import { defaultPartition } from './classMaps';


export default class Main extends Component {
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return (
            <main {...restProps} className={classes}>
                {children}
            </main>
        );
    }
}
