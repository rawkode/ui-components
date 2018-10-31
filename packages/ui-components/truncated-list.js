var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
import React, { Fragment } from 'react';
export const TruncatedList = (_a) => {
    var { items, limit = 3, className, link, renderItems, renderMore } = _a, attributes = __rest(_a, ["items", "limit", "className", "link", "renderItems", "renderMore"]);
    const shown = items.slice(0, limit);
    const abbreviationTitle = items.slice(limit);
    const abbreviatedText = abbreviationTitle.join(', ');
    const shownText = shown.join(', ');
    const truncated = items.slice(limit);
    const numberOfAdditionalItems = truncated.length;
    const hasAdditionalItems = numberOfAdditionalItems > 0;
    const additionalItemText = (React.createElement("span", null,
        ",",
        ' ',
        React.createElement("abbr", { title: abbreviatedText },
            link && React.createElement("a", { href: link },
                "+",
                numberOfAdditionalItems,
                " more"),
            !link && React.createElement(Fragment, null,
                "+",
                numberOfAdditionalItems,
                " more"))));
    return (React.createElement("span", Object.assign({ className: className }, attributes),
        renderItems ? renderItems(shown) : shownText,
        renderMore && renderMore(numberOfAdditionalItems.toString(), link),
        !renderMore && hasAdditionalItems && additionalItemText));
};
export default TruncatedList;
//# sourceMappingURL=truncated-list.js.map