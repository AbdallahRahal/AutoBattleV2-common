"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemRarity = exports.SpellTag = void 0;
var SpellTag;
(function (SpellTag) {
    SpellTag["ACTIVE"] = "active";
    SpellTag["PASSIVE"] = "passive";
    SpellTag["INVOCATION"] = "invocation";
    SpellTag["AURA"] = "aura";
    SpellTag["DEGAT"] = "degat";
    SpellTag["SOIN"] = "soin";
    SpellTag["BUFF"] = "buff";
    SpellTag["DEBUFF"] = "debuff";
})(SpellTag || (exports.SpellTag = SpellTag = {}));
var ItemRarity;
(function (ItemRarity) {
    ItemRarity["COMMON"] = "common";
    ItemRarity["RARE"] = "rare";
    ItemRarity["EPIC"] = "epic";
    ItemRarity["LEGENDARY"] = "legendary";
})(ItemRarity || (exports.ItemRarity = ItemRarity = {}));
