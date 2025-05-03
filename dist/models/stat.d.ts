import { Item } from "./item";
export type StatRecord = Record<StatKey, number>;
export type StatKey = 'MaxLifePoint' | 'Haste' | 'Dodge' | 'CritChance' | 'CritPower' | 'Power' | 'Resistance' | 'PowerMultiplier' | 'HasteMultiplier' | 'CritChanceMultiplier' | 'CritPowerMultiplier' | 'DodgeMultiplier' | 'ResistanceMultiplier' | 'MaxLifePointMultiplier';
export declare function getInitialAndItemsStat(initialStat: StatRecord, items: Item[]): StatRecord;
