import { ClassName } from "./character";
export interface UserAccountStats {
    charactersCreated: number;
    tournamentsWon: number;
    raidsWon: number;
    raidsPlayed: number;
    duelsWon: number;
    duelsPlayed: number;
    merchantsKilled: number;
    classePlayed: Record<ClassName, number>;
}
