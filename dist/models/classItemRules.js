"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.classItemEquipRule = exports.CLASS_PLAYED_THRESHOLD = void 0;
const character_1 = require("./character");
exports.CLASS_PLAYED_THRESHOLD = 5;
exports.classItemEquipRule = [
    {
        class: character_1.ClassName.Arcanist,
        minPoints: exports.CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1001,
    },
    {
        class: character_1.ClassName.Scout,
        minPoints: exports.CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1002,
    },
    {
        class: character_1.ClassName.Guard,
        minPoints: exports.CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1003,
    },
    {
        class: character_1.ClassName.Invoker,
        minPoints: exports.CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1004,
    },
    {
        class: character_1.ClassName.Doppelganger,
        minPoints: exports.CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1005,
    },
    {
        class: character_1.ClassName.Vampire,
        minPoints: exports.CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1006,
    },
    {
        class: character_1.ClassName.Enchantress,
        minPoints: exports.CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1007,
    },
    {
        class: character_1.ClassName.Lycan,
        minPoints: exports.CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1008,
    }
];
