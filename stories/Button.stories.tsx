import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import Button from '../src/components/Button';

const stories = storiesOf('Button', module);

stories.add('Primary Button', () => (
  <Button type="primary" onClick={action('Button Clicked')}>
    Primary
  </Button>
));

stories.add('Secondary Button', () => (
  <Button type="secondary" onClick={action('Button Clicked')}>
    Secondary
  </Button>
));

stories.add('Danger Button', () => (
  <Button type="danger" onClick={action('Button Clicked')}>
    Danger
  </Button>
));

stories.add('Primary Button with Icon', () => (
  <Button type="primary" icon="create" onClick={action('Button Clicked')}>
    Primary
  </Button>
));

stories.add('Secondary Button with Icon', () => (
  <Button type="secondary" icon="copy" onClick={action('Button Clicked')}>
    Secondary
  </Button>
));

stories.add('Danger Button with Icon', () => (
  <Button type="danger" icon="trash" onClick={action('Button Clicked')}>
    Danger
  </Button>
));

stories.add('Primary Button with Badge', () => (
  <Button type="primary" badge={1} onClick={action('Button Clicked')}>
    Primary
  </Button>
));

stories.add('Secondary Button with Badge', () => (
  <Button type="secondary" badge={1} onClick={action('Button Clicked')}>
    Secondary
  </Button>
));

stories.add('Danger Button with Badge', () => (
  <Button type="danger" badge={1} onClick={action('Button Clicked')}>
    Danger
  </Button>
));

stories.add('Primary Button (Loading)', () => (
  <Button type="primary" loading onClick={action('Button Clicked')}>
    Primary (Loading)
  </Button>
));

stories.add('Secondary Button (Loading)', () => (
  <Button type="secondary" loading onClick={action('Button Clicked')}>
    Secondary (Loading)
  </Button>
));

stories.add('Primary Button (Disabled)', () => (
  <Button type="primary" disabled onClick={action('Button Clicked')}>
    Primary (Disabled)
  </Button>
));

stories.add('Secondary Button (Disabled)', () => (
  <Button type="secondary" disabled onClick={action('Button Clicked')}>
    Secondary (Disabled)
  </Button>
));

stories.add('Danger Button (Disabled)', () => (
  <Button type="danger" disabled onClick={action('Button Clicked')}>
    Danger (Disabled)
  </Button>
));