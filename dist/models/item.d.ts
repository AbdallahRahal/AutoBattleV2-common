import { ClassRecord } from './character';
import { StatRecord } from './stat';
export declare enum SpellTag {
    ACTIVE = "active",
    PASSIVE = "passive",
    INVOCATION = "invocation",
    AURA = "aura",
    DEGAT = "degat",
    SOIN = "soin",
    BUFF = "buff",
    DEBUFF = "debuff"
}
export type ItemRarity = 'common' | 'rare' | 'epic' | 'legendary';
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
