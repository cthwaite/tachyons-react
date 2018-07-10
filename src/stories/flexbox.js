import React from 'react';
import { storiesOf } from '@storybook/react';

import Container from '../components/Container';
import Code from '../components/Code';
import Heading from '../components/Heading';

const FlexCol = ({num, margin}) => {
    return (
        <Container outline width='25%' padding={3} margin={margin !== undefined ? margin : {right: 2}}>
            <Code>{num}</Code>
        </Container>
    );
};

const Flex = () => (
    <Container width='100%'>
        <Heading tag='h4'>flex</Heading>
        <Container flex={true}>
            <FlexCol num={1} />
            <FlexCol num={2} />
            <FlexCol num={3} />
            <FlexCol num={4} />
            <FlexCol num={5} margin={false} />
        </Container>
    </Container>
);

const FlexWrap = () => (
    <Container width='100%' margin={{ top: 4 }}>
        <Heading tag='h4'>flex-wrap</Heading>
        <Container flex='wrap'>
            <FlexCol num={1} />
            <FlexCol num={2} />
            <FlexCol num={3} />
            <FlexCol num={4} margin={{top:2, right:2}}/>
            <FlexCol num={5} margin={{top:2}} />
        </Container>
    </Container>
);

const FlexWrapReverse = () => (
    <Container width='100%' margin={{ top: 4 }}>
        <Heading tag='h4'>flex-wrap-reverse</Heading>
        <Container flex='wrap-reverse'>
            <FlexCol num={1} margin={{top:2, right:2}} />
            <FlexCol num={2} margin={{top:2, right:2}}/>
            <FlexCol num={3} margin={{top:2, right:2}}/>
            <FlexCol num={4} />
            <FlexCol num={5} />
        </Container>
    </Container>
);

export const flexboxStory = storiesOf('Flexbox', module);
flexboxStory
    .add('flex', () => (
        <Container width='100%' padding={3} flex='wrap' fontFamily='sans-serif'>
            <Flex />
            <FlexWrap />
            <FlexWrapReverse />
        </Container>
    ));

