import * as cn from 'classnames';
import * as React from 'react';
export const Meter = ({ title, value }) => {
    return (React.createElement("div", { className: "meter-container" },
        React.createElement("span", { className: "meter-title" }, title),
        React.createElement("span", { className: "meter-value" },
            value,
            "%"),
        React.createElement("div", { className: "meter-bar" },
            React.createElement("div", { className: cn('meter-bar-fill', {
                    'is-above-50': value >= 50,
                    'is-below-25': value < 25,
                    'is-below-50': value < 50 && value >= 25,
                }), style: { width: `${value}%` } }))));
};
export default Meter;
//# sourceMappingURL=Meter.js.map