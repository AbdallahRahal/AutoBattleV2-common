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

export function getInitialAndItemsStat(initialStat: StatRecord, items: Item[]): StatRecord {
    const finalStats: StatRecord = { ...initialStat };

    for (const item of items) {
        (Object.keys(finalStats) as StatKey[]).forEach((key) => {
            const itemStatValue = item.stats[key] ?? 0;
            finalStats[key] += itemStatValue;
        });
    }

    return finalStats;
}