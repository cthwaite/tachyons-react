import * as React from 'react';

import { boxModelClass, BoxModel } from './classMaps/boxModel';
import { listClass, List as ListType } from './classMaps/list';
import { typographyClass, Typography } from './classMaps/typography';
import { colorClass, Color } from './classMaps/color';
import { displayClass, Display } from './classMaps/display';
import { mappingToPartition, mappingToClasses } from './classMaps';

const listMapping = {
    ...boxModelClass,
    ...colorClass,
    ...displayClass,
    ...listClass,
    ...typographyClass,
};
const listMap = mappingToPartition(listMapping);
const liMap = mappingToClasses(listMapping);

interface ListProps extends BoxModel, Color, Display, ListType, Typography {
    items: any[],
    tight: boolean,
}

export class List extends React.Component<ListProps> {
    static defaultProps = {
        ba: true,
        border: { radius: 2, color: 'light-silver', all: true },
        center: true,
        fontSize: 6,
        lineHeight: 'title',
        list: true,
        margin: { vertical: 2, left: 0, },
        pl: 0,
    };

    render() {
        const { items } = this.props;
        const [ classes, /* _unused */ ] = listMap(this.props);
        return (
            <ul className={classes}>
                {this.renderItem(items)}
            </ul>
        );
    }

    private renderItem = (items: any) => {
        const baseClass = {
            ph: 3,
            pv: this.props.tight ? 2 : 3,
        };
        const liClassFinal = liMap(baseClass);
        let liClass = '';
        if(this.props.border) {
            if(typeof this.props.border === 'number') {
                liClass = liClass = liMap({...baseClass, border: { bottom: true }});
            } else {
                liClass = liClass = liMap({...baseClass, border: { bottom: true, color: this.props.border.color }});
            }
        }
        return [
            ...items.map((item: any, idx: number) => <li key={idx} className={liClass}>{item}</li>),
            <li key={items.length} className={liClassFinal}>{items[items.length - 1]}</li>
        ];
    }
}