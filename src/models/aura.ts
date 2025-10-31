
export type AuraCategory = 'buff' | 'debuff' | 'hot' | 'dot'

export type AuraApplyBehavior = 'refresh' | 'stack_only' | 'stack_and_refresh' | 'new_instance';


export interface AuraSnapshot {
    auraId: string;
    name: string;
    category: AuraCategory;
    stacks: number;
    applicationTimestamp: number;
    expirationTimestamp: number;
    tickIntervalMs?: number;
}

export enum AURA_IDS {
    BouleDeFeu_Brulure = 'BouleDeFeu_Brulure',
    Toxicite_Poison = 'Toxicite_Poison',
    DanseDesOmbres_Buff = 'DanseDesOmbres_Buff',
    DrainSpirituel_Buff = 'DrainSpirituel_Buff',
    DrainSpirituel_Debuff = 'DrainSpirituel_Debuff',
    Fracture_Debuff = 'Fracture_Debuff',
    BrulureSacree_Marque = 'BrulureSacree_Marque',
    InvocationShaman_Attaque_Brulure = 'InvocationShaman_Attaque_Brulure',
    Spoliation_Buff = 'Spoliation_Buff',
    Spoliation_Debuff = 'Spoliation_Debuff',
    Fulgurance_Buff = 'Fulgurance_Buff',
    Marquage = 'Marquage',
}
