
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


