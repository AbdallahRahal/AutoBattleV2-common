"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultCharInitialClass = exports.ClassName = void 0;
var ClassName;
(function (ClassName) {
    ClassName["Arcanist"] = "Arcanist";
    ClassName["Scout"] = "Scout";
    ClassName["Guard"] = "Guard";
    ClassName["Invoker"] = "Invoker";
    ClassName["Doppelganger"] = "Doppelganger";
    ClassName["Vampire"] = "Vampire";
    ClassName["Enchantress"] = "Enchantress";
    ClassName["Lycan"] = "Lycan";
})(ClassName || (exports.ClassName = ClassName = {}));
exports.defaultCharInitialClass = Object.values(ClassName).reduce((acc, cls) => {
    acc[cls] = 0;
    return acc;
}, {});
