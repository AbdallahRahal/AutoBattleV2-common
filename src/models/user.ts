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
    relicId: string

    accountStats: UserAccountStats

    lastModelSelected: string;
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

}