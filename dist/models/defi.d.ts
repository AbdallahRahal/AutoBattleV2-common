export interface DefiBoss {
    id: string;
    isLocked: boolean;
    lockedBy: string | null;
    lockedAt: Date | null;
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
