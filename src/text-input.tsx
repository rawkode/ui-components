import React, { CSSProperties } from 'react';
import Styles from './styles/text-input.module.scss';
import { InputIcons } from './types/input-icons';
import { InputType } from './types/inputs';
import { Units } from './types/units';
import { Omit } from './types/utils';
import cn from './utilities/classnames';
const convertInputValue = (value: string, inputType: InputType) => {
  return inputType === 'number' ? Number(value) : value;
};

// Calculates the step size based on how many decimal points are used
// ie: 1.3 => .1, 1.35 => 0.01, etc
const getStepSize = (value: string | number) => {
  const valueAsNumber = Number(value);
  if (valueAsNumber !== Math.floor(valueAsNumber)) {
    const split = value.toString().split('.');
    if (split[1]) {
      return 1 / Math.pow(10, split[1].length);
    }
  }
  return 1;
};

const onInputFocus = function() {
  this.setState({ isInputFocused: true });
};

export interface TextInputProps {
  children?: React.ReactNode;
  type: InputType;
  id: string;
  onChange: (event: any, value: string | number) => void;
  value?: string | number;
  name?: string;
  fullWidth?: boolean;
  icon?: InputIcons;
  isValid?: boolean;
  isRequired?: boolean;
  isDisabled?: boolean;
  isLarge?: boolean;
  isSearch?: boolean;
  label?: string;
  info?: string;
  onBlur?: (event: FocusEvent, value: string | number) => void;
  style?: CSSProperties;
  step?: number;
  units?: Units;
}
/**
 * Inorder to allow for ...attributes we need to use
 * Partial<React.InputHTMLAttributes<HTMLInputElement>>
 * to add all of those possible types. However, this component is
 * redefining the function definition for onBlur, so we must omit the
 * original event hook from the possible props.
 */
export type HTMLInputElementProps = Partial<
  Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onBlur' | 'onChange'>
>;

// DEBT: (MCFE-746) Make ui-component text inputs support min and max values @reedsa
export class TextInput extends React.Component<
  TextInputProps & HTMLInputElementProps,
  { isInputFocused: boolean }
> {
  public static defaultProps = {
    fullWidth: false,
    info: '',
    isDisabled: false,
    isLarge: false,
    isRequired: false,
    isSearch: false,
    isValid: true,
    label: '',
    style: {} as CSSProperties,
    value: '',
  };

  public onInputFocus: (event: any) => void;
  public readonly state = { isInputFocused: false };
  constructor(
    props: TextInputProps & Partial<React.InputHTMLAttributes<HTMLInputElement>>
  ) {
    super(props);
    this.onInputFocus = onInputFocus.bind(this);
    this.onInputBlur = this.onInputBlur.bind(this);
    this.onValueChange = this.onValueChange.bind(this);
  }

  get inputStyle() {
    const { fullWidth, style } = this.props;
    if (fullWidth) {
      return { ...style, width: '100%' };
    }
    return style;
  }

  public onValueChange(event: any) {
    const value = convertInputValue(event.target.value, this.props.type);
    this.props.onChange(event, value);
  }

  public onInputBlur(event: any) {
    this.setState({ isInputFocused: false });

    if (event !== undefined && this.props.onBlur) {
      const value = convertInputValue(event.target.value, this.props.type);
      this.props.onBlur(event, value);
    }
  }

  public render() {
    const {
      children,
      type,
      id,
      onChange,
      value,
      name,
      fullWidth,
      icon,
      isValid,
      isRequired,
      isDisabled,
      isLarge,
      isSearch,
      label,
      info,
      onBlur,
      style,
      units,
      ...attributes
    } = this.props;

    const classes = cn('input-text-wrap', Styles['input-text-wrap'], {
      [Styles[`has-space-${icon}`]]: this.props.icon,
      [`has-space-${icon}`]: this.props.icon,
      [Styles['has-units']]: this.props.units,
      'has-units': this.props.units,
      [Styles['has-value']]: !!value || value === 0,
      'has-value': !!value || value === 0,
      [Styles['is-disabled']]: this.props.isDisabled,
      'is-disabled': this.props.isDisabled,
      [Styles['is-error']]: !this.props.isValid,
      'is-error': !this.props.isValid,
      [Styles['is-focused']]: this.state.isInputFocused,
      'is-focused': this.state.isInputFocused,
      [Styles['is-large']]: this.props.isLarge,
      'is-large': this.props.isLarge,
      [Styles['is-required']]: this.props.isRequired,
      'is-required': this.props.isRequired,
      [Styles['is-search']]: this.props.isSearch,
      'is-search': this.props.isSearch,
    });

    const infoId = info && `${id}-info`;
    const dataUnits = units && { 'data-units': units };
    const step =
      type === 'number' ? this.props.step || getStepSize(value) : null;
    return (
      <div className={classes} style={this.inputStyle} {...dataUnits}>
        <label
          className={cn('input-text-label', Styles['input-text-label'])}
          htmlFor={this.props.id}
        >
          {label}
        </label>
        <input
          id={id}
          value={value}
          name={name}
          type={type}
          step={step}
          onChange={this.onValueChange}
          onFocus={this.onInputFocus}
          onBlur={this.onInputBlur}
          aria-describedby={infoId}
          {...attributes}
        />
        {info && (
          <span
            className={cn('input-info', Styles['input-info'], {
              [Styles.danger]: !isValid,
              danger: !isValid,
            })}
            id={infoId}
          >
            {info}
          </span>
        )}
        {children || ''}
      </div>
    );
  }
}
const initState = (props: TextInputProps) => {
  return props.value;
};

// In order to allow inheritance with a subset of the parent's props, we have to do some crazy generics typing
// 2 type variable: AdditionalProps and ExcludedProps neither are required
// AdditionalProps: Any props you want to add in addition to the normal TextInput Props
// ExcludedProps: Any props that you want to remove from the normal TextInput Props

// I could not get AdditionalProps to work. Should be as simple as adding a & AdditionalProps, but noooo :(

export type BaseProps = TextInputProps & HTMLInputElementProps;

export class StatefulTextInput<
  ExcludedProps extends keyof BaseProps = never
> extends React.Component<Omit<BaseProps, ExcludedProps>> {
  public static defaultProps: Partial<TextInputProps> = {
    value: '',
  };

  public readonly state = { value: initState(this.props) };

  public onValueChange = (event: React.KeyboardEvent<HTMLInputElement>) => {
    const value = convertInputValue(event.currentTarget.value, this.props.type);
    this.setState({ value });
    this.props.onChange(event, value);
  };

  public render() {
    return (
      <TextInput
        {...this.props}
        {...this.state}
        onChange={this.onValueChange}
      />
    );
  }
}
