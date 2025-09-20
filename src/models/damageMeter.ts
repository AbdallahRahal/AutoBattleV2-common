export interface DamageRecord {
    targetName: string;
    amount: number;
    spellName: string;
    isCrit: boolean;
    type: "HEAL" | "DAMAGE"
}

export interface DamageMeterState {
    [fighterId: string]: {
        fighterName: string;
        totalDamage: number;
        totalHeal: number;
        details: DamageRecord[];
    };
}