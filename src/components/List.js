import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { boxModelClass, boxModelPropType } from './classMaps/boxModel';
import { listsClass, listsPropType } from './classMaps/lists';
import { typographyClass, typographyPropType } from './classMaps/typography';
import { colorClass, colorPropType } from './classMaps/colors';
import { displayClass, displayPropType } from './classMaps/display';
import { mappingToPartition, mappingToClasses } from './classMaps';

const listMapping = {
    ...boxModelClass,
    ...typographyClass,
    ...listsClass,
    ...colorClass,
    ...displayClass
};
const listMap = mappingToPartition(listMapping);
const liMap = mappingToClasses(listMapping);

export class List extends Component {
    constructor(...args) {
        super(...args);
        this.renderItem = this.renderItem.bind(this);
    }

    renderItem(items) {
        const baseClass = {
            ph: 3,
            pv: this.props.tight ? 2 : 3,
        };
        const liClassFinal = liMap(baseClass);
        const liClass = liMap({...baseClass, border: { bottom: true, color: this.props.border.color }});
        return [
            ...items.map((item, idx) => <li key={idx} className={liClass}>{item}</li>),
            <li key={items.length} className={liClassFinal}>{items[items.length - 1]}</li>
        ];
    }

    render() {
        const { items } = this.props;
        const [ classes, _restProps ] = listMap(this.props);
        return (
            <ul className={classes}>
                {this.renderItem(items)}
            </ul>
        );
    }
}

List.propTypes = {
    ...typographyPropType,
    ...boxModelPropType,
    ...listsPropType,
    ...colorPropType,
    ...displayPropType,
    items: PropTypes.array.isRequired,
    tight: PropTypes.bool,
};

List.defaultProps = {
    ba: true,
    border: { radius: 2, color: 'light-silver', all: true },
    center: true,
    fontSize: 6,
    lineHeight: 'title',
    list: true,
    margin: { vertical: 2, left: 0, },
    pl: 0,
};