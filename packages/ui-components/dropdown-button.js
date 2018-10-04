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
import Badge from './badge';
import { Button } from './button';
import Icon from './icon';
import btnStyles from './styles/button.module.scss';
import Styles from './styles/dropdown.module.scss';
import cn from './utilities/classnames';
const { map } = React.Children;
export class DropdownButton extends React.Component {
    constructor() {
        super(...arguments);
        this.state = {
            active: false,
        };
        this.toggleDropdown = (event) => {
            const { active: isActive } = this.state;
            return this.setState({ active: !isActive }, () => {
                if (this.state.active) {
                    document.addEventListener('click', this.dismissDropdown, false);
                }
            });
        };
        this.dismissDropdown = () => {
            this.setState({ active: false });
            document.removeEventListener('click', this.dismissDropdown, false);
        };
    }
    componentWillUnmount() {
        document.removeEventListener('click', this.dismissDropdown);
    }
    render() {
        const _a = this.props, { active, badge, children, disabled, gear, group, icon, label, loading, onClick, onDark, small, type, className } = _a, attributes = __rest(_a, ["active", "badge", "children", "disabled", "gear", "group", "icon", "label", "loading", "onClick", "onDark", "small", "type", "className"]);
        const isActive = this.state.active;
        const hasBadge = !!badge || badge === 0;
        const hasIcon = !!icon;
        const buttonType = type;
        const links = map(children, (link) => {
            // allow false or null children
            if (!link) {
                return link;
            }
            return React.cloneElement(link, {
                className: cn(link.props.className, 'dropdown-link', Styles['dropdown-link']),
            });
        });
        return (React.createElement("div", { className: cn('btn-list', btnStyles['btn-list']) },
            React.createElement("div", Object.assign({ className: cn('btn', btnStyles.btn, btnStyles['btn-dropdown'], 'btn-dropdown', 'dropdown', Styles.dropdown, {
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
                }, className), onClick: this.toggleDropdown }, attributes),
                !gear && hasBadge && React.createElement(Badge, null, badge),
                !gear && hasIcon && React.createElement(Icon, { type: icon, onDark: type === 'primary' }),
                gear ? (React.createElement(Icon, { className: cn('sg-icon', btnStyles['sg-icon']), type: icon || 'gear' })) : (label),
                React.createElement("ul", { className: cn('dropdown-menu', Styles['dropdown-menu']) }, links))));
    }
}
DropdownButton.defaultProps = Button.defaultProps;
export default DropdownButton;
//# sourceMappingURL=dropdown-button.js.map