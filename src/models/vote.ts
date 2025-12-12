import { StatKey } from "./stat";

export interface VoteReward {
    type: 'gold' | 'statPoint' | 'classPoint' | 'skin' | 'reroll' | 'stat';
    amount?: number;
    statKey?: StatKey; // Utilisé uniquement si type === 'stat'
}

