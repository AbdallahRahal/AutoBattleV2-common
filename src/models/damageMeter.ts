export interface DamageRecord {
    targetName: string;
    amount: number;
    spellName: string;
    isCrit: boolean;
}

export interface DamageMeterState {
    [fighterId: string]: {
        fighterName: string;
        totalDamage: number;
        totalHeal: number;
        details: DamageRecord[];
    };
}