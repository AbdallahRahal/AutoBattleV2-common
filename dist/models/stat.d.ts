export type StatRecord = Record<StatKey, number>;
export type StatKey = 'MaxLifePoint' | 'Haste' | 'Dodge' | 'CritChance' | 'CritPower' | 'Power' | 'Resistance' | 'PowerMultiplier' | 'HasteMultiplier' | 'CritChanceMultiplier' | 'CritPowerMultiplier' | 'DodgeMultiplier' | 'ResistanceMultiplier' | 'MaxLifePointMultiplier';
export declare const statTranslation: Record<StatKey, string>;
export type StatAllocationPointDistribution = Record<AllocationPointKey, number>;
export type AllocationPointKey = 'HasteAllocationPoint' | 'CritChanceAllocationPoint' | 'CritPowerAllocationPoint' | 'DodgeAllocationPoint' | 'ResistanceAllocationPoint';
export declare const allocationPointValue: Partial<Record<StatKey, number>>;
