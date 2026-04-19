import { Item } from './item';
export type AdventureSlot = 'chest' | 'head' | 'ring';
export type AdventureItemRarity = 'common' | 'rare' | 'epic' | 'legendary';
export interface AdventureItem extends Item {
    slot: AdventureSlot;
    rarity: AdventureItemRarity;
    level: number;
    createdAt?: string;
}
