"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getInitialAndItemsStat = void 0;
function getInitialAndItemsStat(initialStat, items) {
    const finalStats = { ...initialStat };
    for (const item of items) {
        Object.keys(finalStats).forEach((key) => {
            const itemStatValue = item.stats[key] ?? 0;
            finalStats[key] += itemStatValue;
        });
    }
    return finalStats;
}
exports.getInitialAndItemsStat = getInitialAndItemsStat;
