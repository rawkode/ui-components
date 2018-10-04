import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React from 'react';

import Alert from '../src/alert';
import Button from '../src/button';

import '../src/styles/global/main.scss';

const stories = storiesOf('Alerts', module);

stories.add('Success Alert', () => (
  <Alert type="success" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Warning Alert', () => (
  <Alert type="warning" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Danger Alert', () => (
  <Alert type="danger" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Success Alert with Custom Icon', () => (
  <Alert type="success" icon="clean-ui" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Warning Alert with Custom Icon', () => (
  <Alert type="warning" icon="clean-ui" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Danger Alert with Custom Icon', () => (
  <Alert type="danger" icon="clean-ui" onClick={action('Alert Dismissed')}>
    Lorem ipsum dolor sit amet, <a href="#">consectetur adipiscing elit</a>. In
    nec augue eu lacus aliquam lobortis.
  </Alert>
));

stories.add('Alert which is not dismissable', () => (
  <Alert type="warning" dismissable={false}>
    Changes you've made to this email have not been applied to your live automation.
    <Button type="primary" small>Save and Apply</Button>
  </Alert>
));
