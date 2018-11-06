import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { TextCard, ProfileCard } from '../';
import { lipsum, DisplayContainer } from './common';


export const cardStory = storiesOf('Cards', module);

cardStory.add('TextCard', () => (
    <DisplayContainer>
        <TextCard title='Title of card'
                  description={lipsum}  />
    </DisplayContainer>
), { info: { inline: true } });

cardStory.add('ProfileCard', () => (
    <DisplayContainer>
        <ProfileCard image={{
                        src: 'http://via.placeholder.com/100x100',
                        alt: 'This is a placeholder image',
                    }}
                     title='Title of Card'
                     description={lipsum} />
    </DisplayContainer>
), { info: { inline: true } });