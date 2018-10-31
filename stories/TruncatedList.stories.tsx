import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import { TruncatedList } from '../src/truncated-list';

const stories = storiesOf('Truncated List', module);
const singleItemList = ['Boromir'];
const list = ['Boromir', 'Elrond', 'Frodo', 'Gimli', 'Legolas'];
const limit = 2; // Default is 3
const objectList = [
  { name: 'Boromir', dies: true },
  { name: 'Elrond', dies: false },
  { name: 'Frodo', dies: false },
  { name: 'Gimli', dies: false },
  { name: 'Legolas', dies: false },
];

stories.add('Standard - Limit 2', () => (
  <TruncatedList
    items={list}
    limit={limit}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
  />
));
stories.add('Standard - Limit 2 - No Link - 1000 entries', () => (
  <TruncatedList
    items={[...Array(1000).keys()].map((i: number) => `${i}`)}
    limit={limit}
  />
));

stories.add('Standard - Limit Default', () => (
  <TruncatedList
    items={list}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
  />
));

stories.add('Standard - Only 1 Item', () => (
  <TruncatedList
    items={singleItemList}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
  />
));

stories.add('Custom Render Props', () => (
  <TruncatedList
    items={objectList}
    link="http://lotr.wikia.com/wiki/Fellowship_of_the_Ring"
    renderItems={items => (
      <Fragment>
        {items.map(({ name, dies }) => (
          <span key={name}>
            {name} {dies && '(Dead)'},{' '}
          </span>
        ))}
      </Fragment>
    )}
    renderMore={(numberOfItems: string, link: string) => (
      <Fragment>
        <a href={link}>and {numberOfItems} more…</a>
      </Fragment>
    )}
  />
));
