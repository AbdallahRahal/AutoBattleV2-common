
export interface User {
    id: string;
    discordId: string;

    username: string;

    email: string;

    canTagOnMessage: boolean;

    modelList: string[];
    randomModelCoin: number;

    weaponSpellId: number[];
}

