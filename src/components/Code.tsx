import * as React from 'react';
import { defaultPartition } from './classMaps';

interface CodeProps {
    children: React.ReactNode;
}

export default class Code extends React.Component<CodeProps> {
    render () {
        const { children } = this.props;
        const [ classes, restProps ] = defaultPartition(this.props, 'pre');
        return (
            <code {...restProps} className={classes}>
                {children}
            </code>
        );
    }
}