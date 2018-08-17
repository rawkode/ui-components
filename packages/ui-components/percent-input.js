var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Component } from 'react';
const evaluateRenderProp = prop => {
    return prop instanceof Function ? prop() : prop;
};
export class PercentInput extends Component {
    render() {
        const _a = this.props, { value } = _a, attributes = __rest(_a, ["value"]);
        return (React.createElement("input", Object.assign({ type: "number", value: value || 'AUTO' }, attributes)));
    }
}
export default PercentInput;
//# sourceMappingURL=percent-input.js.map