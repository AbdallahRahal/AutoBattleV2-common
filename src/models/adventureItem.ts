import { Item } from './item';

export type AdventureSlot = 'chest' | 'head' | 'ring';

export interface AdventureItem extends Item {
    slot: AdventureSlot;
}
