import * as React from 'react';

export interface ArticleProps {
    children: React.ReactNode;
    classes?: string;
}

export default class Article extends React.Component<ArticleProps> {
    render() {
        const { classes, children }= this.props;
        return (
            <article className={classes}>
                {children}
            </article>
        );
    }
}

