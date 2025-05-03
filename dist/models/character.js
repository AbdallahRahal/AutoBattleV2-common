"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialAndItemsStat = exports.getInitialAndItemsClass = exports.ClassName = void 0;
var ClassName;
(function (ClassName) {
    ClassName["Arcanist"] = "Arcanist";
    ClassName["Scout"] = "Scout";
    ClassName["Guard"] = "Guard";
})(ClassName || (exports.ClassName = ClassName = {}));
function getInitialAndItemsClass(character, items) {
    const finalClass = { ...character.baseClass };
    console.log("base classe = ", finalClass);
    for (const item of items) {
        Object.keys(finalClass).forEach((key) => {
            const itemStatValue = item.class[key] ?? 0;
            finalClass[key] += itemStatValue;
        });
    }
    return finalClass;
}
exports.getInitialAndItemsClass = getInitialAndItemsClass;
function getInitialAndItemsStat(character, items) {
    const finalStats = { ...character.baseStats };
    for (const item of items) {
        Object.keys(finalStats).forEach((key) => {
            const itemStatValue = item.stats[key] ?? 0;
            finalStats[key] += itemStatValue;
        });
    }
    return finalStats;
}
exports.getInitialAndItemsStat = getInitialAndItemsStat;
