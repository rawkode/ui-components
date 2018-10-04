import React from 'react';
import ReactSelect from 'react-select';
import ReactCreateable from 'react-select/lib/Creatable';
import mixins from '../styles/global/mixins.scss';
import dropDownShadow from '../styles/global/mixins/dropdownShadow.scss';
import SassVars from '../styles/global/variables.scss';
import cn from '../utilities/classnames';
import Styles from './select.module.scss';
const inputSelect = {
    color: 'inherit',
    margin: 0,
};
const multiValueBaseStyles = {
    backgroundColor: SassVars['sg-blue'],
    color: SassVars.white,
    fontSize: 12,
};
const disabledLabel = (disabled) => disabled
    ? {
        backgroundColor: SassVars['select-disabled-color'],
    }
    : {};
const SelectStyles = {
    clearIndicator: (base) => {
        return { display: 'none' };
    },
    container: (base) => {
        return Object.assign({}, base);
    },
    control: (base, state) => {
        const control = {
            ':hover': {
                border: 0,
                borderBottom: `1px solid ${SassVars['slate-20']}`,
            },
            backgroundColor: 'transparent',
            border: 0,
            borderBottom: `1px solid ${SassVars['slate-20']}`,
            borderRadius: 0,
            boxShadow: 'none',
            color: SassVars.slate,
            fontSize: 13,
            minHeight: 'auto',
        };
        const focusState = state.isFocused
            ? {
                borderBottomColor: SassVars['sg-blue'],
                boxShadow: `${SassVars['sg-blue']} 0 1px 0`,
            }
            : {};
        const disabledState = state.selectProps.disabled
            ? {
                color: SassVars['select-disabled-color'],
            }
            : {};
        const errorState = state.selectProps.error
            ? {
                borderBottomColor: SassVars['ron-burgundy'],
                boxShadow: `${SassVars['ron-burgundy']} 0 1px 0`,
            }
            : {};
        const placeholderState = !state.hasValue
            ? {
                color: SassVars['slate-40'],
            }
            : {};
        return Object.assign({}, base, control, focusState, errorState, disabledState, placeholderState);
    },
    dropdownIndicator: (base) => {
        const dropdownIndicator = {
            padding: 0,
            '&::after': Object.assign({}, mixins, { color: SassVars['slate-60'], content: `${SassVars['icon-caret']}`, position: 'absolute', right: 5 }),
            svg: {
                display: 'none',
            },
        };
        return Object.assign({}, base, dropdownIndicator);
    },
    groupHeading: (base) => {
        const groupStyle = {
            color: SassVars.slate,
            fontSize: 13,
            fontWeight: 600,
            marginBottom: 0,
            padding: '9px 30px',
            textTransform: 'capitalize',
        };
        return Object.assign({}, base, groupStyle);
    },
    indicatorSeparator: () => {
        return {};
    },
    menu: (base) => {
        const menu = Object.assign({}, dropDownShadow, { backgroundColor: SassVars['slate-02'], borderColor: SassVars['slate-10'], borderRadius: 2, fontSize: 13, margin: 0 });
        return Object.assign({}, base, menu);
    },
    multiValue: (base, state) => {
        return Object.assign({}, base, multiValueBaseStyles, disabledLabel(state.selectProps.disabled));
    },
    multiValueLabel: (base, state) => {
        return Object.assign({}, base, multiValueBaseStyles, {
            padding: 3,
            paddingLeft: 6,
            paddingTop: 4,
        }, disabledLabel(state.selectProps.disabled));
    },
    multiValueRemove: (base, state) => {
        return Object.assign({}, base, Object.assign({}, multiValueBaseStyles, { ':hover': {
                backgroundColor: SassVars['sg-blue'],
                cursor: 'pointer',
            }, paddingLeft: 0 }), disabledLabel(state.selectProps.disabled));
    },
    option: (base, state) => {
        const focusedState = state.isFocused
            ? { backgroundColor: SassVars['slate-10'] }
            : {};
        const isSelected = state.isSelected
            ? { backgroundColor: SassVars['slate-20'], color: SassVars.slate }
            : {};
        return Object.assign({}, base, { padding: '9px 30px' }, focusedState, isSelected, { ':active': {}, 'line-height': '18px' });
    },
    placeholder: (base) => {
        return Object.assign({}, base, {
            marginLeft: 0,
            marginRight: 0,
        });
    },
    selectContainer: (base) => {
        return Object.assign({}, base, {
            marginLeft: 0,
            marginRight: 0,
        });
    },
    singleValue: (base) => {
        return Object.assign({}, base, inputSelect, {
            marginLeft: 0,
            marginRight: 0,
        });
    },
    valueContainer: (base) => {
        return Object.assign({}, base, inputSelect, {
            padding: 0,
        });
    },
};
const Select = props => {
    return (React.createElement("div", { className: cn('input-select-wrap', Styles['input-select-wrap'], {
            [Styles['is-disabled']]: props.disabled,
            'is-disabled': props.disabled,
            [Styles['is-error']]: props.error,
            'is-error': props.error,
            [Styles['is-required']]: props.required,
            'is-required': props.required,
        }) },
        props.label && (React.createElement("label", { className: cn('input-select-label', Styles['input-select-label']) }, props.label)),
        React.createElement(ReactSelect, Object.assign({}, props, { styles: Object.assign({}, SelectStyles, props.styles), isDisabled: props.disabled })),
        props.info && (React.createElement("span", { className: cn('input-info', Styles['input-info'], {
                danger: props.error,
                [Styles.danger]: props.error,
                isDisabled: props.disabled,
                [Styles.isDisabled]: props.disabled,
            }) }, props.info))));
};
const Createable = props => {
    return (React.createElement("div", { className: cn('input-select-wrap', Styles['input-select-wrap'], {
            [Styles['is-disabled']]: props.disabled,
            'is-disabled': props.disabled,
            [Styles['is-error']]: props.error,
            'is-error': props.error,
            [Styles['is-required']]: props.required,
            'is-required': props.required,
        }) },
        props.label && (React.createElement("label", { className: cn('input-select-label', Styles['input-select-label']) }, props.label)),
        React.createElement(ReactCreateable, Object.assign({}, props, { styles: Object.assign({}, SelectStyles, props.styles), isDisabled: props.disabled })),
        props.info && (React.createElement("span", { className: cn('input-info', Styles['input-info'], {
                danger: props.error,
                [Styles.danger]: props.error,
                isDisabled: props.disabled,
                [Styles.isDisabled]: props.disabled,
            }) }, props.info))));
};
export default Select;
export { Select, Createable };
//# sourceMappingURL=index.js.map