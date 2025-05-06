import { Item } from "./item";

export type StatRecord = Record<StatKey, number>;

export type StatKey =
    'MaxLifePoint'
    | 'Haste'
    | 'Dodge'
    | 'CritChance'
    | 'CritPower'
    | 'Power'
    | 'Resistance'
    | 'PowerMultiplier'
    | 'HasteMultiplier'
    | 'CritChanceMultiplier'
    | 'CritPowerMultiplier'
    | 'DodgeMultiplier'
    | 'ResistanceMultiplier'
    | 'MaxLifePointMultiplier';



export const statTranslation: Record<StatKey, string> = {
    MaxLifePoint: "Vie",
    Haste: "Hâte",
    Dodge: "Esquive",
    CritChance: "Chance Critique",
    CritPower: "Puissance Critique",
    Power: "Puissance",
    Resistance: "Résistance",
    PowerMultiplier: "Multiplicateur de Puissance",
    HasteMultiplier: "Multiplicateur de Hâte",
    CritChanceMultiplier: "Multiplicateur de Chance Critique",
    CritPowerMultiplier: "Multiplicateur de Puissance Critique",
    DodgeMultiplier: "Multiplicateur d'Esquive",
    ResistanceMultiplier: "Multiplicateur de Résistance",
    MaxLifePointMultiplier: "Multiplicateur de Vie"
};