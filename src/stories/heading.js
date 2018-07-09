import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from '../components/Container';
import Heading from '../components/Heading';

export const headingStory = storiesOf('Heading', module);
headingStory
    .add('h1 - h5', () => (
        <Container textAlign='center' width='100%' fontFamily='sans-serif'>
        <Heading tag='h1'>H1 Heading</Heading>
        <Heading tag='h2'>H2 Heading</Heading>
        <Heading tag='h3'>H3 Heading</Heading>
        <Heading tag='h4'>H4 Heading</Heading>
        <Heading tag='h5'>H5 Heading</Heading>
        </Container>
    ));

headingStory
    .add('just h1', () => (
        <Container textAlign='center' width='100%' fontFamily='sans-serif'>
            <Heading tag='h1'>H1 Heading</Heading>
        </Container>
    ));
