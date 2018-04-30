import React from 'react';
import Badge from './badge';
import Icon from './icon';
import Loader from './loader';
import Styles from './styles/button.module.scss';
import { IconType } from './types/icons';
import cn from './utilities/classnames';

export type ButtonType = 'primary' | 'secondary' | 'danger' | 'group-item';

export interface AllButtonProps {
  disabled?: boolean;
  loading?: boolean;
  badge?: number | string;
  small?: boolean;
  onDark?: boolean;
  type?: ButtonType;
  onClick?: (event: any) => void;
  group?: boolean;
  active?: boolean;
  icon?: IconType;
  id?: string;
  isLink?: boolean;
}

export interface ButtonProps extends AllButtonProps {
  children?: string | React.ReactNode;
}

export interface ButtonizedProps extends AllButtonProps {
  children?: React.ReactElement<ButtonProps>;
}

export const Button: React.SFC<ButtonProps> = (props) => {
  return (
    <Buttonized {...props} >
      <button>
        {props.children}
      </button>
    </Buttonized>
  );
};

export const Buttonized: React.SFC<ButtonizedProps> = ({
  children,
  type,
  badge,
  disabled,
  loading,
  small,
  onDark,
  onClick,
  group,
  active,
  icon,
  id,
}) => {
  const hasBadge: boolean = !!badge || badge === 0;
  const hasIcon: boolean = !!icon;
  const content: any[] = [];

  if (hasBadge) {
    content.push(
      <Badge key={1}>{badge}</Badge>,
    );
  }

  if (hasIcon) {
    content.push(
      <Icon key={2} type={icon} />,
    );
  }

  if (loading) {
    content.push(
      <Loader key={3} small onDark={type === 'primary'} />,
    );
  }

  // the children of the element being buttonized
  if (children.props.children) {
    content.push(
      children.props.children,
    );
  }

  return (
    React.cloneElement(
      children,
      {
        className: cn(Styles.btn, Styles[`btn-${type}`], {
          [Styles['btn-on-dark']]: onDark,
          [Styles['btn-small']]: small,
          [Styles['has-badge']]: hasBadge,
          [Styles['has-icon']]: hasIcon || loading,
          [Styles['is-active']]: active,
          [Styles['is-disabled']]: disabled,
          [Styles['is-loading']]: loading,
        }),
        id,
        onClick,
      },
      content,
    )
  );
};

Button.defaultProps = {
  active: false,
  badge: null,
  children: '',
  disabled: false,
  group: false,
  icon: null,
  loading: false,
  onClick: () => {},
  onDark: false,
  small: false,
  type: 'primary',
};

export default Button;
