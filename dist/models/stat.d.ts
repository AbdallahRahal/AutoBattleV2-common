export type StatRecord = Record<StatKey, number>;
export type StatKey = MainStatKey | CapStatKey;
export type MainStatRecord = Record<MainStatKey, number>;
export type MainStatKey = 'MaxLifePoint' | 'Haste' | 'Dodge' | 'CritChance' | 'CritPower' | 'Power' | 'Resistance' | 'PowerMultiplier' | 'HasteMultiplier' | 'CritChanceMultiplier' | 'CritPowerMultiplier' | 'DodgeMultiplier' | 'ResistanceMultiplier' | 'MaxLifePointMultiplier';
export type CapStatRecord = Record<CapStatKey, number>;
export type CapStatKey = 'DodgeCap' | 'ResistanceCap' | 'HasteCap' | 'CritChanceCap';
export type StatAllocationPointDistribution = Record<StatAllocationPointKey, number>;
export type StatAllocationPointKey = 'PowerAllocationPoint' | 'MaxLifePointMultiplierAllocationPoint' | 'HasteAllocationPoint' | 'CritChanceAllocationPoint' | 'CritPowerAllocationPoint' | 'DodgeAllocationPoint' | 'ResistanceAllocationPoint';
export declare const allocationPointValue: Partial<Record<MainStatKey, number>>;
