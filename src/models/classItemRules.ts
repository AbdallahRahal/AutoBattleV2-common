import { ClassName } from "./character";

export interface ClassItemEquipRule {
    class: ClassName;
    minPoints: number;
    itemSpellId: number;
}
export const CLASS_PLAYED_THRESHOLD = 5;
export const classItemEquipRule: ClassItemEquipRule[] = [
    {
        class: ClassName.Arcanist,
        minPoints: CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1001,
    },
    {
        class: ClassName.Scout,
        minPoints: CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1002,
    },
    {
        class: ClassName.Guard,
        minPoints: CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1003,
    },
    {
        class: ClassName.Invoker,
        minPoints: CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1004,
    }
    ,
    {
        class: ClassName.Doppelganger,
        minPoints: CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1005,
    }
    ,
    {
        class: ClassName.Vampire,
        minPoints: CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1006,
    }
    ,
    {
        class: ClassName.Enchantress,
        minPoints: CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1007,
    },
    {
        class: ClassName.Lycan,
        minPoints: CLASS_PLAYED_THRESHOLD,
        itemSpellId: 1008,
    }
];
