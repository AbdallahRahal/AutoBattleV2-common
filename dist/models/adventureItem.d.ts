import { Item, ItemRarity } from './item';
export type AdventureSlot = 'chest' | 'head' | 'ring';
export type AdventureItemRarity = ItemRarity;
export interface AdventureItem extends Item {
    slot: AdventureSlot;
    level: number;
    createdAt?: string;
}
