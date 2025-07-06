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


export type StatAllocationPointDistribution = Record<StatAllocationPointKey, number>;
export type StatAllocationPointKey =
    'PowerAllocationPoint'
    | 'MaxLifePointAllocationPoint'
    | 'HasteAllocationPoint'
    | 'CritChanceAllocationPoint'
    | 'CritPowerAllocationPoint'
    | 'DodgeAllocationPoint'
    | 'ResistanceAllocationPoint';

export const allocationPointValue: Partial<Record<StatKey, number>> = {
    MaxLifePoint: 30,
    Power: 2,
    Haste: 1,
    Dodge: 1.5,
    CritChance: 1,
    CritPower: 1,
    Resistance: 1.5,
}