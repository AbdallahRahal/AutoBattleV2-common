import { ClassName } from "./character";

export interface User {
    id: string;
    discordId: string;

    username: string;

    email: string;

    canTagOnMessage: boolean;

    modelList: string[];
    randomModelCoin: number;

    weaponSpellId: number[];

    accountStats: UserAccountStats

    itemRanks: Record<number, number>;

    lastModelSelected: string;

    role: 'user' | 'admin';
}

export interface UserAccountStats {

    charactersCreated: number;

    tournamentsWon: number;

    raidsWon: number;
    raidsPlayed: number

    duelsWon: number;
    duelsPlayed: number

    merchantsKilled: number;

    classePlayed: Record<ClassName, number>
    itemPlayed: Record<string, number>

}