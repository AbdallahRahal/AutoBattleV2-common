import { StatKey } from "./stat";
export interface DefiBoss {
    id: string;
    isLocked: boolean;
    lockedBy: string | null;
    lockedAt: Date | null;
    bestPercentByCharacter: Record<string, number>;
}
export interface DefiFight {
    id: string;
    fightId: string;
    characterId: string;
    characterName: string;
    hpPercentReached: number;
    bossHpAfter: number;
    fightDate: Date;
}
export interface DefiReward {
    type: 'power' | 'gold' | 'statPoint' | 'classPoint' | 'skin' | 'reroll' | 'stat' | 'relic';
    amount?: number;
    itemId?: string;
    statKey?: StatKey;
}
