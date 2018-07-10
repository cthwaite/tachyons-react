import React from 'react';
import { storiesOf } from '@storybook/react';

import Code from '../components/Code';
import Container from '../components/Container';
import Heading from '../components/Heading';
import Paragraph from '../components/Paragraph';

export const typographyStory = storiesOf('typography', module);
typographyStory
    .add('Heading', () => (
        <Container pb={5} ph={5} mt={3} notSmall={{ ph: 5, mb: 5, pb: 5, pt: 0 }}>
        <Container color='black-70' fontFamily='sans-serif' maxWidth={9}>
            <Code mb={3} f={6} mb={3} display='block'>{`<Heading fontSize={1} lineHeight='title'>`}</Code>
            <Heading fontSize={1} lineHeight='title'>A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</Heading>
            <Code mb={3} f={6} mb={3} display='block'>{`<Heading f={2} lineHeight='copy'>`}</Code>
            <Heading f={2} lineHeight='copy'>A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</Heading>
            <Code mb={3} f={6} mb={3} display='block'>{`<Heading f={3} lineHeight='copy'>`}</Code>
            <Heading f={3} lineHeight='copy'>A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</Heading>
            <Code mb={3} f={6} mb={3} display='block'>{`<Heading f={4} lineHeight='copy'>`}</Code>
            <Heading f={4} lineHeight='copy'>A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</Heading>
            <Code mb={3} f={6} mb={3} display='block'>{`<Heading f={5} lineHeight='copy'>`}</Code>
            <Heading f={5} lineHeight='copy'>A modular scale, like a musical scale, is a prearranged set of harmonious proportions.</Heading>
        </Container>
        </Container>
    ));
typographyStory.add('Headline', () => (
    <Container pb={5} ph={5} mt={3} notSmall={{ ph: 5, mb: 5, pb: 5, pt: 0 }}>
        <Container color='black-70' fontFamily='sans-serif' maxWidth={9}>
            <Code mb={3} fontSize={6} mb={3} display='block'>{`<Heading fontWeight='bold' headline lineHeight='solid'>`}</Code>
            <Heading fontWeight='bold' headline lineHeight='solid'>
                A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
            </Heading>
        </Container>
    </Container>
));


typographyStory.add('Subheadline', () => (
    <Container pb={5} ph={5} mt={3} notSmall={{ ph: 5, mb: 5, pb: 5, pt: 0 }}>
        <Container color='black-70' fontFamily='sans-serif' maxWidth={9}>
            <Code mb={3} fontSize={6} mb={3} display='block'>{`<Heading fontWeight='bold' subheadline lineHeight='title'>`}</Code>
            <Heading fontWeight='bold' subheadline lineHeight='title'>
            A modular scale, like a musical scale, is a prearranged set of harmonious proportions.
            </Heading>
        </Container>
    </Container>
));

typographyStory
    .add('Paragraph', () => (
        <Container width='100%' fontFamily='sans-serif'>
            <Container color='black-70' fontFamily='sans-serif' maxWidth={9} ph={5}>
                <Paragraph >
                    Lorem ipsum dolor sit amet, nec in putent omittam sadipscing. At cum ridens possit aliquando.
                    Sea simul offendit sententiae eu. Affert mucius volumus qui id, convenire sapientem vis cu.
                    Et solum illud cotidieque cum. Nec ea habeo temporibus, exerci nostrum sensibus no sit.
                </Paragraph>
            </Container>
        </Container>
    ));

typographyStory
    .add('Measure', () => (
        <Container pb={5} ph={5} mt={3} notSmall={{ ph: 5, mb: 5, pb: 5, pt: 0 }}>
        <Container color='black-70' fontFamily='sans-serif' maxWidth={9}>
            <Heading f={6} fw={6} pt={5} mt={2} mb={0} tracked textTransform='uppercase' border='top'>5rem/80px at 30em</Heading>
            <Code f={6} mt={3} display='block'>{`<Heading tag='h3' subheadline measure>`}</Code>
            <Heading tag='h3' mt={4} subheadline measure>
                Designers create hierarchy and contrast by playing with the scale of letterforms.
            </Heading>

            <Heading f={6} fw={6} pt={5} mt={2} mb={0} tracked textTransform='uppercase' border='top'>3rem(48px) at 30em</Heading>
            <Code f={6} mt={3} display='block'>{`<Heading tag='h3' f={1} measure>`}</Code>
            <Heading tag='h3' f={1} mt={4} measure lineHeight='title'>
            Designers create hierarchy and contrast by playing with the scale of letterforms. Changes in scale help create visual contrast, movement, and depth as well as express hierarchies of importance.
            </Heading>

            <Heading f={6} fw={6} pt={5} mt={2} mb={0} tracked textTransform='uppercase' border='top'>2.25rem (36px) at 30em</Heading>
            <Code f={6} mt={3} display='block'>{`<Heading tag='h3' f={2} measure>`}</Code>
            <Heading tag='h3' f={2} measure lineHeight='copy'>
            Designers create hierarchy and contrast by playing with the scale of letterforms. Changes in scale help create visual contrast, movement, and depth as well as express hierarchies of importance.
            </Heading>
        </Container>
    </Container>
    ));
