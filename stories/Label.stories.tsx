import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';

import Label from '../src/label';

const stories = storiesOf('Label', module);

stories.add('Labels', () =>
  <Fragment>
    <Label text="Sent" type="sent" /><br />
    <Label text="Delivered" type="delivered" /><br />
    <Label text="Live" type="live" /><br />
    <Label text="Success" type="success" /><br />
    <Label text="Scheduled" type="scheduled" /><br />
    <Label text="Pick Winner" type="pick-winner" /><br />
    <Label text="Draft" type="draft" /><br />
    <Label text="Global" type="global" /><br />
    <Label text="List" type="list" /><br />
    <Label text="Progress" type="progress" /><br />
    <Label text="Bounced" type="bounced" /><br />
    <Label text="Canceled" type="canceled" /><br />
    <Label text="Disabled" type="disabled" /><br />
    <Label text="Paused" type="paused" /><br />
    <Label text="Error" type="error" /><br />
    <Label text="Optimized" type="optimized" /><br />
  </Fragment>
);
