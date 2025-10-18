"use strict";
// packages/common/models/relic.ts
Object.defineProperty(exports, "__esModule", { value: true });
exports.RelicLineRarity = exports.RelicLineType = void 0;
var RelicLineType;
(function (RelicLineType) {
    RelicLineType["STAT"] = "STAT";
    RelicLineType["CLASS"] = "CLASS";
    RelicLineType["GOLD"] = "GOLD";
    RelicLineType["REROLL"] = "REROLL";
    RelicLineType["STAT_POINT"] = "STAT_POINT";
    RelicLineType["CLASS_POINT"] = "CLASS_POINT";
    RelicLineType["SPELL"] = "SPELL";
})(RelicLineType || (exports.RelicLineType = RelicLineType = {}));
var RelicLineRarity;
(function (RelicLineRarity) {
    RelicLineRarity["COMMON"] = "COMMON";
    RelicLineRarity["RARE"] = "RARE";
    RelicLineRarity["EPIC"] = "EPIC";
    RelicLineRarity["LEGENDARY"] = "LEGENDARY";
})(RelicLineRarity || (exports.RelicLineRarity = RelicLineRarity = {}));
