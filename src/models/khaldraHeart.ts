import { StatKey, StatRecord } from './stat';
import { ItemRarity } from './item';

export type KhaldraHeartRewardType = 'spell' | 'stat';

export interface KhaldraHeartVote {
    characterId: string;
    choiceIndex: number; // 0, 1, ou 2
}

export interface KhaldraHeartRewardChoice {
    spellId?: number;
    statKey?: StatKey;
    statValue?: number;
}

export interface KhaldraHeartReward {
    id: string;
    type: KhaldraHeartRewardType;
    level: number;
    choices: KhaldraHeartRewardChoice[];
    votes: KhaldraHeartVote[];
    resolved: boolean;
    resolvedChoiceIndex?: number;
}

export interface KhaldraHeart {
    id: string;
    teamId: string;
    spellIdList: number[];
    stats: Partial<StatRecord>;
    pendingRewards: KhaldraHeartReward[];
}

export interface InfusionResponse {
    totalItemsInfused: number;
    totalSuccesses: number;
    statsGained: Partial<StatRecord>;
    updatedHeart: KhaldraHeart;
}

export const ITEM_RARITY_INFUSION_LEVEL: Record<ItemRarity, number> = {
    [ItemRarity.COMMON]: 1,
    [ItemRarity.RARE]: 2,
    [ItemRarity.EPIC]: 3,
    [ItemRarity.LEGENDARY]: 4,
};
