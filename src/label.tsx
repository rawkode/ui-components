import React from 'react';
import Styles from './styles/label.module.scss';
import cn from './utilities/classnames';

export interface LabelProps {
  className?: string;
  text: string;
  type:
    | 'sent'
    | 'delivered'
    | 'live'
    | 'success'
    | 'scheduled'
    | 'pick-winner'
    | 'draft'
    | 'global'
    | 'list'
    | 'progress'
    | 'bounced'
    | 'canceled'
    | 'disabled'
    | 'paused'
    | 'error'
    | 'optimized';
}

export const Label: React.SFC<LabelProps> = ({ className, text, type }) => (
  <span className={cn(Styles.label, className, Styles[`label-${type}`])}>
    {text}
  </span>
);

Label.defaultProps = {
  className: '',
  type: 'draft',
};

export default Label;
