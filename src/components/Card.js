import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { borderClass } from './classMaps/border';
import { colorClass } from './classMaps/colors';

/**
 * Render description for a Card component.
 * @param {string|function} description - Either a string, or a function returning JSX.
 * @param {string} descClasses - If `description` is a string, the classes which will be
 * passed to the className property of the <p> tag wrapping the description.
 */
const renderDesc = (description, descClasses) => {
    if(typeof description === 'function') {
        return description();
    }
    return (
        <p class={descClasses}>
            { description }
        </p>
    );
}


export class TextCard extends Component {
    render() {
        const { borderColor, description, title } = this.props;

        const articleCls = classNames('center mw5 mw6-ns hidden ba mv4', colorClass.color(borderColor));
        const headerCls = classNames('f4 white mv0 pv2 ph3', colorClass.bgColor(borderColor));
        const divCls = classNames('bt pa3', borderClass.border({ color: borderColor }));
        return (
            <article className={articleCls}>
                <h1 class={headerCls}>{ title }</h1>
                <div class={divCls}>
                    { renderDesc(description, 'f6 f5-ns lh-copy measure mv0') }
                </div>
            </article>
        );
    }
}

TextCard.propTypes = {
    title: PropTypes.string.isRequired,
    color: PropTypes.string,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]).isRequired
};

TextCard.defaultProps = {
    borderColor: 'near-black',
};


export class ProfileCard extends Component {
    render() {
        const { title, image, description } = this.props;
        return (
            <article className='mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10'>
                <div class='tc'>
                    <img src={image.src} alt={image.alt} class='br-100 h3 w3 dib' title={image.title} />
                    <h1 class='f4'>{ title }</h1>
                    <hr class='mw3 bb bw1 b--black-10' />
                </div>
                { renderDesc(description, 'f6 lh-copy measure center black-70') }
            </article>
        );
    }
}

ProfileCard.propTypes = {
    title: PropTypes.string.isRequired,
    image: PropTypes.object.isRequired,
    description: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.func
    ]).isRequired
};