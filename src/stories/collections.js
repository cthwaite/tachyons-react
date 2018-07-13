import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';

import Container from '../components/Container';
import Heading from '../components/Heading';

import { DefList } from '../components/DefList';
import { List } from '../components/List';



export const collectionsStory = storiesOf('Collections', module);

collectionsStory.add('DefList', () => (
    <Container mv={3} mh={5} fontFamily='sans-serif'>
    <Heading tag='h4' f={6} fontWeight={6}>Glossary</Heading>
    <DefList items={
        [
            ['W:', 'Wins'],
            ['L:', 'Losses'],
            ['PCT:', 'Winning Percentages'],
            ['GB:', 'Games Back'],
            ['Home:', 'Home Record'],
            ['Road:', 'Road Record'],
            ['Div:', 'Division Record'],
        ]
    } />
    </Container>
));

collectionsStory.add('List', () => (
    <Container mv={3} mh={5} fontFamily='sans-serif'>
    <Heading tag='h4' f={6} fontWeight={6}>Cats</Heading>
    <List items={
        [
            'Mackeral Tabby',
            'Burmese',
            'Orange Tabby',
            'Maine Coon',
            'Siamese',
            'Scottish Fold',
            'American Bobtail',
        ]
    } />
    </Container>
));