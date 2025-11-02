export type AuraCategory = 'buff' | 'debuff' | 'hot' | 'dot';
export type AuraApplyBehavior = 'unique_by_caster' | 'unique' | 'unique_by_spell' | 'new_instance';
export interface AuraSnapshot {
    auraId: AURA_IDS;
    name: string;
    category: AuraCategory;
    stacks: number;
    applicationTimestamp: number;
    expirationTimestamp: number;
    tickIntervalMs?: number;
}
export declare enum AURA_IDS {
    BouleDeFeu_Brulure = "BouleDeFeu_Brulure",
    Toxicite_Poison = "Toxicite_Poison",
    DanseDesOmbres_Buff = "DanseDesOmbres_Buff",
    DrainSpirituel_Buff = "DrainSpirituel_Buff",
    DrainSpirituel_Debuff = "DrainSpirituel_Debuff",
    Fracture_Debuff = "Fracture_Debuff",
    BrulureSacree_Marque = "BrulureSacree_Marque",
    InvocationShaman_Attaque_Brulure = "InvocationShaman_Attaque_Brulure",
    Spoliation_Buff = "Spoliation_Buff",
    Spoliation_Debuff = "Spoliation_Debuff",
    Fulgurance_Buff = "Fulgurance_Buff",
    Marquage = "Marquage",
    Renaissance_Stack = "Renaissance_Stack",
    Renaissance_Heal = "Renaissance_Heal",
    SceauSanguin_Stack = "SceauSanguin_Stack",
    MarqueMortelle = "MarqueMortelle",
    Corruption_Stack = "Corruption_Stack",
    Saignee = "Saignee",
    Virevolte_Stack = "Virevolte_Stack",
    Virevolte_Dodge_Buff = "Virevolte_Dodge_Buff",
    Renouveau = "Renouveau",
    Paralysie = "Paralysie"
}
