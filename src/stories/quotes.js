import React from 'react';
import { storiesOf } from '@storybook/react';

import Article from '../components/Article';
import Container from '../components/Container';
import { Quote, PullQuote } from '../components/Quote';


export const quoteStory = storiesOf('Quotes', module);
quoteStory.add('Quote', () => (
    <Container mv={3} mh={5}>
        <Quote attrib='Stanley Morrison'>
        Discipline in typography is a prime virtue. Individuality
      must be secured by means that are rational. Distinction
      needs to be won by simplicity and restraint. It is equally
      true that these qualities need to be infused wiht a
      certain spirit and vitality, or they degenerate into
      dullness and mediocrity.
        </Quote>
    </Container>
));

quoteStory.add('PullQuote', () => (
    <Container mv={3} mh={5}>
    <Article fontFamily='athelas' pa={4}>
        <p class='f6 f4-ns lh-copy measure center'>
            The form of our letters, the older handwriting and inscriptions as much as
            the cuttings in use today, reflects a convention that has slowly solidified,
            an agreement hardened in many battles. Even after the Renaissance several
            European countries retained broken, blackletter national scripts in opposition to roman, the obligatory type for all Latin material; yet even today, I hope, the last word about Fraktur has not been spoken.
        </p>
        <PullQuote>
            The punches of Claude Garamond, cut around 1530 in Paris, are simply unsurpassed in their clarity, readability and beauty.
        </PullQuote>
        <p class='f6 f4-ns lh-copy measure center'>
            Apart from that, the roman minuscule has been our way of writing for hundreds
            of years. What followed were merely fashionable variations, here and there even
            deformations, of the noble basic form, but no improvement whatever. The
            punches of Claude Garamond, cut around 1530 in Paris, are simply unsurpassed in
            their clarity, readability and beauty. Garamond appeared on the scene at a
            time when the occidental book, as an object, cast off its medieval
            ponderousness and took up the form which today is still the best: the slender
            and upright rectangular body, comprising folded sheets stitched or sewn at
            the back, in a cover whose protruding edges protect the trimmed pages.
        </p>
    </Article>
    </Container>
));