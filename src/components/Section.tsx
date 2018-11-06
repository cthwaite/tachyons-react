import * as React from 'react';

import { defaultPartition } from './classMaps';


export default class Section extends React.Component {
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return (
            <section {...restProps} className={classes}>
                {children}
            </section>
        );
    }
}