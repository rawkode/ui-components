var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
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
import cn from './utilities/classnames';
import findActiveIndex from './utilities/find-active-index';
var map = React.Children.map;
export var ToggleButtons = function (_a) {
    var children = _a.children, onChange = _a.onChange, className = _a.className, attributes = __rest(_a, ["children", "onChange", "className"]);
    return (React.createElement("div", __assign({ className: cn('btn-group', className) }, attributes), map(children, function (button, index) {
        return React.cloneElement(button, {
            onClick: function (event) {
                var _a = button.props, label = _a.children, onClick = _a.onClick;
                onClick(event);
                onChange(event, label, index);
            },
            type: 'group-item',
        });
    })));
};
var StatefulToggleButtons = /** @class */ (function (_super) {
    __extends(StatefulToggleButtons, _super);
    function StatefulToggleButtons() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            activeIndex: findActiveIndex(_this.props.children),
        };
        return _this;
    }
    StatefulToggleButtons.prototype.render = function () {
        var activeIndex = this.state.activeIndex;
        var buttons = map(this.props.children, function (button, index) {
            return React.cloneElement(button, {
                active: index === activeIndex,
            });
        });
        return (React.createElement(ToggleButtons, __assign({}, this.props, { onChange: this.handleChange }), buttons));
    };
    StatefulToggleButtons.prototype.handleChange = function (event, label, index) {
        var handleChange = this.props.onChange;
        this.setState({
            activeIndex: index,
        }, function () {
            handleChange(event, label, index);
        });
    };
    return StatefulToggleButtons;
}(React.Component));
export { StatefulToggleButtons };
export default ToggleButtons;
//# sourceMappingURL=toggle-buttons.js.map