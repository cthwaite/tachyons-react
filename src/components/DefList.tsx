import * as React from 'react';

export interface DefListItem {
    term: string;
    detail: string;
}

export interface DefListProps {
    items?: any;
}

const defItem = (item: any) => (
    <div className='lh-title mv2'>
       <dd className='dib b'>{item[0]}</dd>
       <dt className='dib ml2 gray'>{item[1]}</dt>
    </div>
);

export default class DefList extends React.Component<DefListProps> {
    render() {
        const { items } = this.props;
        const classes = 'title mv2 f6';
        return (
            <dl className={classes}>
                {items ? items.map(defItem) : null}
            </dl>
        )
    }
}