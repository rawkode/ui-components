var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';
import Icon from './icon';
import Styles from './styles/center-modal.module.scss';
import cn from './utilities/classnames';
import { modalWillReceiveProps } from './utilities/modals';
const evaluateRenderProp = prop => {
    return prop instanceof Function ? prop() : prop;
};
export class CenterModal extends Component {
    componentDidUpdate(prevProps) {
        modalWillReceiveProps(this.props, prevProps);
    }
    render() {
        const _a = this.props, { hasX, large, padding, modalContainer, onClose, open, renderBody, renderFooter, renderHeader, bodyNode, className } = _a, attributes = __rest(_a, ["hasX", "large", "padding", "modalContainer", "onClose", "open", "renderBody", "renderFooter", "renderHeader", "bodyNode", "className"]);
        // Using <> instead of <Fragment> is breaking the linter.
        return ReactDOM.createPortal(React.createElement(Fragment, null,
            React.createElement("div", Object.assign({ className: cn('center-modal', Styles['center-modal'], className, {
                    [Styles['has-padding']]: padding,
                    'has-padding': padding,
                    [Styles['is-large']]: large,
                    'is-large': large,
                    [Styles['is-visible']]: open,
                    'is-visible': open,
                }) }, attributes),
                hasX && (React.createElement(Icon, { type: "x", "data-role": "close-center-modal", onClick: onClose })),
                renderHeader && React.createElement("h2", null, evaluateRenderProp(renderHeader)),
                evaluateRenderProp(renderBody),
                renderFooter && (React.createElement("div", { className: cn('modal-footer', Styles['modal-footer']) }, evaluateRenderProp(this.props.renderFooter)))),
            React.createElement("div", { className: cn('modal-mask', Styles['modal-mask'], {
                    'is-visible': open,
                    [Styles['is-visible']]: open,
                }), onClick: onClose })), modalContainer);
    }
}
CenterModal.defaultProps = {
    bodyNode: document.body,
    hasX: false,
    large: false,
    modalContainer: document.body,
    padding: true,
};
export default CenterModal;
//# sourceMappingURL=center-modal.js.map