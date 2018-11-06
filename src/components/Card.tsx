import * as React from 'react';
import classNames from 'classnames';
import { borderClass } from './classMaps/border';
import { colorClass } from './classMaps/color';

/**
 * Render description for a Card component.
 * @param {string|function} description - Either a string, or a function returning JSX.
 * @param {string} descClasses - If `description` is a string, the classes which will be
 * passed to the className property of the <p> tag wrapping the description.
 */
const renderDesc = (description: string | NodeProducer, descClasses: string) => {
    if(typeof description === 'function') {
        return description();
    }
    return (
        <p className={descClasses}>
            { description }
        </p>
    );
}

interface TextCardProps {
    title: string;
    borderColor: string;
    description: string | NodeProducer;
}

export class TextCard extends React.Component<TextCardProps> {
    static defaultProps = {
        borderColor: 'near-black'
    };
    render() {
        const { borderColor, description, title } = this.props;

        const articleCls = classNames('center mw5 mw6-ns hidden ba mv4', colorClass.color(borderColor));
        const headerCls = classNames('f4 white mv0 pv2 ph3', colorClass.bgColor(borderColor));
        const divCls = classNames('bt pa3', borderClass.border({ color: borderColor }));
        return (
            <article className={articleCls}>
                <h1 className={headerCls}>{ title }</h1>
                <div className={divCls}>
                    { renderDesc(description, 'f6 f5-ns lh-copy measure mv0') }
                </div>
            </article>
        );
    }
}


interface ProfileCardProps {
    title: string;
    image: ImageMeta;
    description: string | NodeProducer;
}

export class ProfileCard extends React.Component<ProfileCardProps> {
    render() {
        const { title, image, description } = this.props;
        return (
            <article className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
                <div className='tc'>
                    <img src={image.src} alt={image.alt} className='br-100 h3 w3 dib' title={image.title} />
                    <h1 className='f4'>{ title }</h1>
                    <hr className='mw3 bb bw1 b--black-10' />
                </div>
                { renderDesc(description, 'f6 lh-copy measure center black-70') }
            </article>
        );
    }
}