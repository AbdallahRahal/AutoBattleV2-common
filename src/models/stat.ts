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

export const statDescriptionTranslation: Record<StatKey, string> = {
    MaxLifePoint: "Augmente vos points de vie maximum",
    Haste: "Reduit le temps de recharge des armes et objets",
    Dodge: "Augmente les chances d'esquiver complètement les attaques.",
    CritChance: "Augmente les chances de réaliser un coup critique (50% de dégâts ou soins en plus).",
    CritPower: "Augmente le modificateur de dégâts et soins en cas de coup critique",
    Power: "Augmente les dégâts infligés et les soins prodigués.",
    Resistance: "Réduit les dégâts subit",
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