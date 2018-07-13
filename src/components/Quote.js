import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { borderClass, borderPropTypes } from './classMaps/border';
import { colorClass, colorPropType } from './classMaps/colors';
import { typographyClass, typographyPropType } from './classMaps/typography';
import { mappingToPartition } from './classMaps';


export class Quote extends Component {
    render() {
        const { attrib, borderColor, children, color, fontFamily } = this.props;
        const classes = classNames(
            typographyClass.fontFamily(fontFamily),
            borderClass.border({color: borderColor}),
            colorClass.color(color),
            'bl bw2 pl4 mt0 ml0'
        );
        console.log(classes);
        return (
            <div className='pa4'>
                <blockquote className={classes} >
                    <p className='f5 f4-m f3-l lh-copy measure mt0'>{children}</p>
                    {attrib && <cite className='f6 ttu tracked fs-normal'>&mdash;{attrib}</cite>}
                </blockquote>
            </div>
        );
    }
};

Quote.propTypes = {
    attrib: PropTypes.string,
    borderColor: PropTypes.string,
    color: colorPropType.color,
    fontFamily: typographyPropType.fontFamily,
};

Quote.defaultProps = {
    borderColor: 'blue',
    color: 'black-90',
    fontFamily: 'athelas',
};


const pullQuoteMap = mappingToPartition({
    ...typographyClass,
    ...colorClass,
});


export class PullQuote extends Component {
    render() {
        const { children } = this.props;
        const [classes, _restProps] = pullQuoteMap(this.props, 'ph0 center');
        return (
            <blockquote className='ph0 f4 f1-ns'>
                <p className='fw9 lh-copy lh-title-ns'>{children}</p>
            </blockquote>
        );
    }
}

PullQuote.propTypes = {
    ...typographyPropType,
    ...colorPropType
};

PullQuote.defaultProps = {
    measure: 'narrow',
    notSmall: { fontSize: 1 },
    fontSize: 4,
};