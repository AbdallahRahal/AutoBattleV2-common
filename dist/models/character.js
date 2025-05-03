"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialAndItemsClass = exports.ClassName = void 0;
var ClassName;
(function (ClassName) {
    ClassName["Arcanist"] = "Arcanist";
    ClassName["Scout"] = "Scout";
    ClassName["Guard"] = "Guard";
})(ClassName || (exports.ClassName = ClassName = {}));
function getInitialAndItemsClass(initialClass, items) {
    const finalClass = { ...initialClass };
    for (const item of items) {
        Object.keys(finalClass).forEach((key) => {
            const itemStatValue = item.class[key] ?? 0;
            finalClass[key] += itemStatValue;
        });
    }
    return finalClass;
}
exports.getInitialAndItemsClass = getInitialAndItemsClass;
