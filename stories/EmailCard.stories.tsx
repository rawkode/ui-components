import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';
import React, { Fragment } from 'react';
import { Action, Actions } from '../src/actions';
import Alert from '../src/alert';
import Button from '../src/button';
import {
  EmailCard,
  EmailCardAddButton,
} from '../src/email-card';
import Icon from '../src/icon';
const loaderStories = storiesOf('EmailCard', module);

const statistics = {
  clicks: { label: 'Unique Clicks', amount: 6024 },
  delivered: { label: 'Delivered', amount: 966 },
  opens: { label: 'Unique Opens', amount: '80.2%' },
  sent: { label: 'Emails Sent', amount: 12230 },
  unsubscribes: { label: 'Unsubscribes', amount: 0 },
};
const blankStatistics = {
  clicks: { label: 'Unique Clicks' },
  delivered: { label: 'Delivered' },
  opens: { label: 'Unique Opens' },
  sent: { label: 'Emails Sent' },
  unsubscribes: { label: 'Unsubscribes' },
};
const renderEditDetailLink = (value: string) => {
  return (
    <a href="#">
      {value}
    </a>
  );
};

const details = [
  { label: 'Subject', value: 'Welcome to SendGrid', renderEditDetailLink },
  { label: 'Preheader', value: 'Get starting sending up to 12,000 emails Today', renderEditDetailLink },
  { label: 'From Sender', value: 'Tyler Hale <tyler.hale@sendgrid.com>', renderEditDetailLink },
];

const renderSendTimeLink = (value: string) => {
  return (
    <a href="#">
      {value || 'Select Send Time'}
    </a>
  );
};

const onContentEditClick = action('content edit click');

const cardData = {
  details,
  n: 1,
  onContentEditClick,
  renderSendTimeLink,
  statistics,
};

const cardDataNoStats = {
  details,
  n: 1,
  onContentEditClick,
  renderSendTimeLink,
};

const cardDataBlankStats = {
  details,
  n: 1,
  onContentEditClick,
  renderSendTimeLink,
  statistics: blankStatistics,
};

const cardDataWithImage = {
  details,
  n: 1,
  onContentEditClick,
  renderSendTimeLink,
  statistics,
  thumbnailUrl: 'http://via.placeholder.com/128x88',
};

loaderStories.add('Email Card', () => ( <EmailCard sendTimeValue="Send Instantly" {...cardData} /> ));
loaderStories.add('Email card with actions', () => (
  <EmailCard
    sendTimeValue="Send Instantly"
    {...cardData}
    renderActions={() => (
      <Actions inEmailCard>
        <Action title="Edit" icon="pencil" onClick={action('edit')} />
        <Action title="Duplicate" icon="copy" onClick={action('copy')} />
        <Action title="Create Template" icon="create" onClick={action('create')} />
        <Action title="Export HTML" icon="export" onClick={action('export')} />
        <Action title="Preview" icon="view" onClick={action('view')} />
        <Action title="Delete" icon="trash" onClick={action('delete')} />
      </Actions>
    )}
  />
));

loaderStories.add('Email Card with No Statistics', () => (
  <EmailCard sendTimeValue="Send Instantly" {...cardDataNoStats} />
));
loaderStories.add('Email Card with Blank Statistics', () => (
  <EmailCard sendTimeValue="Send Instantly" {...cardDataBlankStats} />
));

loaderStories.add('Email Card with Content', () => (
  <EmailCard sendTimeValue="Send Instantly" {...cardDataWithImage} />
));

loaderStories.add('Email Card - Edit Mode', () => (<EmailCard {...cardDataNoStats} editing /> ));

loaderStories.add('Email Card - Live', () => ( <EmailCard {...cardData} sendTimeValue="Send Instantly" live /> ));

loaderStories.add('Email Card - Paused', () => ( <EmailCard {...cardData} sendTimeValue="Send Instantly" paused /> ));

loaderStories.add('Email Card - Disable Inbox Details', () => ( <EmailCard {...cardData} disableInboxDetails /> ));

loaderStories.add('Email Card - Multi Editable', () => (
  <div>
    <EmailCard {...cardData} editable />
    <EmailCard {...cardData} n={2} editable />
    <EmailCard {...cardData} n={3} editable />
    <EmailCard {...cardData} n={4} editable />
    <EmailCardAddButton onClick={null} />
  </div>
));

loaderStories.add('Email Card - Multi Live', () => (
  <div>
    <EmailCard {...cardData} live sendTimeValue="Send Instantly"/>
    <EmailCard {...cardData} n={2} live sendTimeValue="Send 3 Days After Email 1"/>
    <EmailCard {...cardData} n={3} live sendTimeValue="Send 3 Days After Email 2"/>
    <EmailCard {...cardData} n={4} live sendTimeValue="Send 3 Days After Email 3"/>
  </div>
));

const renderAlert = () => {
  return (
    <Alert dismissable={false} type="warning" icon="info-circle">
        <Fragment>
            Changes you've made to this email have not been applied to your live automation.
          <Button onClick={() => {}} type="primary" small>
         Save and Apply
          </Button>
          <span className="discard-icon" data-tooltip="Discard Changes" data-tooltip-pos="up">
            <Icon type="trash" onClick={() => {}} />
          </span>
        </Fragment>
      </Alert>);
};

loaderStories.add('Email Card with Alerts ', () => (
  <EmailCard {...cardData} live renderAlert={renderAlert} sendTimeValue="Send Instantly"/>
));
