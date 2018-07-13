import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { storiesOf } from '@storybook/react';

import Article from './components/Article';
import Code from './components/Code';
import Container from './components/Container';
import Heading from './components/Heading';
import Paragraph from './components/Paragraph';
import Section from './components/Section';

const AppWrapper = ({debug, children}) => {
    const classes = classNames(
        'App',
        {
            'debug': debug
        },
        'w-100',
        'sans-serif'
    );
    return (
        <main className={classes}>
            {children}
        </main>
    );
};

AppWrapper.propTypes = {
    debug: PropTypes.bool
};

const MainContainer = ({children}) => (
    <Section  width='100%'
                padding={{ vertical: 3, horizontal: 3 }}
                notSmall={{ padding: {horizontal: 4}}}
                color='black-70'
                fontSize={6} >
        <Container maxWidth={9} center notSmall={{ padding: { horizontal: 3 }}} >
            <Container notSmall={{padding: { horizontal: 2}}}>
                {children}
            </Container>
        </Container>
    </Section>
);

const DemoCol = ({width}) => (
    <Container floats='left' width={width} padding={2}>
        <Container outline textAlign='center' bg='white' padding={{ vertical: 4 }}>
            <Code>fl w-{width[width.length-1] === '%' ? width.slice(0, -1) : width} pa2</Code>
        </Container>
    </Container>
);

const DemoColPair = ({leftWidth, rightWidth}) => (
    <div>
        <DemoCol width={leftWidth} />
        {rightWidth && <DemoCol width={rightWidth} />}
    </div>
);

const RepeatCol = ({times, element}) => (
    <div>
        {[...Array(times).keys()].map(i => element)}
    </div>
);

export const columnsStory = storiesOf('Layout', module);
columnsStory
    .add('columns', () => (
        <AppWrapper debug={false}>
            <Article padding={3} notSmall={{ padding: { horizontal: 5 }}}>
                <Heading tag='h3' fontSize={6} className='ttu tracked mt0'>Grids</Heading>
                <div>
                    <Paragraph measure fontSize={5} notSmall={{ fontSize: 4 }} lineHeight='copy'>
                        You can combine display, float, padding, and widths to construct a wide variety of grids. Here is a basic example of some options for constructing a simple grid.
                    </Paragraph>
                </div>
            </Article>
            <MainContainer>
                <Section>
                    <DemoColPair leftWidth='100%' />
                    <DemoColPair leftWidth='90%' rightWidth='10%' />
                    <DemoColPair leftWidth='80%' rightWidth='20%' />
                    <DemoColPair leftWidth='70%' rightWidth='30%' />
                    <DemoColPair leftWidth='60%' rightWidth='40%' />
                    <DemoColPair leftWidth='50%' rightWidth='50%' />
                    <DemoCol width='third' /><DemoCol width='third' /><DemoCol width='third' />
                    <DemoCol width='third' /><DemoCol width='two-thirds' />
                    <RepeatCol times={4} element={<DemoCol width='25%' />} />
                    <RepeatCol times={5} element={<DemoCol width='20%' />} />
                    <RepeatCol times={10} element={<DemoCol width='10%' />} />
                </Section>        
            </MainContainer>
        </AppWrapper>
    ));