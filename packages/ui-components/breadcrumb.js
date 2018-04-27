import React from 'react';
const { map } = React.Children;
const mapper = (children) => (map(children, (child, i) => (child && React.createElement("li", { key: child.props.to || child.props.href },
    React.createElement(child.type, Object.assign({}, child.props))))));
export const Breadcrumb = ({ children, withoutTrailingSlash, }) => (React.createElement("ol", { className: "breadcrumb" },
    mapper(children),
    !withoutTrailingSlash && React.createElement("li", null)));
Breadcrumb.defaultProps = {
    withoutTrailingSlash: false,
};
export default Breadcrumb;
//# sourceMappingURL=breadcrumb.js.map