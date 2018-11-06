import * as React from 'react';
import classNames from 'classnames';
import { borderClass, BorderBox } from './classMaps/border';
import { colorClass, Color } from './classMaps/color';
import { typographyClass, Typography } from './classMaps/typography';
import { mappingToPartition } from './classMaps';

interface QuoteProps extends BorderBox, Color, Typography {
    attrib: string;
    borderColor: string;
}

export class Quote extends React.Component<QuoteProps> {
    static defaultProps = {
        borderColor: 'blue',
        color: 'black-90',
        fontFamily: 'athelas',
    };
    render() {
        const { attrib, borderColor, children, color, fontFamily } = this.props;
        const classes = classNames(
            typographyClass.fontFamily(fontFamily!),
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


const pullQuoteMap = mappingToPartition({
    ...typographyClass,
    ...colorClass,
});


interface PullQuoteProps extends Color, Typography {}

export class PullQuote extends React.Component<PullQuoteProps> {
    static defaultProps = {
        measure: 'narrow',
        notSmall: { fontSize: 1 },
        ph: 0,
        center: true,
        fontSize: 4,
    };
    render() {
        const { children } = this.props;
        const [classes,] = pullQuoteMap(this.props);
        return (
            <blockquote className={classes}>
                <p className='fw9 lh-copy lh-title-ns'>{children}</p>
            </blockquote>
        );
    }
}