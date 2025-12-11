import { ClassRecord } from "./character";
import { StatRecord } from "./stat";

export enum SpellTag {
    ACTIVE = 'active',
    PASSIVE = 'passive',
    AURA = 'aura',
    DEGAT = 'degat',
    SOIN = 'soin',
    BUFF = 'buff',
    DEBUFF = 'debuff',
    INVOCATION = 'invocation',
}

export interface Item {
    id: string;
    name: string,

    stats: StatRecord;
    class: ClassRecord;
    isClassItem: boolean
    isWeapon: boolean
    isRelicItem: boolean
    dropable: boolean

    inSeasonBlackList: boolean

    spellId: number
    icon: string
    tags: SpellTag[]
}