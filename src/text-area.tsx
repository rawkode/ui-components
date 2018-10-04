import React, { Component } from 'react';
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

  public state = { focused: false, height: '25px' };

  // keep around an invisible textarea to measure the scrollheight of the visible textarea.
  // rapidly changing the height on the original textarea during render cycles
  // was causing some weirdness.
  public textareaMeasurer: HTMLTextAreaElement;

  public componentDidUpdate({ value: previousValue }: TextAreaProps) {
    const { value } = this.props;

    if (previousValue === value) {
      return;
    }

    this.setState({ height: this.calculateHeight() });
  }

  public calculateHeight = (): string => {
    const { maxHeight } = this.props;

    if (!this.textareaMeasurer) {
      return '25px';
    }

    return `${Math.min(this.textareaMeasurer.scrollHeight, maxHeight)}px`;
  };

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

    const { focused, height } = this.state;
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
          style={{ height }}
          {...attributes}
        />
        <textarea
          value={value}
          style={{ height: 0, visibility: 'hidden', border: 0 }}
          ref={textarea => (this.textareaMeasurer = textarea)}
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
