
export type StatRecord = Record<StatKey, number>;
export type StatKey = MainStatKey | CapStatKey;

export type MainStatRecord = Record<MainStatKey, number>;
export type MainStatKey =
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

export type CapStatRecord = Record<CapStatKey, number>;
export type CapStatKey =
    'GlobalStatCap'
    | 'DodgeCap'
    | 'ResistanceCap'
    | 'HasteCap'
    | 'CritChanceCap'


export type StatAllocationPointDistribution = Record<StatAllocationPointKey, number>;

export type StatAllocationPointKey =
    'PowerAllocationPoint'
    | 'MaxLifePointMultiplierAllocationPoint'
    | 'HasteAllocationPoint'
    | 'CritChanceAllocationPoint'
    | 'CritPowerAllocationPoint'
    | 'DodgeAllocationPoint'
    | 'ResistanceAllocationPoint';

export const allocationPointValue: Partial<Record<MainStatKey, number>> = {
    MaxLifePointMultiplier: 0.025,
    Power: 2,
    Haste: 1,
    Dodge: 1.5,
    CritChance: 1,
    CritPower: 1,
    Resistance: 1.5,
}