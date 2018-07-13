import React from 'react';
import { storiesOf } from '@storybook/react';

import { lipsum } from './lipsum';
import Container from '../components/Container';
import { TextCard, ProfileCard } from '../components/Card';


export const cardStory = storiesOf('Cards', module);
cardStory.add('TextCard', () => (
    <Container mv={3} mh={5} fontFamily='sans-serif'>
        <TextCard title='Title of card'
                  description={lipsum}  />
    </Container>
));

cardStory.add('ProfileCard', () => (
    <Container mv={3} mh={5} fontFamily='sans-serif'>
        <ProfileCard image={{
                        src: 'http://via.placeholder.com/100x100',
                        alt: 'This is a placeholder image',
                    }}
                     title='Title of Card'
                     description={lipsum} />
    </Container>
));