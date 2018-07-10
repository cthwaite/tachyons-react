import React from 'react';
import { storiesOf } from '@storybook/react';

import Code from '../components/Code';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export const typographyStory = storiesOf('typography', module);
typographyStory
    .add('Heading', () => (
        <div>
        <Container textAlign='center' width='100%' fontFamily='sans-serif'>

        </Container>
        <Container textAlign='center' width='100%' fontFamily='sans-serif'>
            <Heading tag='h1'>H1 Heading</Heading>
            <Heading tag='h2'>H2 Heading</Heading>
            <Heading tag='h3'>H3 Heading</Heading>
            <Heading tag='h4'>H4 Heading</Heading>
            <Heading tag='h5'>H5 Heading</Heading>
        </Container>
        </div>
    ));
typographyStory.add('Scale', () => (
    <Container pb={5} ph={5} mt={3} notSmall={{ ph: 5, mb: 5, pb: 5, pt: 0 }}>
        <Container color='black-70' fontFamily='sans-serif' maxWidth={9}>
            <Code mb={3} fontSize={6} mb={3} display='block'>{`<Heading bold headline lineHeight='solid'>`}</Code>
            <Heading bold headline lineHeight='solid'>
            A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
            </Heading>
        </Container>
    </Container>
))

typographyStory
    .add('Paragraph', () => (
        <Container width='100%' fontFamily='sans-serif'>
            <Paragraph >
                Lorem ipsum dolor sit amet, nec in putent omittam sadipscing. At cum ridens possit aliquando.
                Sea simul offendit sententiae eu. Affert mucius volumus qui id, convenire sapientem vis cu.
                Et solum illud cotidieque cum. Nec ea habeo temporibus, exerci nostrum sensibus no sit.
            </Paragraph>
        </Container>
    ));
