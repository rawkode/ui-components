import React, { Component, RefObject } from 'react';
import Icon from './icon';
import Styles from './styles/text-area.module.scss';
import Tooltip, { TooltipDirection } from './tooltip';
import cn from './utilities/classnames';

export interface TextAreaProps {
  disabled?: boolean;
  error?: boolean;
  id: string;
  info?: string;
  label: string;
  maxHeight?: number;
  required?: boolean;
  scrollable?: boolean;
  tooltip?: string;
  tooltipDirection?: TooltipDirection;
  value: string;
}

export class TextArea extends Component<
  TextAreaProps & React.InputHTMLAttributes<HTMLTextAreaElement>
> {
  public static defaultProps = {
    disabled: false,
    error: false,
    maxHeight: 500,
    required: false,
    scrollable: false,
  };

  public state = { focused: false };
  public textarea: RefObject<HTMLTextAreaElement>;

  public get height(): string {
    const { maxHeight } = this.props;

    if (!this.textarea) {
      return '25px';
    }

    // This is a terrible, yet necessary, idea.
    this.textarea.current.style.height = '';

    return `${Math.min(this.textarea.current.scrollHeight, maxHeight)}px`;
  }

  public setFocused = () => this.setState({ focused: true });
  public setBlurred = () => this.setState({ focused: false });

  public render() {
    const {
      children,
      disabled,
      error,
      id,
      info,
      label,
      onChange: handleChange,
      required,
      scrollable,
      value,
      tooltip,
      tooltipDirection,
      ...attributes
    } = this.props;

    const { focused } = this.state;
    const hasValue = !!value;

    return (
      <div
        className={cn('textarea-wrap', Styles['textarea-wrap'], {
          [Styles['has-value']]: hasValue,
          'has-value': hasValue,
          [Styles['is-disabled']]: disabled,
          'is-disabled': disabled,
          [Styles['is-error']]: error,
          'is-error': error,
          [Styles['is-focused']]: focused,
          'is-focused': focused,
          [Styles['is-required']]: required,
          'is-required': required,
          [Styles['is-scrollable']]: scrollable,
          'is-scrollable': scrollable,
        })}
      >
        <label
          className={cn('textarea-label', Styles['textarea-label'])}
          htmlFor={id}
        >
          {label}
        </label>
        <textarea
          id={id}
          value={value}
          onChange={handleChange}
          onFocus={this.setFocused}
          onBlur={this.setBlurred}
          disabled={disabled}
          style={{ height: this.height }}
          ref={this.textarea}
          {...attributes}
        />
        {info && (
          <span
            className={cn('textarea-info', Styles['textarea-info'], {
              [Styles['is-error']]: error,
              'is-error': error,
            })}
            id={`${id}-info`}
          >
            {info}
          </span>
        )}
        {children}
        {tooltip && (
          <div className={cn('textarea-tooltip', Styles['textarea-tooltip'])}>
            <Tooltip
              content={tooltip}
              length="large"
              direction={tooltipDirection}
            >
              <Icon type="info-circle" />
            </Tooltip>
          </div>
        )}
      </div>
    );
  }
}

export default TextArea;
