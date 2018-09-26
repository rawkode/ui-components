var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React from 'react';
import Styles from './styles/text-input.module.scss';
import cn from './utilities/classnames';
const convertInputValue = (value, inputType) => {
    return inputType === 'number' ? Number(value) : value;
};
// Calculates the step size based on how many decimal points are used
// ie: 1.3 => .1, 1.35 => 0.01, etc
const getStepSize = (value) => {
    const valueAsNumber = Number(value);
    if (valueAsNumber !== Math.floor(valueAsNumber)) {
        const split = value.toString().split('.');
        if (split[1]) {
            return 1 / Math.pow(10, split[1].length);
        }
    }
    return 1;
};
const onInputFocus = function () {
    this.setState({ isInputFocused: true });
};
// DEBT: (MCFE-746) Make ui-component text inputs support min and max values @reedsa
export class TextInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = { isInputFocused: false };
        this.onInputFocus = onInputFocus.bind(this);
        this.onInputBlur = this.onInputBlur.bind(this);
        this.onValueChange = this.onValueChange.bind(this);
    }
    get inputStyle() {
        const { fullWidth, style } = this.props;
        if (fullWidth) {
            return Object.assign({}, style, { width: '100%' });
        }
        return style;
    }
    onValueChange(event) {
        const value = convertInputValue(event.target.value, this.props.type);
        this.props.onChange(event, value);
    }
    onInputBlur(event) {
        this.setState({ isInputFocused: false });
        if (event !== undefined && this.props.onBlur) {
            const value = convertInputValue(event.target.value, this.props.type);
            this.props.onBlur(event, value);
        }
    }
    render() {
        const _a = this.props, { children, type, id, onChange, value, name, fullWidth, icon, isValid, isRequired, isDisabled, isLarge, isSearch, label, info, onBlur, style, units } = _a, attributes = __rest(_a, ["children", "type", "id", "onChange", "value", "name", "fullWidth", "icon", "isValid", "isRequired", "isDisabled", "isLarge", "isSearch", "label", "info", "onBlur", "style", "units"]);
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
        const step = type === 'number' ? this.props.step || getStepSize(value) : null;
        return (React.createElement("div", Object.assign({ className: classes, style: this.inputStyle }, dataUnits),
            React.createElement("label", { className: cn('input-text-label', Styles['input-text-label']), htmlFor: this.props.id }, label),
            React.createElement("input", Object.assign({ id: id, value: value, name: name, type: type, step: step, onChange: this.onValueChange, onFocus: this.onInputFocus, onBlur: this.onInputBlur, "aria-describedby": infoId }, attributes)),
            info && (React.createElement("span", { className: cn('input-info', Styles['input-info'], {
                    [Styles.danger]: !isValid,
                    danger: !isValid,
                }), id: infoId }, info)),
            children || ''));
    }
}
TextInput.defaultProps = {
    fullWidth: false,
    info: '',
    isDisabled: false,
    isLarge: false,
    isRequired: false,
    isSearch: false,
    isValid: true,
    label: '',
    style: {},
    value: '',
};
const initState = (props) => {
    return props.value;
};
export class StatefulTextInput extends React.Component {
    constructor() {
        super(...arguments);
        this.state = { value: initState(this.props) };
        this.onValueChange = (event) => {
            const value = convertInputValue(event.currentTarget.value, this.props.type);
            this.setState({ value });
            this.props.onChange(event, value);
        };
    }
    render() {
        return (React.createElement(TextInput, Object.assign({}, this.props, this.state, { onChange: this.onValueChange })));
    }
}
StatefulTextInput.defaultProps = {
    value: '',
};
//# sourceMappingURL=text-input.js.map