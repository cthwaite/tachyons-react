import React from 'react';
import { storiesOf } from '@storybook/react';

import Button from '../components/Button';
import Icon from '../components/Icon';
import Container from '../components/Container';


export const buttonStory = storiesOf('Button', module);
buttonStory.add('Button', () => (
    <Container mv={3} mh={5}>
        <Button>Click me!</Button>
    </Container>
));

buttonStory.add('Icon', () => (
    <Container mv={3} mh={5}>
        <Icon which='' />
    </Container>
));