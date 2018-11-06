import * as React from 'react';
import { Container } from '../';

const lipsum: string = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.';
const DisplayContainer = ({children}: any) => (
    <Container margin={{horizontal: 5, vertical: 3}} fontFamily='sans-serif'>
        {children}
    </Container>
);

export { lipsum, DisplayContainer };