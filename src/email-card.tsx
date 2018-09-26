import React from 'react';
import { ActionsProps } from './actions';
import Alert from './alert';
import { Button, Buttonized } from './button';
import Icon from './icon';
import { EmailCardStat, Statistics, StatisticType } from './statistics';
import BtnStyles from './styles/button.module.scss';
import Styles from './styles/email-card.module.scss';
import cn from './utilities/classnames';
import findActiveIndex from './utilities/find-active-index';

interface EmailCardSendTimeProps {
  value?: string;
  renderSendTimeLink?: (value: string) => any;
  alert?: any;
  className?: string;
}

const EmailCardSendTime: React.SFC<EmailCardSendTimeProps> = ({
  value,
  renderSendTimeLink,
  alert = '',
  className,
  ...attributes
}) => {
  return (
    <div
      className={cn(
        'email-card-send-time',
        Styles['email-card-send-time'],
        {
          [Styles['has-value']]: !!value,
          'has-value': !!value,
        },
        className
      )}
      {...attributes}
    >
      <Buttonized type="secondary" className={cn('btn', Styles.btn)}>
        {renderSendTimeLink && renderSendTimeLink(value)}
      </Buttonized>
      {alert}
    </div>
  );
};

export interface EmailCardDetail {
  label: string;
  value: string;
  renderEditDetailLink?: (value: string) => any;
}

const EmailCardDetails: React.SFC<{
  details?: Array<EmailCardDetail>;
  className?: string;
}> = ({ details, className, ...attributes }) => {
  const rows =
    details &&
    details.map(detail => {
      return (
        <tr key={detail.label}>
          <td className={cn('label', Styles.label)}>{detail.label}</td>
          <td>
            {(detail.renderEditDetailLink &&
              detail.renderEditDetailLink(detail.value)) ||
              detail.value}
          </td>
        </tr>
      );
    });

  return (
    <div className={cn('email-card-details', Styles['email-card-details'])}>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export interface EmailCardContentProps {
  thumbnailUrl: string;
  onContentEditClick: (event: any) => void;
  className?: string;
}

const EmailCardContent: React.SFC<EmailCardContentProps> = ({
  thumbnailUrl,
  onContentEditClick,
  className,
  ...attributes
}) => (
  <div
    className={cn(
      'email-card-content',
      Styles['email-card-content'],
      className
    )}
    {...attributes}
  >
    {thumbnailUrl ? (
      <a onClick={onContentEditClick} href="javascript: void 0">
        <img src={thumbnailUrl} />
        <span
          className={cn(
            'email-card-content-edit',
            Styles['email-card-content-edit']
          )}
        >
          <Icon type="pencil" />
          Edit
        </span>
      </a>
    ) : (
      <Button type="secondary" onClick={onContentEditClick}>
        Add Email Content
      </Button>
    )}
  </div>
);

export interface EmailCardAddButtonProps {
  onClick: (event: any) => void;
  className?: string;
}

export const EmailCardAddButton: React.SFC<EmailCardAddButtonProps> = ({
  onClick,
  className,
  ...attributes
}) => {
  return (
    <div
      className={cn(
        'btn-list',
        BtnStyles['btn-list'],
        'email-card-add',
        Styles['email-card-add'],
        className
      )}
      {...attributes}
    >
      <Button type="secondary" onClick={onClick}>
        Add an Email
      </Button>
    </div>
  );
};

export interface EmailCardProps {
  details?: Array<EmailCardDetail>;
  disableInboxDetails?: boolean;
  editing?: boolean;
  editable?: boolean;
  live?: boolean;
  n: number;
  onContentEditClick?: (event: any) => void;
  onSaveAlertClick?: (event: any) => void;
  paused?: boolean;
  renderSendTimeLink?: (value: string) => any;
  renderSendTimeAlert?: () => any;
  renderActions?: () => React.ReactElement<ActionsProps>;
  renderAlert?: () => any;
  sendTimeValue?: string;
  statistics?: {
    sent: StatisticType;
    delivered: StatisticType;
    opens: StatisticType;
    clicks: StatisticType;
    unsubscribes: StatisticType;
  };
  thumbnailUrl?: string;
  className?: string;
}

export class EmailCard extends React.Component<EmailCardProps> {
  public static defaultProps = {
    disableInboxDetails: false,
    editable: false,
    editing: false,
    live: false,
    paused: false,
    renderAlert: false,
  };

  public render() {
    const {
      className,
      details,
      disableInboxDetails,
      editable,
      editing,
      live,
      n,
      onContentEditClick,
      onSaveAlertClick,
      paused,
      renderActions,
      renderAlert,
      renderSendTimeLink,
      renderSendTimeAlert,
      sendTimeValue,
      statistics,
      thumbnailUrl,
      ...attributes
    } = this.props;
    const alertEl = renderAlert && renderAlert();
    const sendTimeAlert = renderSendTimeAlert && renderSendTimeAlert();
    return (
      <div
        className={cn('email-card-wrap', Styles['email-card-wrap'], className, {
          [Styles['has-alert']]: !!this.props.renderAlert,
          'has-alert': !!this.props.renderAlert,
          [Styles['is-editable']]: this.props.editable,
          'is-editable': this.props.editable,
          [Styles['is-live']]: this.props.live,
          'is-live': this.props.live,
          [Styles['is-paused']]: this.props.paused,
          'is-paused': this.props.paused,
          [Styles['is-disable-inbox-details']]: this.props.disableInboxDetails,
        })}
        {...attributes}
      >
        <EmailCardSendTime
          value={sendTimeValue}
          renderSendTimeLink={renderSendTimeLink}
          alert={sendTimeAlert}
        />
        {statistics && (
          <Statistics commonClass="email-stats">
            <EmailCardStat specificClass="" statistic={statistics.sent} />
            <EmailCardStat
              specificClass="delivered"
              statistic={statistics.delivered}
            />
            <EmailCardStat
              specificClass="unique-opens"
              statistic={statistics.opens}
            />
            <EmailCardStat
              specificClass="unique-clicks"
              statistic={statistics.clicks}
            />
            <EmailCardStat
              specificClass="unsubscribes"
              statistic={statistics.unsubscribes}
            />
          </Statistics>
        )}
        <div className={cn('email-card', Styles['email-card'], 'email-card')}>
          <div className={cn('email-card-count', Styles['email-card-count'])}>
            <p>Email {n}</p>
          </div>
          <EmailCardContent
            thumbnailUrl={thumbnailUrl}
            onContentEditClick={onContentEditClick}
          />
          <EmailCardDetails details={details} />
          {renderActions && renderActions()}
        </div>
        {alertEl}
      </div>
    );
  }
}

export default EmailCard;
