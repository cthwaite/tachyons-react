import * as React from 'react';
import { defaultPartition } from './classMaps';
import { Typography } from './classMaps/typography';
import { BoxModel } from './classMaps/boxModel';

interface ContainerProps extends Typography, BoxModel {

}

export class Container extends React.Component<ContainerProps> {
    render() {
        const { children } = this.props;
        const [classes, restProps] = defaultPartition(this.props);
        return (
            <div {...restProps} className={classes}>
                {children}
            </div>
        );
    }
}