import { ClassRecord } from './character';
import { StatRecord } from './stat';

export enum SpellTag {
    ACTIVE = 'active',
    PASSIVE = 'passive',
    INVOCATION = 'invocation',
    AURA = 'aura',
    DEGAT = 'degat',
    SOIN = 'soin',
    BUFF = 'buff',
    DEBUFF = 'debuff',
}

export enum ItemRarity {
    COMMON = 'common',
    RARE = 'rare',
    EPIC = 'epic',
    LEGENDARY = 'legendary',
}

export interface Item {
    id: string;
    name: string;

    stats: StatRecord;
    class: ClassRecord;
    isClassItem: boolean;
    isWeapon: boolean;
    isRelicItem: boolean;
    dropable: boolean;
    needRandomClass: boolean;
    inSeasonBlackList: boolean;
    spellId: number;
    icon: string;
    tags: SpellTag[];
    rank: number;
    rarity: ItemRarity;
}
