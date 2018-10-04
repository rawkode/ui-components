import React from 'react';
import Badge from './badge';
import { Button, ButtonProps, ButtonType } from './button';
import Icon from './icon';
import btnStyles from './styles/button.module.scss';
import Styles from './styles/dropdown.module.scss';
import cn from './utilities/classnames';

export interface DropdownButtonProps {
  children?: any;
  label?: string;
  gear?: boolean;
  className?: string;
}

export interface DropdownButtonState {
  active: boolean;
}

const { map } = React.Children;

export class DropdownButton extends React.Component<
  DropdownButtonProps & ButtonProps,
  DropdownButtonState
> {
  public static defaultProps = Button.defaultProps;

  public state = {
    active: false,
  };

  public componentWillUnmount() {
    document.removeEventListener('click', this.dismissDropdown);
  }

  public render() {
    const {
      active,
      badge,
      children,
      disabled,
      gear,
      group,
      icon,
      label,
      loading,
      onClick,
      onDark,
      small,
      type,
      className,
      ...attributes
    } = this.props;
    const isActive = this.state.active;
    const hasBadge: boolean = !!badge || badge === 0;
    const hasIcon: boolean = !!icon;

    const buttonType: ButtonType = type;

    const links = map(children, (link: React.ReactElement<any>) => {
      // allow false or null children
      if (!link) {
        return link;
      }

      return React.cloneElement(link, {
        className: cn(
          link.props.className,
          'dropdown-link',
          Styles['dropdown-link']
        ),
      });
    });

    return (
      <div className={cn('btn-list', btnStyles['btn-list'])}>
        <div
          className={cn(
            'btn',
            btnStyles.btn,
            btnStyles['btn-dropdown'],
            'btn-dropdown',
            'dropdown',
            Styles.dropdown,
            {
              [`btn-${buttonType}`]: !gear,
              [btnStyles[`btn-${buttonType}`]]: !gear,
              [btnStyles['btn-dropdown-gear']]: gear && !icon,
              'btn-dropdown-gear': gear && !icon,
              [btnStyles['btn-on-dark']]: onDark,
              'btn-on-dark': onDark,
              [btnStyles['btn-small']]: small,
              'btn-small': small,
              [btnStyles['has-badge']]: hasBadge,
              'has-badge': hasBadge,
              [Styles['has-badge']]: hasBadge,
              [Styles['has-icon']]: hasIcon || loading,
              'has-icon': hasIcon || loading,
              [btnStyles['is-active']]: isActive,
              'is-active': isActive,
              [Styles['is-active']]: isActive,
              [btnStyles['has-icon']]: hasIcon || loading,
              [btnStyles['is-disabled']]: disabled,
              'is-disabled': disabled,
              [btnStyles['is-loading']]: loading,
              'is-loading': loading,
            },
            className
          )}
          onClick={this.toggleDropdown}
          {...attributes}
        >
          {!gear && hasBadge && <Badge>{badge}</Badge>}
          {!gear && hasIcon && <Icon type={icon} onDark={type === 'primary'} />}
          {gear ? (
            <Icon
              className={cn('sg-icon', btnStyles['sg-icon'])}
              type={icon || 'gear'}
            />
          ) : (
            label
          )}
          <ul className={cn('dropdown-menu', Styles['dropdown-menu'])}>
            {links}
          </ul>
        </div>
      </div>
    );
  }

  private toggleDropdown = (event: React.MouseEvent<HTMLDivElement>) => {
    const { active: isActive } = this.state;

    return this.setState({ active: !isActive }, () => {
      if (this.state.active) {
        document.addEventListener('click', this.dismissDropdown, false);
      }
    });
  };

  private dismissDropdown = () => {
    this.setState({ active: false });
    document.removeEventListener('click', this.dismissDropdown, false);
  };
}

export default DropdownButton;
