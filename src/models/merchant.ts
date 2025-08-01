import { Fight } from "./fight";
import { Item } from "./item";

export interface Merchant {
    id: string;

    isAvailable: boolean;
    isDead: boolean;

    inventory: {
        item: Item;
        price: number;
    }[];

}