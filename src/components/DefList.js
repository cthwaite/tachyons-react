import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { typographyClass, typographyPropType } from './classMaps/typography';
import { boxModelClass, boxModelPropType } from './classMaps/boxModel';
import { colorClass } from './classMaps/colors';
import { displayClass } from './classMaps/display';
import { mappingToPartition } from './classMaps';

const defMap = mappingToPartition({
    ...boxModelClass,
    ...typographyClass,
    ...colorClass,
    ...displayClass
});

export class DefList extends Component {
    render() {
        const { children, items, ddClass, dtClass } = this.props;
        const [classes, restProps] = defMap(this.props);
        return (
            <dl className={classes}>
                {items.map(([term, detail]) => (
                    <div class='lh-title mv2'>
                        <dt class={ddClass}>{term}</dt> <dt class={dtClass}>{detail}</dt>
                    </div>
                ))}
            </dl>
        );
    }
}

DefList.propTypes = {
    ...typographyPropType,
    ...boxModelPropType,
    items: PropTypes.array.isRequired,
    dtClass: PropTypes.string,
    ddClass: PropTypes.string
}

DefList.defaultProps = {
    lineHeight: 'title',
    mv: 2,
    f: 6,
    ddClass: 'dib b',
    dtClass: 'dib ml0 gray',
};